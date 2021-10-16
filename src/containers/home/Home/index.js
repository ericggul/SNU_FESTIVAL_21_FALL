import React, {
  useCallback, useMemo, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

import Title from '@C/home/Title';
import Notice from '@C/home/Notice';
import useModal from '@U/hooks/useModal';
import MissionCard from '@C/home/MissionCard';
import Rio from '@C/home/common/Rio';

import { preloadImage } from '@U/functions/preload';

import LightRio from '@I/home/LightRio.png';
import PhoneCertIcon from '@I/performance/icon/phone-cert-icon.png';
import HitTheStageIcon from '@I/performance/icon/hit-the-stage-icon.png';
import GameTournamentIcon from '@I/performance/icon/game-tournament-icon.png';
import SingStealerIcon from '@I/performance/icon/sing-stealer-icon.png';
import CompetitionIcon from '@I/activity/home/competition.png';
import MiniIcon from '@I/activity/home/mini.png';
import GroupIcon from '@I/activity/home/group.png';
import RadioIcon from '@I/activity/home/radio.png';
import OmokIcon from '@I/activity/home/omok.png';
import RiddleIcon from '@I/activity/home/riddle.png';
import HandwritingIcon from '@I/activity/home/handwriting.png';
import PlaceIcon from '@I/activity/home/place.png';

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

import CustomPath from '@F/animation/CustomPath';

import withUser from '@U/hoc/withUser';
import useMission from '@U/hooks/useMission';
import { useSelector } from 'react-redux';
import { sumOfArray } from '@U/functions/array';
import * as CS from '@C/home/common/styles';
import * as S from './styles';

const getRandom = (a, b) => Math.random() * (b - a) + a;

function Home({
  theme, fromLightEvent, user, isAuthorized,
}) {
  const mission = useMission();
  const lightArray = mission.light;
  const isLightPlaying = useMemo(() => isAuthorized && lightArray !== null, [lightArray]);
  const foundedLightNumbers = useMemo(() => (lightArray ? sumOfArray(lightArray) : 0), [lightArray]);

  const [brightenLights, setBrightenLights] = useState(foundedLightNumbers);
  const [animateSpecificLight, setAnimateSpecificLight] = useState(-1);
  const [rioWaked, setRioWaked] = useState(isLightPlaying);

  const [missionCleared, setMissionCleared] = useState(false);
  const [gateOn, setGateOn] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setBrightenLights(foundedLightNumbers);
    setRioWaked(isLightPlaying);
    if (foundedLightNumbers === 10) {
      setMissionCleared(true);
    }
  }, [lightArray, isLightPlaying, foundedLightNumbers]);

  const history = useHistory();
  const goToPage = useCallback((route) => {
    history.push(route);
  }, [history]);

  const onLoad = useCallback(() => {
    setIsLoading(false);
    [LightRio, PhoneCertIcon, HitTheStageIcon, SingStealerIcon, GameTournamentIcon,
      CompetitionIcon, MiniIcon, GroupIcon, RadioIcon,
      OmokIcon, RiddleIcon, HandwritingIcon, PlaceIcon,
    ].forEach(preloadImage);
  }, []);

  const Stand = ({
    lightOn, top, left, fromEvent,
  }) => (
    <CS.StandContainer top={top} left={left} width={convert(53)}>
      <CS.StandImage src={StandImage} width={convert(53)} />
      <CS.LightImage lightOn={lightOn} fromEvent={fromEvent} delay={getRandom(-30, 0)} src={StandLight} top={-convert(35)} left={-convert(72)} width={convert(194)} />
    </CS.StandContainer>
  );

  // Light Mission
  const { modalComponent: missionComponent, setIsModalOpen: setIsMissionModalOpen } = useModal(MissionCard, {
    isAuthorized,
  });
  const clickRio = useCallback(() => {
    setRioWaked(true);
    setTimeout(() => {
      setIsMissionModalOpen(true);
    }, 400);
  }, [rioWaked]);

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

  // Scroll when from Light Event
  const scrollTo = useCallback((numbers) => {
    window.scrollTo({ top: LIGHT_LOC[numbers].y, left: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (fromLightEvent) {
      setAnimateSpecificLight(brightenLights - 1);
      setTimeout(() => {
        scrollTo(brightenLights - 1);
      }, 1000);
    }
  }, [fromLightEvent, brightenLights]);

  // Event Guider
  const busClick = useCallback(() => {
    if (!isLightPlaying) {
      toast('졸고있는 리오를 깨워보세요!');
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [isLightPlaying]);

  const convert = useCallback((value) => (theme.windowWidth / 1920) * value, [theme]);

  return (
    <>

      <S.StyledHome>
        <Title />
        <Notice />
        <S.Wrapper width={convert(1920)} height={convert(2506)}>

          <CS.Background src={BackgroundBottom} top={convert(0.001)} left={convert(0)} width={convert(1920)} onLoad={onLoad} />

          {missionCleared && <CustomPath isMobile={false} busWidth={convert(180)} />}
          {!missionCleared && <CS.Bus index={0} src={BusOne} onClick={busClick} alt="버스" top={convert(442)} left={convert(1364)} width={convert(160)} />}
          {!missionCleared && <CS.Bus index={1} src={BusTwo} onClick={busClick} alt="버스" top={convert(856)} left={convert(400)} width={convert(106)} />}
          {!missionCleared && <CS.Bus index={2} src={BusThree} onClick={busClick} alt="버스" top={convert(1290)} left={convert(974)} width={convert(166)} />}
          {!missionCleared && <CS.Bus index={3} src={BusFour} onClick={busClick} alt="버스" top={convert(1940)} left={convert(1066)} width={convert(172)} />}

          <CS.BackgroundMiddle src={BackgroundMiddle} top={convert(200)} left={convert(0)} width={convert(1920)} />

          <CS.Landmark delay={0} src={Performance} alt="공연" top={convert(165)} left={convert(229)} width={convert(978)} onClick={() => goToPage('/performance')} />
          <CS.Landmark delay={2} src={Activity} alt="행사" top={convert(695)} left={convert(568)} width={convert(734)} onClick={() => goToPage('/activity')} />
          <CS.Landmark delay={4} src={Goods} alt="굿즈" top={convert(1083)} left={convert(73)} width={convert(556)} onClick={() => goToPage('/goods')} />
          <CS.Landmark delay={8} src={Introduction} alt="소개" top={convert(1461)} left={convert(919)} width={convert(558)} onClick={() => goToPage('/introduction')} />
          <CS.Landmark delay={6} src={GuestBook} alt="방명록" top={convert(924)} left={convert(1272)} width={convert(546)} onClick={() => goToPage('/guest-book')} />

          {LIGHT_LOC.map((pos, i) => (
            <Stand
              lightOn={i < brightenLights}
              top={convert(pos.y)}
              left={convert(pos.x)}
              fromEvent={animateSpecificLight === i}
              key={i}
            />
          ))}
          <Rio waked={rioWaked} top={convert(67)} left={convert(161)} width={convert(280)} clickRio={clickRio} />
          <Rio waked={rioWaked} top={convert(1770)} left={convert(60)} width={convert(100)} clickRio={clickRio} withText={false} />

          <CS.Image src={gateOn ? MainGateOn : MainGateOff} alt="정문" top={convert(1775)} left={convert(351)} width={convert(649)} />

          <CS.BackgroundFront src={BackgroundTop} top={convert(0.001)} left={convert(0)} width={convert(1920)} />
          {missionComponent}
          {isLoading && <CS.Background src={BackgroundBottom} top={convert(0.001)} left={convert(0)} width={convert(1920)} alt="" />}
        </S.Wrapper>
      </S.StyledHome>
    </>
  );
}
export default withUser(Home);

Home.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
