import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Close from '@I/icon/close.svg';
import { useHistory } from 'react-router';
import * as S from './styles';

function MissionGuide({ setIsModalOpen, stamp, name }) {
  const history = useHistory();
  const goToHome = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <S.MissionGuideBox>
      <S.Image src={Close} alt="close" onClick={() => setIsModalOpen(false)} />
      <S.ContentBox>
        <p>
          {name}
          {' '}
          미션을 완료했어요!
        </p>
        <p>스탬프 1개 획득!</p>
        <S.Stamp src={stamp} alt="미션스탬프" />
        <p>메인 화면에서 스탬프 획득 현황을 확인해보세요!</p>
        <S.Button onClick={goToHome}>
          메인 화면으로 가기
        </S.Button>
      </S.ContentBox>
    </S.MissionGuideBox>
  );
}
export default MissionGuide;

MissionGuide.propTypes = {

};
