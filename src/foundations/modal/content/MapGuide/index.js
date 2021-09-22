import React from 'react';
import Map from '@I/jabti/Map.png';
import Close from '@I/icon/close.svg';
import PropTypes from 'prop-types';
import * as S from './styles';

function MapGuide({ setIsModalOpen }) {
  return (
    <S.StyledMapGuide onClick={() => setIsModalOpen(false)}>
      <S.MapContainer src={Map} />
    </S.StyledMapGuide>
  );
}
export default MapGuide;

MapGuide.propTypes = {

};
