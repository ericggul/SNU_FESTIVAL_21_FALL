import React, {
  useState, useEffect, useCallback, useMemo, useRef,
} from 'react';
import withUser from '@U/hoc/withUser';
import useLongPress from '@U/hooks/useLongPress';
import PropTypes from 'prop-types';
import html2canvas from 'html2canvas';

import Basic from '@I/clothing/basic.png';

import Kakao from '@C/clothing/Kakao';
import ControlArea from '@C/clothing/ControlArea';
import Loading from '@C/clothing/Loading';
import Visualizer from '@C/clothing/Visualizer';
import Name from '@C/clothing/Name';

import { preloadImage } from '@U/functions/preload';
import { HeaderContent } from '@F/layout/Header';
import { withTheme } from 'styled-components';

import { CLOTHING_DATA, ACCESSORIES_DATA, BACKGROUND_PALETTES } from '@C/clothing/data';

import * as S from './styles';

function Clothing({ theme }) {
  // loading state
  const [isLoading, setIsLoading] = useState(true);
  const [loaded, setLoaded] = useState(0);

  // background

  const [selectedBackground, setSelectedBackground] = useState(0);

  const handleBackgroundChange = useCallback((i) => {
    setSelectedBackground(i);
  }, []);

  // container size adjust state
  const maxWidth = useMemo(() => 500 / theme.windowWidth, [theme]);
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
  const [selectedClothings, setSelectedClothings] = useState(Array(CLOTHING_DATA.length).fill(0));
  const [selectedAccessories, setSelectedAccessories] = useState(Array(ACCESSORIES_DATA.number).fill(0));
  const [imageArray, setImageArray] = useState([]);

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
    }
  }, [loaded]);

  // eyebrow visible(=== hair on top)
  const [hairOnTop, setHairOnTop] = useState(false);

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

  const changeSlAccessories = useCallback(() => {
    console.log('change');
  }, [selectedClothings]);

  // capturing clothings
  const characterRef = useRef();
  const [screenShottedCharacter, setScreenShottedCharacter] = useState('');

  const handleKakaoClick = useCallback(() => {
    if (characterRef.current) {
      html2canvas(characterRef.current).then(canvas => {
        console.log('hey');
        setScreenShottedCharacter(canvas.toDataURL('image/jpg'));
      });
    }
  }, [characterRef, selectedClothings]);

  return (
    <S.StyledClothing background={BACKGROUND_PALETTES[selectedBackground]}>
      <HeaderContent>옷입히기</HeaderContent>

      {isLoading ? <Loading loaded={loaded} /> : (
        <S.Content>
          <S.MidContainer ref={characterRef}>
            <S.Text onClick={() => setHairOnTop(hr => !hr)}>눈썹 가리기</S.Text>
            <ControlArea
              touched={touched}
              alterValue={alterValue}
              clearAlter={clearAlter}
              currentBackground={selectedBackground}
              onBackgroundClick={handleBackgroundChange}
            />
            <S.Container width={Math.min(containerWidth, 500)}>
              <S.Body src={Basic} top={convert(-12)} left={convert(0)} width={convert(375)} />

              <S.Element
                src={`https://snufestival.com/images/clothing/${CLOTHING_DATA[0].english}/${selectedClothings[0] + 1}.png`}
                top={convert(CLOTHING_DATA[0].yPos)}
                left={convert(CLOTHING_DATA[0].xPos)}
                width={convert(CLOTHING_DATA[0].width)}
                onClick={() => changePr(selectedClothings[0], 0)}
                zIndexOnTop={hairOnTop}
              />
              {selectedClothings.slice(1).map((sl, pr) => (
                <S.Element
                  src={`https://snufestival.com/images/clothing/${CLOTHING_DATA[pr + 1].english}/${sl + 1}.png`}
                  top={convert(CLOTHING_DATA[pr + 1].yPos)}
                  left={convert(CLOTHING_DATA[pr + 1].xPos)}
                  width={convert(CLOTHING_DATA[pr + 1].width)}
                  key={pr + 1}
                  onClick={() => changePr(sl, pr + 1)}
                />
              ))}
              {selectedAccessories.map((haveOrNot, sl) => (
                haveOrNot === 1
                && (
                <S.Element
                  src={`https://snufestival.com/images/clothing/${ACCESSORIES_DATA.english}/${sl + 1}.png`}
                  top={convert(ACCESSORIES_DATA.yPos)}
                  left={convert(ACCESSORIES_DATA.xPos)}
                  width={convert(ACCESSORIES_DATA.width)}
                  key={sl}
                />
                )
              ))}
            </S.Container>
            <Name />
          </S.MidContainer>
          <Visualizer
            imageArray={imageArray}
            sl={selectedClothings[currentPr]}
            pr={currentPr}
            changeSl={changeSl}
          />
        </S.Content>
      )}
      <Kakao onClick={handleKakaoClick} url={screenShottedCharacter} />
    </S.StyledClothing>
  );
}
export default withTheme(withUser(Clothing));

Clothing.propTypes = {

};
