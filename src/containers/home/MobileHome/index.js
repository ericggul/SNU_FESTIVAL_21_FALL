import React, {
  useCallback, useMemo, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import Loading from '@I/home/mobile/background-bottom-light.png';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

import Title from '@C/home/Title';
import Notice from '@C/home/Notice';
import useModal from '@U/hooks/useModal';
import MissionCard from '@C/home/MissionCard';
import MissionCompleteCard from '@C/home/MissionCompleteCard';
import Rio from '@C/home/common/Rio';

import LogInRio from '@I/icon/log-in-rio.png';
import MenuMobile from '@I/layout/menu-mobile.png';
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
import ConstellationOne from '@I/activity/home/constellation1.png';
import ConstellationTwo from '@I/activity/home/constellation2.png';
import ConstellationThree from '@I/activity/home/constellation3.png';
import ConstellationFour from '@I/activity/home/constellation4.png';
import ConstellationFive from '@I/activity/home/constellation5.png';

import { preloadImage } from '@U/functions/preload';

import BackgroundTop from '@I/home/mobile/background-top.png';
import BackgroundMiddle from '@I/home/mobile/background-middle.png';
import BackgroundBottom from '@I/home/mobile/background-bottom.png';
import Performance from '@I/home/mobile/performance.png';
import Activity from '@I/home/mobile/activity.png';
import Goods from '@I/home/mobile/goods.png';
import GuestBook from '@I/home/mobile/guest-book.png';
import Introduction from '@I/home/mobile/introduction.png';

import BusOne from '@I/home/mobile/bus1.png';
import BusTwo from '@I/home/mobile/bus2.png';
import BusThree from '@I/home/mobile/bus3.png';
import MainGateOn from '@I/home/mobile/main-gate-on.png';
import MainGateOff from '@I/home/mobile/main-gate-off.png';
import SleepRio from '@I/home/mobile/sleep-rio.png';
import SleepRioTwo from '@I/home/mobile/sleep-rio2.png';
import WakeRio from '@I/home/mobile/wake-rio.png';
import StandImage from '@I/home/mobile/stand.png';
import StandLight from '@I/home/mobile/stand-light.png';

import CustomPath from '@F/animation/CustomPath';

import withUser from '@U/hoc/withUser';
import useMission from '@U/hooks/useMission';
import { useSelector } from 'react-redux';
import { sumOfArray } from '@U/functions/array';
import * as CS from '@C/home/common/styles';
import * as S from './styles';

const getRandom = (a, b) => Math.random() * (b - a) + a;

function MobileHome({
  theme, fromLightEvent, user, isAuthorized,
}) {
  const convert = useCallback((value) => (theme.windowWidth / 375) * value, [theme]);

  const [isLoading, setIsLoading] = useState(true);

  // Light Event Related
  const mission = useMission();
  const lightArray = mission.light;
  const isLightPlaying = useMemo(() => isAuthorized && lightArray !== null, [lightArray]);
  const foundedLightNumbers = useMemo(() => (lightArray ? sumOfArray(lightArray) : 0), [lightArray]);

  const [brightenLights, setBrightenLights] = useState(foundedLightNumbers);
  const [animateSpecificLight, setAnimateSpecificLight] = useState(-1);
  const [rioWaked, setRioWaked] = useState(isLightPlaying);

  const [missionCleared, setMissionCleared] = useState(false);
  const [busMove, setBusMove] = useState(false);
  const [gateOn, setGateOn] = useState(false);

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
    [MenuMobile, LightRio, LogInRio, PhoneCertIcon, HitTheStageIcon, SingStealerIcon, GameTournamentIcon,
      CompetitionIcon, MiniIcon, GroupIcon, RadioIcon,
      OmokIcon, RiddleIcon, HandwritingIcon, PlaceIcon, MainGateOn, MainGateOff,
      ConstellationOne, ConstellationTwo, ConstellationThree, ConstellationFour, ConstellationFive,
    ].forEach(preloadImage);
  }, []);

  const Stand = ({
    lightOn, top, left, fromEvent,
  }) => (
    <CS.StandContainer top={top} left={left} width={convert(18)}>
      <CS.StandImage src={StandImage} width={convert(18)} />
      <CS.LightImage lightOn={lightOn} fromEvent={fromEvent} delay={getRandom(-30, 0)} src={StandLight} top={-convert(11)} left={-convert(23)} width={convert(62)} />
    </CS.StandContainer>
  );

  // Light Mission
  const { modalComponent: missionComponent, setIsModalOpen: setIsMissionModalOpen } = useModal(MissionCard);
  const { modalComponent: missionCompleteComponent, setIsModalOpen: setIsMissionCompleteModalOpen } = useModal(MissionCompleteCard);

  const clickRio = useCallback(() => {
    setRioWaked(true);
    setTimeout(() => {
      if (!missionCleared) {
        setIsMissionModalOpen(true);
      } else {
        setIsMissionCompleteModalOpen(true);
      }
    }, 400);
  }, [rioWaked]);

  const LIGHT_LOC = [
    { x: 219, y: 273 },
    { x: 44, y: 501 },
    { x: 82, y: 611 },
    { x: 261, y: 641 },
    { x: 270, y: 839 },
    { x: 53, y: 1043 },
    { x: 242, y: 1098 },
    { x: 188, y: 1222 },
    { x: 313, y: 1199 },
    { x: 310, y: 1308 },
  ];

  // Scroll when from Light Event
  const scrollTo = useCallback((numbers) => {
    window.scrollTo({ top: LIGHT_LOC[numbers]?.y, left: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (fromLightEvent) {
      setTimeout(() => {
        scrollTo(brightenLights - 1);
        setAnimateSpecificLight(brightenLights - 1);
      }, 1000);
    }
  }, [fromLightEvent, brightenLights]);

  // Speak
  const speak = useCallback((text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko';
    utterance.rate = 1;
    utterance.pitch = 1.2;
    speechSynthesis.speak(utterance);
  });

  const mainGateClick = useCallback(() => {
    if (missionCleared) {
      setBusMove(true);
      setTimeout(() => {
        window.scrollTo({ top: convert(1344), left: 0, behavior: 'smooth' });
      }, 2000);
      setTimeout(() => {
        setGateOn(true);
      }, 4700);
      setTimeout(() => {
        setIsMissionCompleteModalOpen(true);
      }, 6300);
    }
    if (!isLightPlaying) {
      toast('졸고있는 리오를 깨워보세요!');
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [missionCleared, isLightPlaying]);

  return (
    <>
      <S.StyledMobileHome>
        <Title />
        <S.Wrapper width={convert(375)} height={convert(1555)}>
          {!isLoading && <Notice />}
          <CS.Background src={BackgroundBottom} top={convert(112)} left={0} width={convert(374)} onLoad={onLoad} />

          {busMove && <CustomPath isMobile busWidth={convert(67)} />}
          {!busMove && <CS.Bus index={0} src={BusOne} onClick={mainGateClick} alt="버스" top={convert(323)} left={convert(238)} width={convert(69)} />}
          {!busMove && <CS.Bus index={1} src={BusTwo} onClick={mainGateClick} alt="버스" top={convert(653)} left={convert(154)} width={convert(67)} />}
          {!busMove && <CS.Bus index={2} src={BusThree} onClick={mainGateClick} alt="버스" top={convert(995)} left={convert(84)} width={convert(67)} />}

          <CS.BackgroundMiddle src={BackgroundMiddle} top={convert(249)} left={convert(1)} width={convert(374)} />
          <CS.Landmark delay={0} src={Performance} alt="공연" top={convert(244)} left={convert(34)} width={convert(263)} onClick={() => goToPage('/performance')} />
          <CS.Landmark delay={2} src={Activity} alt="행사" top={convert(446)} left={convert(153)} width={convert(222)} onClick={() => goToPage('/activity')} />
          <CS.Landmark delay={4} src={Goods} alt="굿즈" top={convert(703)} left={convert(7)} width={convert(193)} onClick={() => goToPage('/goods')} />
          <CS.Landmark delay={8} src={Introduction} alt="소개" top={convert(1112)} left={convert(4)} width={convert(182)} onClick={() => goToPage('/introduction')} />
          <CS.Landmark delay={6} src={GuestBook} alt="방명록" top={convert(886)} left={convert(173)} width={convert(201)} onClick={() => goToPage('/guest-book')} />

          {LIGHT_LOC.map((pos, i) => (
            <Stand
              lightOn={i < brightenLights}
              top={convert(pos.y)}
              left={convert(pos.x)}
              fromEvent={animateSpecificLight === i && i !== 9}
              key={i}
            />
          ))}
          <Rio waked={rioWaked} top={convert(167)} left={convert(261)} width={convert(85)} clickRio={clickRio} />
          <Rio waked={rioWaked} top={convert(1140)} left={convert(273)} width={convert(45)} clickRio={clickRio} withText={false} />

          <CS.Door src={gateOn ? MainGateOn : MainGateOff} alt="정문" onClick={mainGateClick} top={convert(1344)} left={convert(35)} width={convert(215)} />

          <CS.BackgroundFront src={BackgroundTop} top={convert(117)} left={convert(1)} width={convert(373)} />
          <CS.Text top={convert(1514)}>VERITAS LUX MEA</CS.Text>
          {missionComponent}
          {missionCompleteComponent}
          {isLoading && <CS.Background src={Loading} top={convert(112)} left={0} width={convert(374)} alt="" />}
        </S.Wrapper>
      </S.StyledMobileHome>
    </>
  );
}
export default withUser(MobileHome);

MobileHome.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
