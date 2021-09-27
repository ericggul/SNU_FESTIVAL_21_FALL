import React from 'react';
import Map from '@I/jabti/Map.png';
import Close from '@I/icon/close.svg';
import PropTypes from 'prop-types';
import * as S from './styles';

function MapGuide({ setIsModalOpen }) {
  return (
    <S.StyledMapGuide onClick={() => setIsModalOpen(false)}>
      <S.EventText>
        나와 같은 유형이 많이 모일수록 배경의 불빛이 더 많아집니다!!
      </S.EventText>
      <S.MapContainer src={Map} />
      <S.EventText>
        결과페이지를 캡쳐해서 인스타 스토리에 올리고 @snufestival 태그하면 어마어마한 상품이 쏟아집니다 ('∀'●)★ ★
      </S.EventText>
    </S.StyledMapGuide>
  );
}
export default MapGuide;

MapGuide.propTypes = {

};
