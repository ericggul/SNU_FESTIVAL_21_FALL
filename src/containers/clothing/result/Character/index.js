import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import withUser from '@U/hoc/withUser';
import useMission from '@U/hooks/useMission';

import Basic from '@I/clothing/basic.png';
import { CLOTHING_DATA, ACCESSORIES_DATA } from '@C/clothing/data';

import * as S from './styles';

function Character({ jump, containerWidth }) {
  const mission = useMission();
  const convert = useCallback((value) => (containerWidth < 500 ? (containerWidth / 375) * value : (500 / 375) * value), [containerWidth]);
  const selectedClothings = useSelector(state => state.mission.clothing);
  const selectedAccessories = useSelector(state => state.mission.accessorie);

  return (
    <S.Container
      width={Math.min(containerWidth, 500)}
      jump={jump}
    >
      <S.Body src={Basic} top={convert(-12)} left={convert(0)} width={convert(375)} />
      <S.Element
        src={`https://snufestival.com/images/clothing/${CLOTHING_DATA[0].english}/${selectedClothings[0] + 1}.png`}
        top={convert(CLOTHING_DATA[0].yPos)}
        left={convert(CLOTHING_DATA[0].xPos)}
        width={convert(CLOTHING_DATA[0].width)}
        zIndexOnTop
      />
      {selectedClothings.slice(1).map((sl, pr) => (
        <S.Element
          src={`https://snufestival.com/images/clothing/${CLOTHING_DATA[pr + 1].english}/${sl + 1}.png`}
          top={convert(CLOTHING_DATA[pr + 1].yPos)}
          left={convert(CLOTHING_DATA[pr + 1].xPos)}
          width={convert(CLOTHING_DATA[pr + 1].width)}
          key={pr + 1}
        />
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
  );
}
export default withUser(Character);

Character.propTypes = {

};
