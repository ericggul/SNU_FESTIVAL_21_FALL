import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Island from '@I/home/island.png';
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
import Background from '@F/layout/Background';
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

  return (
    <>
      <S.StyledHome height={theme.windowHeight}>
        <Title />
        <S.IslandWrapper width={theme.windowWidth} height={theme.windowWidth * 0.527}>
          <S.Island src={Island} width={theme.windowWidth} height={theme.windowWidth * 0.527} alt="" onLoad={onLoadIsland} />
          <Notice />
          <S.Landmark src={Competition} alt="공모전" top={11} right={29} width={150 * ratio} onClick={() => goToPage('/activity/competition')} />
          <S.Landmark src={GuestBook} alt="방명록" top={24} right={13} width={188 * ratio} onClick={() => goToPage('/guest-book')} />
          <S.Landmark src={Introduction} alt="소개" top={32} right={28} width={168 * ratio} onClick={() => goToPage('/introduction')} />
          <S.Landmark src={GameTournament} alt="관악게임토너먼트" top={44} right={10} width={230 * ratio} onClick={() => goToPage('/performance/game-tournament')} />
          <S.Landmark src={Mini} alt="미니게임" top={52} right={24} width={381 * ratio} onClick={() => goToPage('/activity/mini')} />
          <S.Landmark src={Radio} alt="보이는라디오" top={37} left={12.5} width={262 * ratio} onClick={() => goToPage('/activity/radio')} />
          <S.Landmark src={Goods} alt="굿즈" top={12.5} left={24} width={234 * ratio} onClick={() => goToPage('/goods')} />
          <S.Landmark src={TarotGlow} alt="타로" top={46.5} left={1.3} width={260 * ratio} glow />
          <S.Landmark src={Tarot} alt="타로" top={54} left={4} width={174 * ratio} onClick={() => goToPage('/tarot')} />
          <S.Landmark src={Mission} alt="미션" top={25} left={45} width={225 * ratio} vibrate onClick={() => setIsMissionModalOpen(true)} />
          {missionComponent}
          <S.Landmark
            src={Performance}
            alt="공연"
            top={45}
            left={26}
            width={258 * ratio}
            onClick={() => goToPage(getRandomElementFromArray(['/performance/phone-cert', '/performance/sing-stealer', '/performance/hit-the-stage']))}
          />
          {isLoading && <S.Island width={1700 * ratio} height={1700 * ratio * 0.527} src={Loading} alt="" />}
        </S.IslandWrapper>
      </S.StyledHome>
      <Background />
    </>
  );
}
export default Home;

Home.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
