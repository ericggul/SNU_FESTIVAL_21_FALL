import React, {
  useState, useEffect, useCallback, useMemo, useRef,
} from 'react';

import PropTypes from 'prop-types';

import axios from 'axios';
import { toast } from 'react-toastify';
import Basic from '@I/clothing/basic.png';
import html2canvas from 'html2canvas';

import ControlArea from '@C/clothing/ControlArea';
import Loading from '@C/clothing/Loading';
import Visualizer from '@C/clothing/Visualizer';

import { preloadImage } from '@U/functions/preload';
import { HeaderContent } from '@F/layout/Header';
import { withTheme } from 'styled-components';

import { EventBehavior } from '@U/initializer/googleAnalytics';

import { CLOTHING_DATA, ACCESSORIES_DATA, BACKGROUND_PALETTES } from '@C/clothing/data';

import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';

import withUser from '@U/hoc/withUser';
import useMission from '@U/hooks/useMission';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { actions } from '@/redux/mission/state';

import * as S from './styles';

const CLIENT_ID = '720aa705557ed64';
function Clothing({ theme, user, isAuthorized }) {
  const mission = useMission();

  const dispatch = useDispatch();
  const history = useHistory();

  const hadPlayed = useMemo(() => isAuthorized && mission.clothing.length !== 0, [isAuthorized, mission]);
  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);

  // loading state
  const [isLoading, setIsLoading] = useState(true);
  const [loaded, setLoaded] = useState(0);
  // background
  const [selectedBackground, setSelectedBackground] = useState(hadPlayed ? mission.background : 4);

  const handleBackgroundChange = useCallback((i) => {
    setSelectedBackground(i);
  }, []);

  // container size adjust state
  const maxWidth = useMemo(() => 300 / theme.windowWidth, [theme]);
  const [containerSizeUnit, setContainerSizeUnit] = useState(Math.min(0.5, maxWidth));
  const containerWidth = useMemo(() => theme.windowWidth * containerSizeUnit, [containerSizeUnit, theme]);
  const [touched, setTouched] = useState(0);
  const timer = useRef(null);
  const alterValue = (sign) => {
    if (!timer.current) {
      setTouched(sign);
      timer.current = setInterval(() => {
        setContainerSizeUnit(unit => unit + sign * 0.001);
      }, 30);
    }
  };
  const clearAlter = () => {
    setTouched(0);
    clearInterval(timer.current);
    timer.current = null;
  };

  // selected data set state
  // Clothings: One selection for each part
  // Accessories: Multiple accessories possible
  const [selectedClothings, setSelectedClothings] = useState(hadPlayed ? mission.clothing : Array(CLOTHING_DATA.length).fill(-1));
  const [selectedAccessories, setSelectedAccessories] = useState(hadPlayed ? mission.accessorie : []);
  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    setSelectedClothings(hadPlayed ? mission.clothing : Array(CLOTHING_DATA.length).fill(-1));
    setSelectedAccessories(hadPlayed ? mission.accessorie : []);
    setSelectedBackground(hadPlayed ? mission.background : 4);
  }, [hadPlayed, mission.clothing]);

  // loading and calling image
  useEffect(() => {
    if (loaded === 0 && imageArray.length === 0) {
      CLOTHING_DATA.forEach((cld, i) => {
        let newArray = [];
        for (let j = 0; j < cld.number; j += 1) {
          newArray.push(`https://snufestival.com/images/clothing/${cld.english}/${j + 1}.png`);
        }
        imageArray.push(newArray);
        [newArray].forEach(preloadImage);
        setLoaded(ld => ld + 1);
      });
      let accArray = [];
      for (let k = 0; k < ACCESSORIES_DATA.number; k += 1) {
        accArray.push(`https://snufestival.com/images/clothing/${ACCESSORIES_DATA.english}/${k + 1}.png`);
      }
      imageArray.push(accArray);
      [accArray].forEach(preloadImage);
      setLoaded(ld => ld + 1);
    }
  }, [imageArray]);

  useEffect(() => {
    if (loaded >= CLOTHING_DATA.length + 1) {
      setIsLoading(false);
      toast('나만의 캐릭터를 만들고, 웹사이트에 숨어있는 빛을 모아보세요!',
        {
          autoClose: 4000, draggable: true,
        });
    }
  }, [loaded]);

  // eyebrow visible(=== hair on top)
  const [hairOnTop, setHairOnTop] = useState(true);

  // size converter
  const convert = useCallback((value) => (containerWidth < 500 ? (containerWidth / 375) * value : (500 / 375) * value), [theme, containerWidth]);

  // changing clothings
  // sl: Current Selected index of Selected Part
  // pr: Current Selected Part

  const [currentPr, setCurrentPr] = useState(0);

  const changeSl = useCallback((sl, pr) => {
    let tempArray = [...selectedClothings];
    tempArray[pr] = sl;
    setSelectedClothings(tempArray);
  }, [selectedClothings]);

  const changePr = useCallback((sl, pr) => {
    setCurrentPr(pr);
  }, [selectedClothings]);

  // adding accessories

  const changeSlAccessories = useCallback((accArray) => {
    setSelectedAccessories(accArray);
  }, [selectedClothings]);

  // capturing clothings
  const characterRef = useRef();
  const [screenShottedCharacter, setScreenShottedCharacter] = useState('');

  const save = useCallback(() => {
    if (isAuthorized) {
      EventBehavior('Clothing', 'Saved', 'saved');
      dispatch(actions.setFirestoreClothing(user, selectedClothings, selectedAccessories, selectedBackground));
      setTimeout(() => {
        history.push('/clothing/result');
      }, 300);
    } else {
      setIsSignInModalOpen(true);
    }
  }, [selectedClothings, selectedAccessories, selectedBackground, actions, isAuthorized]);

  const reset = useCallback(() => {
    setSelectedClothings(Array(CLOTHING_DATA.length).fill(-1));
    setSelectedAccessories([]);
    setSelectedBackground(4);
  }, []);

  const [img, setImg] = useState('');
  const handleInstaClick = useCallback(async () => {
    toast('카톡 여는 중...');
    if (characterRef.current) {
      await html2canvas(characterRef.current).then(canvas => {
        const url = canvas.toDataURL();
        let link = document.createElement('a');
        document.body.appendChild(link);
        link.href = url;
        link.download = '캐릭터.png';
        // link.click();
        // document.body.removeChild(link);

        console.log(url, typeof url);
        const apiBase = 'https://api.imgur.com/3/image';
        axios.post(apiBase, {
          image: url.split(',')[1],
          type: 'base64',
        }, {
          headers: {
            Authorization: `Client-ID ${CLIENT_ID}`,
          },
        }).then(res => {
          console.log(res);
          setImg(res.data.data.link);
          window.Kakao.Link.sendCustom({
            templateId: 64100,
            templateArgs: {
              imageUrl: res.data.data.link,
            },
          });
        }).catch(e => {
          console.log(e);
        });
      });
      // await toast('다운된 이미지를 공유하세요!');
    }
  }, [characterRef, selectedClothings]);

  return (
    <S.StyledClothing background={BACKGROUND_PALETTES[selectedBackground]}>
      <HeaderContent>옷 입히기</HeaderContent>
      {isLoading ? <Loading loaded={loaded} /> : (
        <S.Content>
          <ControlArea
            touched={touched}
            alterValue={alterValue}
            clearAlter={clearAlter}
            currentBackground={selectedBackground}
            onBackgroundClick={handleBackgroundChange}
            onHairClose={() => setHairOnTop(hr => !hr)}
          />
          <S.MidContainer>
            <S.Container width={Math.min(containerWidth, 500)} ref={characterRef} background={BACKGROUND_PALETTES[selectedBackground]}>
              <S.Body src={Basic} top={convert(-12)} left={convert(0)} width={convert(375)} />
              {
                selectedClothings[0] !== -1
                && (
                <S.Element
                  src={`https://snufestival.com/images/clothing/${CLOTHING_DATA[0].english}/${selectedClothings[0] + 1}.png`}
                  top={convert(CLOTHING_DATA[0].yPos)}
                  left={convert(CLOTHING_DATA[0].xPos)}
                  width={convert(CLOTHING_DATA[0].width)}
                  onClick={() => changePr(selectedClothings[0], 0)}
                  zIndexOnTop={hairOnTop}
                />
                )
              }
              {selectedClothings.slice(1).map((sl, pr) => (
                sl !== -1
                  ? (
                    <S.Element
                      src={`https://snufestival.com/images/clothing/${CLOTHING_DATA[pr + 1].english}/${sl + 1}.png`}
                      top={convert(CLOTHING_DATA[pr + 1].yPos)}
                      left={convert(CLOTHING_DATA[pr + 1].xPos)}
                      width={convert(CLOTHING_DATA[pr + 1].width)}
                      key={pr + 1}
                      onClick={() => changePr(sl, pr + 1)}
                    />
                  ) : null
              ))}
              {selectedAccessories.map((sl, i) => (
                (
                  <S.Element
                    src={`https://snufestival.com/images/clothing/${ACCESSORIES_DATA.english}/${sl + 1}.png`}
                    top={convert(ACCESSORIES_DATA.yPos)}
                    left={convert(ACCESSORIES_DATA.xPos)}
                    width={convert(ACCESSORIES_DATA.width)}
                    key={i}
                    zIndexOnTop
                  />
                )
              ))}
            </S.Container>
          </S.MidContainer>
          <S.Converter selectedBackground={selectedBackground}>
            {[...CLOTHING_DATA, ACCESSORIES_DATA].map((e, i) => (
              <S.ConverterCell
                onClick={() => setCurrentPr(i)}
                selected={currentPr === i}
                key={i}
              >
                {e.hangeul}
              </S.ConverterCell>
            ))}
          </S.Converter>
          <Visualizer
            imageArray={imageArray}
            sl={selectedClothings[currentPr]}
            slAccessories={selectedAccessories}
            pr={currentPr}
            changeSl={changeSl}
            changeSlAccessories={changeSlAccessories}
          />
          <S.SaveContainer>
            <S.Save onClick={handleInstaClick}>@너 닮았어</S.Save>
            <S.Save onClick={save}>저장하기</S.Save>
          </S.SaveContainer>
          {!isAuthorized && <S.SaveText>로그인 후에 저장해 주세요</S.SaveText>}
          <S.ResetText onClick={reset}>초기화</S.ResetText>
        </S.Content>
      )}
      {signInModalComponent}
    </S.StyledClothing>
  );
}
export default withTheme(withUser(Clothing));

Clothing.propTypes = {

};