import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Close from '@I/icon/close.svg';
import { useHistory } from 'react-router';
import * as S from './styles';

function MissionGuide({ setIsModalOpen, name }) {
  const history = useHistory();

  return (
    <S.MissionGuideBox>
      <S.Image src={Close} alt="close" onClick={() => setIsModalOpen(false)} />
      <S.ContentBox>
        <p>
          {name}
          {' '}
          오호.. 이 포켓몬은 어디에 있을까
        </p>
        <S.Button onClick={() => setIsModalOpen(false)}>
          지도로 가기
        </S.Button>
      </S.ContentBox>
    </S.MissionGuideBox>
  );
}
export default MissionGuide;

MissionGuide.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
