import React, {
  useState, useEffect, useCallback, useMemo, useRef,
} from 'react';
import withUser from '@U/hoc/withUser';
import PropTypes from 'prop-types';
import html2canvas from 'html2canvas';

import Basic from '@I/clothing/basic.png';

import Kakao from '@C/clothing/Kakao';
import Loading from '@C/clothing/Loading';
import Visualizer from '@C/clothing/Visualizer';
import Name from '@C/clothing/Name';

import { preloadImage } from '@U/functions/preload';
import { HeaderContent } from '@F/layout/Header';
import { withTheme } from 'styled-components';

import { CLOTHING_DATA } from '@C/clothing/data';

import * as S from './styles';

function Clothing({ theme }) {
  // loading state
  const [isLoading, setIsLoading] = useState(true);
  const [loaded, setLoaded] = useState(0);

  const BACKGROUND_PALETTES = ['#c5c5c5', '#fadbd7', '#ffe2bd', '#f8c4f2', '#c6d5ff', '#fff4bb', '#eddbf9', '#cef1e4', '#f8ffdb', '#d9d3f0', '#e1ecfc'];

  // container size adjust state
  const [containerSizeUnit, setContainerSizeUnit] = useState(0.5);
  const containerWidth = useMemo(() => theme.windowWidth * containerSizeUnit, [containerSizeUnit, theme]);

  // selected data set state
  const [selectedClothings, setSelectedClothings] = useState(Array(CLOTHING_DATA.length).fill(0));
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
    }
  }, [imageArray]);

  console.log(loaded);

  useEffect(() => {
    if (loaded >= CLOTHING_DATA.length) {
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

  // capturing clothings
  const characterRef = useRef();
  const [screenShottedCharacter, setScreenShottedCharacter] = useState('');

  const handleKakaoClick = useCallback(() => {
    if (characterRef.current) {
      html2canvas(characterRef.current).then(canvas => {
        console.log('hey');
        setScreenShottedCharacter(canvas.toDataURL());
      });
    }
  }, [characterRef, selectedClothings]);

  console.log(selectedClothings.slice(1));

  return (
    <S.StyledClothing>
      <HeaderContent>옷입히기</HeaderContent>

      {isLoading ? <Loading loaded={loaded} /> : (
        <S.Content>
          <S.MidContainer ref={characterRef}>
            <S.Text onClick={() => setHairOnTop(hr => !hr)}>눈썹 가리기</S.Text>
            <S.ControlUnit>
              <S.ControlIcon onClick={() => setContainerSizeUnit(unit => unit + 0.001)}>+</S.ControlIcon>
              <S.ControlIcon onClick={() => setContainerSizeUnit(unit => unit - 0.001)}>-</S.ControlIcon>
            </S.ControlUnit>
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
            </S.Container>
            <Name />
          </S.MidContainer>
          <Visualizer
            CLOTHING_DATA={CLOTHING_DATA}
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
