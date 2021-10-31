import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import { HeaderContent } from '@F/layout/Header';
import { withTheme } from 'styled-components';
import useModal from '@U/hooks/useModal';
import OmokGuide from '@F/modal/content/OmokGuide';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import Board from '@I/activity/omok/board.png';
import Black from '@I/activity/omok/black.png';
import White from '@I/activity/omok/white.png';

import { EventBehavior } from '@U/initializer/googleAnalytics';
import * as S from './styles';

function Omok({ theme }) {
  const [mode, setMode] = useState(null);
  const mainRef = useRef();
  const { modalComponent: omokModalComponent, setIsModalOpen: setIsOmokModalOpen } = useModal(OmokGuide, true, false, {
    version: mode,
  });

  const createOmok = useCallback((e) => {
    const divider = theme.windowWidth < 768 ? 30 : 50;
    if (mainRef.current) {
      const n = document.createElement('div');
      n.className = 'omok';
      const color = Math.random() < 0.5 ? 'black' : '#ddd';
      n.setAttribute('style',
        `position: absolute;
        left: ${Math.round(e.pageX / divider) * divider}px;
        top: ${Math.round(e.pageY / divider) * divider}px; 
        width: 1.5rem; 
        height: 1.5rem; 
        border-radius: .75rem;
        background: ${color};
        trasnform: translate(-50%, -50%);
        box-shadow: .1rem .1rem .2rem ${color}, .1rem .1rem .5rem ${color};`);
      mainRef.current.appendChild(n);
      // setTimeout(() => { mainRef.current.removeChild(n); }, 5000);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', createOmok);
    return () => document.removeEventListener('click', createOmok);
  }, []);

  const transit = useCallback((ver) => {
    setMode(ver);

    setIsOmokModalOpen(true);
  }, [mode, setIsOmokModalOpen]);

  const [clicked, setClicked] = useState(false);

  const goToOmok = useCallback(() => {
    setClicked(true);
    const today = new Date();
    const hours = today.getHours();
    if (today >= 2 && today <= 5 && hours >= 11 && hours <= 17) {
      EventBehavior('Activity', 'Click Omok', 'omok clicked');
    } else {
      toast('11시에 다시오세요!');
      setTimeout(() => {
        setClicked(false);
      }, 400);
    }
  }, []);

  return (
    <S.StyledOmok>
      <HeaderContent backgroundColor={theme.palette.OMOK_PURPLE}>
        오목
      </HeaderContent>
      <S.Container ref={mainRef}>
        <S.Sector>
          <S.Board src={Board} />

          <S.Info>
            <p>진행일시</p>
            <p>11월 2일(화) - 11월 5일(금)</p>
            <p>11:00 - 17:00(ZOOM)</p>
          </S.Info>
        </S.Sector>
        <S.Sector>
          <S.Descp>
            <p>관악의 숨겨진 오목 고수를 찾아라!</p>
            <p>룰은 쉽지만 머리 좀 쓴다는 샤대생들끼리 붙는다면 예상 못한 진풍경이 펼쳐질지도 몰라요.</p>
            <S.EmphText>이벤트: 오목 게임에 최소 1번 참여하세요!</S.EmphText>
          </S.Descp>
          <S.Links>
            <S.SingleLink onClick={() => transit('black')}>
              <S.Image src={Black} />
              <S.Text>게임 설명</S.Text>
            </S.SingleLink>
            <S.SingleLink onClick={() => transit('white')}>
              <S.Image src={White} />
              <S.Text>참여 방법</S.Text>
            </S.SingleLink>
          </S.Links>
          <S.Button onClick={goToOmok} clicked={clicked}>줌 링크 바로 가기</S.Button>
        </S.Sector>
      </S.Container>
      {omokModalComponent}

    </S.StyledOmok>
  );
}
export default withTheme(Omok);

Omok.propTypes = {

};
