import React, {
  useState, useEffect, useCallback, useMemo,
} from 'react';
import withUser from '@U/hoc/withUser';
import PropTypes from 'prop-types';

import Basic from '@I/clothing/basic.png';

import Loading from '@C/clothing/Loading';
import Visualizer from '@C/clothing/Visualizer';
import Name from '@C/clothing/Name';

import { preloadImage } from '@U/functions/preload';
import { HeaderContent } from '@F/layout/Header';
import { withTheme } from 'styled-components';

import * as S from './styles';

function Clothing({ theme }) {
  // loading state
  const [isLoading, setIsLoading] = useState(true);
  const [loaded, setLoaded] = useState(0);

  // container size adjust state
  const [containerWidth, setContainerWidth] = useState(theme.windowWidth * 0.8);

  const CLOTHING_DATA = [
    {
      hangeul: '헤어', english: 'hair', number: 43, xPos: -42.5, yPos: 20, width: 460,
    },

    {
      hangeul: '눈', english: 'eyes', number: 12, xPos: 97.5, yPos: 228, width: 180,
    },
    {
      hangeul: '눈쎱', english: 'eyebrow', number: 10, xPos: 77.5, yPos: 198, width: 220,
    },
    // {
    //   hangeul: '악세사리', english: 'accessories', number: 33, xPos: 0, yPos: 0, width: 375,
    // },
    {
      hangeul: '입', english: 'lip', number: 17, xPos: 137.5, yPos: 266, width: 100,
    },
    {
      hangeul: '코', english: 'nose', number: 8, xPos: 160.55, yPos: 247, width: 55,
    },
    {
      hangeul: '신발', english: 'shoes', number: 15, xPos: 102, yPos: 621, width: 165,
    },
    {
      hangeul: '하의', english: 'bottomwear', number: 35, xPos: 77.5, yPos: 505, width: 220,
    },
    {
      hangeul: '상의', english: 'topwear', number: 44, xPos: 52.5, yPos: 351, width: 270,
    },
  ];

  // selected data set state
  const [selectedClothings, setSelectedClothings] = useState(Array(CLOTHING_DATA.length).fill(0));
  const [imageArray, setImageArray] = useState([]);

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

  const convert = useCallback((value) => (containerWidth < 500 ? (containerWidth / 375) * value : (500 / 375) * value), [theme, containerWidth]);

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

  return (
    <S.StyledClothing>
      <HeaderContent>옷입히기</HeaderContent>

      {isLoading ? <Loading loaded={loaded} /> : (
        <S.Content>
          <S.Container width={Math.min(containerWidth, 500)}>
            <S.Body src={Basic} top={convert(-8)} left={convert(0)} width={convert(375)} />
            {selectedClothings.map((sl, pr) => (
              <S.Element
                src={`https://snufestival.com/images/clothing/${CLOTHING_DATA[pr].english}/${sl + 1}.png`}
                top={convert(CLOTHING_DATA[pr].yPos)}
                left={convert(CLOTHING_DATA[pr].xPos)}
                width={convert(CLOTHING_DATA[pr].width)}
                key={pr}
                onClick={() => changePr(sl, pr)}
              />
            ))}
          </S.Container>
          <Name />
          <Visualizer
            CLOTHING_DATA={CLOTHING_DATA}
            imageArray={imageArray}
            sl={selectedClothings[currentPr]}
            pr={currentPr}
            changeSl={changeSl}
          />

        </S.Content>
      )}
    </S.StyledClothing>
  );
}
export default withTheme(withUser(Clothing));

Clothing.propTypes = {

};
