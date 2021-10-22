import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import Close from '@I/icon/close.svg';
import * as S from './styles';

function MiniGameGuide({ setIsModalOpen }) {
  const history = useHistory();
  const goToLink = useCallback((link) => {
    history.push(`/activity/mini${link}`);
  }, [history]);

  const DATA = [
    { name: '오목', rule: '1회 이상 참여(ZOOM)', link: '/omok' },
    { name: '미궁', rule: '흑야/백야 중 한 세션 3문제 이상', link: '/riddle' },
    { name: '필기', rule: '82문제 중 30문제 이상', link: '/handwriting' },
    { name: '장소', rule: '9문제 중 6문제 이상', link: '/place' },
  ];
  return (
    <S.MiniGameGuideBox>

      <S.ContentBox>
        <S.Text>각 미니게임별 미션을 완수하면 자동으로 이벤트 응모가 됩니다!</S.Text>
        {DATA.map((data, i) => (
          <S.Row key={i} onClick={() => goToLink(data.link)}>
            <S.Header>{data.name}</S.Header>
            <S.Divider>|</S.Divider>
            <S.Body>{data.rule}</S.Body>
          </S.Row>
        ))}
        <S.SemiText>* 줌으로 진행되는 게임 특성상, 오목게임은 미션 완수 후에도 웹사이트에 미션 완료 도장이 보여지지 않습니다.</S.SemiText>
      </S.ContentBox>
      <S.CloseButton
        onClick={() => setIsModalOpen(false)}
      >
        <S.CloseIcon />
      </S.CloseButton>
    </S.MiniGameGuideBox>
  );
}
export default MiniGameGuide;

MiniGameGuide.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};
