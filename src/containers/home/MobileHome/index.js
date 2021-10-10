import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MobileIsland from '@I/home/island-mobile.jpg';
import MobileLoading from '@I/home/loading-mobile.png';
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
import { useHistory } from 'react-router';
import { getRandomElementFromArray } from '@C/activity/mini/guess-the-song/functions';
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
import Ball from '@I/tarot/ball.png';
import Glow from '@I/tarot/glow.png';
import FortuneTeller from '@I/tarot/fortune-teller.png';

import BackgroundTop from '@I/home/mobile/background-top.png';
import BackgroundMiddle from '@I/home/mobile/background-middle.png';
import BackgroundBottom from '@I/home/mobile/background-bottom.png';
import Performance from '@I/home/mobile/performance.png';
import Activity from '@I/home/mobile/activity.png';
import Goods from '@I/home/mobile/goods.png';
import GuestBook from '@I/home/mobile/guest-book.png';
import Introduction from '@I/home/mobile/introduction.png';

import * as S from './styles';

function MobileHome({ theme }) {
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();
  const goToPage = useCallback((route) => {
    history.push(route);
  }, [history]);

  const { modalComponent: missionComponent, setIsModalOpen: setIsMissionModalOpen } = useModal(MissionCard, { width: '95%' });
  const onLoadIsland = useCallback(() => {
    setIsLoading(false);
    [Skeleton, FestivalBackground, Poster21SpringCastle, Poster21Spring, Title,
      GuessTheSong, Riddle, TreasureHunt, BlackAndWhite, Event, TimeTableImage, Envelope, EnvelopeImage,
      Universe, Ball, Glow, FortuneTeller,
    ].forEach(preloadImage);
  }, []);

  const convert = useCallback((value) => (theme.windowWidth / 375) * value, [theme]);
  return (
    <>
      <S.StyledMobileHome>
        <Title />
        <S.Wrapper width={convert(375)} height={convert(1555)}>
          <Notice />
          <S.Background src={BackgroundBottom} top={convert(112)} left={0} width={convert(374)} />
          <S.Background src={BackgroundMiddle} top={convert(249)} left={convert(1)} width={convert(374)} />
          <S.Landmark src={Performance} alt="공연" top={convert(244)} left={convert(34)} width={convert(263)} onClick={() => goToPage('/performance')} />
          <S.Landmark src={Activity} alt="행사" top={convert(446)} left={convert(153)} width={convert(222)} onClick={() => goToPage('/activity')} />
          <S.Landmark src={Goods} alt="굿즈" top={convert(703)} left={convert(7)} width={convert(193)} onClick={() => goToPage('/goods')} />
          <S.Landmark src={Introduction} alt="소개" top={convert(1112)} left={convert(4)} width={convert(182)} onClick={() => goToPage('/introduction')} />
          <S.Landmark src={GuestBook} alt="방명록" top={convert(886)} left={convert(173)} width={convert(201)} onClick={() => goToPage('/guest-book')} />

          <S.Background src={BackgroundTop} top={convert(117)} left={convert(1)} width={convert(373)} />
          {missionComponent}
          {/* {isLoading && <S.Image src={MobileLoading} alt="" />} */}
        </S.Wrapper>
      </S.StyledMobileHome>
    </>
  );
}
export default MobileHome;

MobileHome.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
