import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import { HeaderContent } from '@F/layout/Header';
import { withTheme } from 'styled-components';
import useModal from '@U/hooks/useModal';
import OmokGuide from '@F/modal/content/OmokGuide';
import PropTypes from 'prop-types';

import Board from '@I/activity/omok/board.png';
import Black from '@I/activity/omok/black.png';
import White from '@I/activity/omok/white.png';
import * as S from './styles';

function Omok({ theme }) {
  const [mode, setMode] = useState(null);
  const mainRef = useRef();
  const { modalComponent: omokModalComponent, setIsModalOpen: setIsOmokModalOpen } = useModal(OmokGuide, { mode });

  const createOmok = useCallback((e) => {
    console.log(e.x, e.y);
    const divider = theme.windowWidth < 768 ? 30 : 50;
    if (mainRef.current) {
      const n = document.createElement('div');
      n.className = 'omok';
      const color = Math.random() < 0.5 ? 'black' : '#ddd';
      n.setAttribute('style',
        `position: absolute;
        left: ${Math.round(e.x / divider) * divider}px;
        top: ${Math.round(e.y / divider) * divider}px; 
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
            <p>10월 26일(화) - 10월 29일(금)</p>
            <p>11:00 - 17:00</p>
          </S.Info>
        </S.Sector>
        <S.Sector>
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
          <S.Button>줌 링크 바로 가기</S.Button>
        </S.Sector>
      </S.Container>
      {omokModalComponent}
    </S.StyledOmok>
  );
}
export default withTheme(Omok);

Omok.propTypes = {

};
