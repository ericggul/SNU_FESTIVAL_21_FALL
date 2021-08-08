import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import withUser from '@U/hoc/withUser';
import GuessTheSong from '@I/activity/home/guess-the-song.png';
import Riddle from '@I/activity/home/riddle.png';
import TreasureHunt from '@I/activity/home/treasure-hunt.png';
import BlackAndWhite from '@I/activity/home/black-and-white.png';
import Event from '@I/activity/home/event.png';
import Complete from '@I/activity/home/complete.png';
import { useHistory } from 'react-router';
import useMiniGame from '@U/hooks/useMiniGame';
import useModal from '@U/hooks/useModal';
import PolaroidGuide from '@C/activity/mini/home/PolaroidGuide';
import * as S from './styles';

function GameSection() {
  const getRandom = (a, b) => Math.random() * (b - a) + a;
  const miniGame = useMiniGame();
  const history = useHistory();
  const goToPage = useCallback((route) => {
    history.push(route);
  }, [history]);
  const { modalComponent: PolaroidModalComponent, setIsModalOpen: setPolaroidModalOpen } = useModal(PolaroidGuide);

  return (
    <>
      <S.StyledGameSection>
        <S.GameWrapper>
          <S.Game onClick={() => goToPage('/activity/mini/guess-the-song')} delay={getRandom(0, 1)} duration={getRandom(1, 7)}>
            <img src={GuessTheSong} alt="노래맞히기" />
            {miniGame.stage1 && <S.Complete src={Complete} alt="완료" />}
          </S.Game>
          <S.Game onClick={() => goToPage('/activity/mini/treasure-hunt')} delay={getRandom(0, 1)} duration={getRandom(2, 7)}>
            <img src={TreasureHunt} alt="보물찾기" />
            {miniGame.stage2 && <S.Complete src={Complete} alt="완료" />}
          </S.Game>
          <S.Game onClick={() => goToPage('/activity/mini/riddle')} delay={getRandom(0, 1)} duration={getRandom(2, 7)}>
            <img src={Riddle} alt="미궁게임" />
            {miniGame.stage3 && <S.Complete src={Complete} alt="완료" />}
          </S.Game>
          <S.Game onClick={() => goToPage('/activity/mini/black-and-white')} delay={getRandom(0, 1)} duration={getRandom(2, 7)}>
            <img src={BlackAndWhite} alt="흑과백" />
            {miniGame.stage4 && <S.Complete src={Complete} alt="완료" />}
          </S.Game>
        </S.GameWrapper>
        <S.ClearButton onClick={() => setPolaroidModalOpen(true)}>
          <img src={Event} alt="클리어" />
        </S.ClearButton>
      </S.StyledGameSection>
      {PolaroidModalComponent}
    </>
  );
}
export default withUser(GameSection);

GameSection.propTypes = {

};
