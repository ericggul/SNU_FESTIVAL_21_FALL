import React, { useCallback } from 'react';
import KakaoIcon from '@I/icon/kakao.svg';
import PropTypes from 'prop-types';
import * as S from './styles';

function Kakao({ selectedClothings }) {
  const shareThroughKakao = useCallback(() => {
    window.Kakao.Link.sendCustom({
      templateId: 60678,
      templateArgs: {
        selectedClothings,
        // imageUrl: `https://snufestival.com/images/achieve-card.png`,
        imageUrl: `https://snufestival.com/images/${result}.png`,
      },
    });
    // EventBehavior('Tarot', 'Click Tarot Kakao Share', `share ${result} by kakao`);
  }, [selectedClothings]);

  return (
    <S.StyledKakao>
      Kakao
    </S.StyledKakao>
  );
}
export default Kakao;

Kakao.propTypes = {

};
