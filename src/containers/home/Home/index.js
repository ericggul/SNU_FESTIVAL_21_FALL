import React, {
  useCallback, useMemo, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router';

import Loading from '@I/home/desktop/background-bottom-light.png';
import Title from '@C/home/Title';
import Notice from '@C/home/Notice';
import useModal from '@U/hooks/useModal';
import MissionCard from '@C/home/MissionCard';
import Skeleton from '@I/skeleton/skeleton.png';
import FestivalBackground from '@I/introduction/festival-background.jpg';
import Poster21SpringCastle from '@I/poster/21springCastle.png';
import Poster21Spring from '@I/poster/21spring.png';
import Riddle from '@I/activity/home/riddle.png';
import TreasureHunt from '@I/activity/home/treasure-hunt.png';

import Envelope from '@I/icon/stamp/envelope.gif';
import EnvelopeImage from '@I/icon/stamp/envelope.png';
import { preloadImage } from '@U/functions/preload';
import Universe from '@I/tarot/universe.jpg';
import FortuneTeller from '@I/tarot/fortune-teller.png';
import Ball from '@I/tarot/ball.png';
import Glow from '@I/tarot/glow.png';

// import BackgroundTop from '@I/home/desktop/background-top.png';
import BackgroundTop from '@I/home/desktop/background-top-light.png';
// import BackgroundMiddle from '@I/home/desktop/background-middle.png';
import BackgroundMiddle from '@I/home/desktop/background-middle-light.png';
// import BackgroundBottom from '@I/home/desktop/background-bottom.png';
import BackgroundBottom from '@I/home/desktop/background-bottom-light.png';
import Performance from '@I/home/desktop/performance.png';
import Activity from '@I/home/desktop/activity.png';
import Goods from '@I/home/desktop/goods.png';
import GuestBook from '@I/home/desktop/guest-book.png';
import Introduction from '@I/home/desktop/introduction.png';

import BusOne from '@I/home/desktop/bus1.png';
import BusTwo from '@I/home/desktop/bus2.png';
import BusThree from '@I/home/desktop/bus3.png';
import BusFour from '@I/home/desktop/bus4.png';
import MainGateOn from '@I/home/desktop/main-gate-on.png';
import MainGateOff from '@I/home/desktop/main-gate-off.png';
import SleepRio from '@I/home/mobile/sleep-rio.png';
import SleepRioTwo from '@I/home/mobile/sleep-rio2.png';
import WakeRio from '@I/home/mobile/wake-rio.png';
import StandImage from '@I/home/desktop/stand.png';
import StandLight from '@I/home/desktop/stand-light.png';

import * as CS from '@C/home/common/styles';
import * as S from './styles';

const getRandom = (a, b) => Math.random() * (b - a) + a;

function Home({ theme }) {
  const [isLoading, setIsLoading] = useState(true);
  const [gateOn, setGateOn] = useState(false);
  const [lightIsOn, setLightIsOn] = useState(false);
  const [rioWaked, setRioWaked] = useState(false);

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
  const onLoad = useCallback(() => {
    setIsLoading(false);
    [Skeleton, FestivalBackground, Poster21SpringCastle, Poster21Spring, Title,
      Riddle, TreasureHunt, Envelope, EnvelopeImage,
      Universe, Ball, Glow, FortuneTeller,
    ].forEach(preloadImage);
  }, []);

  const Stand = ({ lightOn, top, left }) => (
    <CS.StandContainer top={top} left={left} width={convert(53)}>
      <CS.StandImage src={StandImage} width={convert(53)} />
      <CS.LightImage lightOn={lightOn} delay={getRandom(-30, 0)} src={StandLight} top={-convert(35)} left={-convert(72)} width={convert(194)} />
    </CS.StandContainer>
  );

  const Rio = ({
    waked, top, left, width,
  }) => (
    <CS.Rio src={waked ? WakeRio : SleepRio} top={top} left={left} width={width} />
  );

  const LIGHT_LOC = [
    { x: 1451, y: 159 },
    { x: 1101, y: 247 },
    { x: 416, y: 553 },
    { x: 129, y: 807 },
    { x: 1027, y: 1009 },
    { x: 740, y: 1309 },
    { x: 1631, y: 1231 },
    { x: 1785, y: 1517 },
    { x: 1633, y: 1866 },
    { x: 1314, y: 2043 },
  ];

  const convert = useCallback((value) => (theme.windowWidth / 1920) * value, [theme]);

  return (
    <>

      <S.StyledHome height={theme.windowHeight}>
        <Title />
        <Notice />
        <S.Wrapper width={convert(1920)} height={convert(2506)}>

          <CS.Background src={BackgroundBottom} top={convert(0.001)} left={convert(0)} width={convert(1920)} onLoad={onLoad} />
          <CS.Background src={BackgroundMiddle} top={convert(200)} left={convert(0)} width={convert(1920)} />

          <CS.Landmark delay={0} src={Performance} alt="공연" top={convert(165)} left={convert(229)} width={convert(978)} onClick={() => goToPage('/performance')} />
          <CS.Landmark delay={2} src={Activity} alt="행사" top={convert(695)} left={convert(568)} width={convert(734)} onClick={() => goToPage('/activity')} />
          <CS.Landmark delay={4} src={Goods} alt="굿즈" top={convert(1083)} left={convert(73)} width={convert(556)} onClick={() => goToPage('/goods')} />
          <CS.Landmark delay={8} src={Introduction} alt="소개" top={convert(1461)} left={convert(919)} width={convert(558)} onClick={() => goToPage('/introduction')} />
          <CS.Landmark delay={6} src={GuestBook} alt="방명록" top={convert(924)} left={convert(1272)} width={convert(546)} onClick={() => goToPage('/guest-book')} />

          {LIGHT_LOC.map((pos, i) => <Stand lightOn={lightIsOn} top={convert(pos.y)} left={convert(pos.x)} key={i} />)}
          <Rio waked={rioWaked} top={convert(67)} left={convert(161)} width={convert(280)} />
          <Rio waked={rioWaked} top={convert(1770)} left={convert(60)} width={convert(100)} />
          <CS.Bus index={0} src={BusOne} alt="버스" top={convert(442)} left={convert(1364)} width={convert(160)} />
          <CS.Bus index={1} src={BusTwo} alt="버스" top={convert(856)} left={convert(400)} width={convert(106)} />
          <CS.Bus index={2} src={BusThree} alt="버스" top={convert(1290)} left={convert(974)} width={convert(166)} />
          <CS.Bus index={3} src={BusFour} alt="버스" top={convert(1940)} left={convert(1066)} width={convert(172)} />

          <CS.Image src={gateOn ? MainGateOn : MainGateOff} alt="정문" top={convert(1775)} left={convert(351)} width={convert(649)} />

          <CS.Background src={BackgroundTop} top={convert(0.001)} left={convert(0)} width={convert(1920)} />
          {missionComponent}
          {isLoading && <CS.Background src={BackgroundBottom} top={convert(0.001)} left={convert(0)} width={convert(1920)} alt="" />}
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
