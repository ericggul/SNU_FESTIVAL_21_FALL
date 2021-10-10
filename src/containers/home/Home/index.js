import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Island from '@I/home/island.png';
import Competition from '@I/home/competition.png';
// import GuestBook from '@I/home/guest-book.png';
// import Introduction from '@I/home/introduction.png';
import GameTournament from '@I/home/game-tournament.png';
import Mini from '@I/home/mini.png';
// import Performance from '@I/home/performance.png';
import Radio from '@I/home/radio.png';
// import Goods from '@I/home/goods.png';
import Tarot from '@I/home/tarot.png';
import TarotGlow from '@I/home/tarot-glow.png';
import Mission from '@I/home/mission.png';
// import Background from '@F/layout/Background';
import { useHistory } from 'react-router';
import { getRandomElementFromArray } from '@C/activity/mini/guess-the-song/functions';
import Loading from '@I/home/loading.png';
import Title from '@C/home/Title';
import Notice from '@C/home/Notice';
import useModal from '@U/hooks/useModal';
import MissionCard from '@C/home/MissionCard';
import Skeleton from '@I/skeleton/skeleton.png';
import FestivalBackground from '@I/introduction/festival-background.jpg';
import Poster21SpringCastle from '@I/poster/21springCastle.png';
import Poster21Spring from '@I/poster/21spring.png';
import GuessTheSong from '@I/activity/home/guess-the-song.png';
import Riddle from '@I/activity/home/riddle.png';
import TreasureHunt from '@I/activity/home/treasure-hunt.png';
import BlackAndWhite from '@I/activity/home/black-and-white.png';
import Event from '@I/activity/home/event.png';
import TimeTableImage from '@I/home/time-table.png';
import Envelope from '@I/icon/stamp/envelope.gif';
import EnvelopeImage from '@I/icon/stamp/envelope.png';
import { preloadImage } from '@U/functions/preload';
import Universe from '@I/tarot/universe.jpg';
import FortuneTeller from '@I/tarot/fortune-teller.png';
import Ball from '@I/tarot/ball.png';
import Glow from '@I/tarot/glow.png';

import BackgroundTop from '@I/home/desktop/background-top.png';
import BackgroundMiddle from '@I/home/desktop/background-middle.png';
import BackgroundBottom from '@I/home/desktop/background-bottom.png';
import Performance from '@I/home/desktop/performance.png';
import Activity from '@I/home/desktop/activity.png';
import Goods from '@I/home/desktop/goods.png';
import GuestBook from '@I/home/desktop/guest-book.png';
import Introduction from '@I/home/desktop/introduction.png';

import * as S from './styles';

function Home({ theme }) {
  const [isLoading, setIsLoading] = useState(true);

  const ratio = useMemo(() => {
    if (theme.windowWidth >= 1700) return 1;
    if (theme.windowWidth >= 1600) return 1600 / 1700;
    if (theme.windowWidth >= 1440) return 1440 / 1700;
    if (theme.windowWidth >= 1024) return 1024 / 1700;
    return 768 / 1700;
  }, [theme.windowWidth]);

  const history = useHistory();
  const goToPage = useCallback((route) => {
    history.push(route);
  }, [history]);

  const { modalComponent: missionComponent, setIsModalOpen: setIsMissionModalOpen } = useModal(MissionCard);
  const onLoadIsland = useCallback(() => {
    setIsLoading(false);
    [Skeleton, FestivalBackground, Poster21SpringCastle, Poster21Spring, Title,
      GuessTheSong, Riddle, TreasureHunt, BlackAndWhite, Event, TimeTableImage, Envelope, EnvelopeImage,
      Universe, Ball, Glow, FortuneTeller,
    ].forEach(preloadImage);
  }, []);

  const convert = useCallback((value) => (theme.windowWidth / 1920) * value, []);

  return (
    <>
      <S.StyledHome height={theme.windowHeight}>
        <Title />
        <S.Wrapper width={convert(1920)} height={convert(2376)}>
          <Notice />
          <S.Background src={BackgroundBottom} top={convert(0)} left={0} width={convert(1920)} onLoad={onLoadIsland} />
          <S.Background src={BackgroundMiddle} top={convert(200)} left={convert(0)} width={convert(1920)} />
          <S.Landmark src={Performance} alt="공연" top={convert(165)} left={convert(229)} width={convert(978)} onClick={() => goToPage('/performance')} />
          <S.Landmark src={Activity} alt="행사" top={convert(695)} left={convert(568)} width={convert(734)} onClick={() => goToPage('/activity')} />
          <S.Landmark src={Goods} alt="굿즈" top={convert(1083)} left={convert(73)} width={convert(556)} onClick={() => goToPage('/goods')} />
          <S.Landmark src={Introduction} alt="소개" top={convert(1461)} left={convert(919)} width={convert(558)} onClick={() => goToPage('/introduction')} />
          <S.Landmark src={GuestBook} alt="방명록" top={convert(924)} left={convert(1272)} width={convert(546)} onClick={() => goToPage('/guest-book')} />

          <S.Background src={BackgroundTop} top={convert(0)} left={convert(0)} width={convert(1920)} />
          {missionComponent}
          {/* {isLoading && <S.Image src={MobileLoading} alt="" />} */}
        </S.Wrapper>
      </S.StyledHome>
    </>
  );
}
export default Home;

Home.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
