import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MobileIsland from '@I/home/island-mobile.jpg';
import MobileLoading from '@I/home/loading-mobile.png';
import Competition from '@I/home/competition.png';
import GuestBook from '@I/home/guest-book.png';
import Introduction from '@I/home/introduction.png';
import GameTournament from '@I/home/game-tournament.png';
import Mini from '@I/home/mini.png';
import Performance from '@I/home/performance.png';
import Radio from '@I/home/radio.png';
import Goods from '@I/home/goods.png';
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
import * as S from './styles';

function MobileHome({ theme }) {
  const [isLoading, setIsLoading] = useState(true);

  const ratio = useMemo(() => theme.windowWidth / 375, [theme.windowWidth]);
  const mobileRatio = 0.68;

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

  return (
    <>
      <S.StyledMobileHome>
        <Title />
        <S.IslandWrapper width={theme.windowWidth} height={theme.windowWidth * 2.1653}>
          <S.Island src={MobileIsland} alt="" onLoad={onLoadIsland} />
          <Notice />
          <S.Landmark src={Competition} alt="공모전" top={35} left={0} width={150 * mobileRatio * ratio} onClick={() => goToPage('/activity/competition')} />
          <S.Landmark src={GuestBook} alt="방명록" top={87} left={20} width={188 * mobileRatio * ratio} onClick={() => goToPage('/guest-book')} />
          <S.Landmark src={Introduction} alt="소개" top={42} right={1} width={148 * mobileRatio * ratio} onClick={() => goToPage('/introduction')} />
          <S.Landmark src={GameTournament} alt="관악게임토너먼트" top={72} right={1} width={230 * mobileRatio * ratio} onClick={() => goToPage('/performance/game-tournament')} />
          <S.Landmark src={Mini} alt="미니게임" top={50} left={0} width={361 * mobileRatio * ratio} onClick={() => goToPage('/activity/mini')} />
          <S.Landmark src={Radio} alt="보이는라디오" top={72} left={0.1} width={262 * mobileRatio * ratio} onClick={() => goToPage('/activity/radio')} />
          <S.Landmark src={Goods} alt="굿즈" top={16} left={7} width={234 * mobileRatio * ratio} onClick={() => goToPage('/goods')} />
          <S.Landmark src={TarotGlow} alt="타로" top={46.3} right={-4.5} width={260 * mobileRatio * ratio} glow />
          <S.Landmark src={Tarot} alt="타로" top={52} right={4} width={164 * mobileRatio * ratio} onClick={() => goToPage('/tarot')} />
          <S.Landmark src={Mission} alt="미션" top={35} left={35} width={195 * mobileRatio * ratio} vibrate onClick={() => setIsMissionModalOpen(true)} />
          {missionComponent}
          <S.Landmark
            src={Performance}
            alt="공연"
            top={15}
            right={0.1}
            width={230 * mobileRatio * ratio}
            onClick={() => goToPage(getRandomElementFromArray(['/performance/phone-cert', '/performance/sing-stealer', '/performance/hit-the-stage']))}
          />
          {isLoading && <S.Island src={MobileLoading} alt="" />}
        </S.IslandWrapper>
      </S.StyledMobileHome>
      <S.Background />
    </>
  );
}
export default MobileHome;

MobileHome.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
