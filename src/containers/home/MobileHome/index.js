import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Loading from '@I/home/mobile/background-bottom-light.png';
import { useHistory } from 'react-router';

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

import * as CS from '@C/home/common/styles';
import * as S from './styles';

const getRandom = (a, b) => Math.random() * (b - a) + a;

function MobileHome({ theme }) {
  const [isLoading, setIsLoading] = useState(true);
  const [gateOn, setGateOn] = useState(false);
  const [lightIsOn, setLightIsOn] = useState(false);
  const [rioWaked, setRioWaked] = useState(false);

  const history = useHistory();
  const goToPage = useCallback((route) => {
    history.push(route);
  }, [history]);

  const { modalComponent: missionComponent, setIsModalOpen: setIsMissionModalOpen } = useModal(MissionCard, { width: '95%' });
  const onLoad = useCallback(() => {
    setIsLoading(false);
    [Skeleton, FestivalBackground, Poster21SpringCastle, Poster21Spring, Title,
      Riddle, TreasureHunt,
    ].forEach(preloadImage);
  }, []);

  const Stand = ({ lightOn, top, left }) => (
    <CS.StandContainer top={top} left={left} width={convert(18)}>
      <CS.StandImage src={StandImage} width={convert(18)} />
      <CS.LightImage lightOn={lightOn} delay={getRandom(-30, 0)} src={StandLight} top={-convert(11)} left={-convert(23)} width={convert(62)} />
    </CS.StandContainer>
  );

  const Rio = ({
    waked, top, left, width,
  }) => (
    <CS.Rio src={waked ? WakeRio : SleepRio} top={top} left={left} width={width} />
  );

  const LIGHT_LOC = [
    { x: 219, y: 273 },
    { x: 44, y: 501 },
    { x: 82, y: 611 },
    { x: 261, y: 641 },
    // { x: 298, y: 715 },
    { x: 270, y: 839 },
    { x: 53, y: 1043 },
    { x: 242, y: 1098 },
    { x: 188, y: 1222 },
    { x: 313, y: 1199 },
    { x: 310, y: 1308 },
    // { x: 143, y: 1339 },
  ];

  const speak = useCallback((text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko';
    utterance.rate = 1;
    utterance.pitch = 1.2;
    speechSynthesis.speak(utterance);
  });

  const convert = useCallback((value) => (theme.windowWidth / 375) * value, [theme]);

  return (
    <>
      <S.StyledMobileHome>
        <Title />
        <S.Wrapper width={convert(375)} height={convert(1555)}>
          <Notice />
          <CS.Background src={BackgroundBottom} top={convert(112)} left={0} width={convert(374)} onLoad={onLoad} />
          <CS.BackgroundMiddle src={BackgroundMiddle} top={convert(249)} left={convert(1)} width={convert(374)} />
          <CS.Landmark delay={0} src={Performance} alt="공연" top={convert(244)} left={convert(34)} width={convert(263)} onClick={() => goToPage('/performance')} />
          <CS.Landmark delay={2} src={Activity} alt="행사" top={convert(446)} left={convert(153)} width={convert(222)} onClick={() => goToPage('/activity')} />
          <CS.Landmark delay={4} src={Goods} alt="굿즈" top={convert(703)} left={convert(7)} width={convert(193)} onClick={() => goToPage('/goods')} />
          <CS.Landmark delay={8} src={Introduction} alt="소개" top={convert(1112)} left={convert(4)} width={convert(182)} onClick={() => goToPage('/introduction')} />
          <CS.Landmark delay={6} src={GuestBook} alt="방명록" top={convert(886)} left={convert(173)} width={convert(201)} onClick={() => goToPage('/guest-book')} />

          {LIGHT_LOC.map((pos, i) => <Stand lightOn={lightIsOn} top={convert(pos.y)} left={convert(pos.x)} key={i} />)}
          <Rio waked={rioWaked} top={convert(167)} left={convert(261)} width={convert(85)} />
          <Rio waked={rioWaked} top={convert(1140)} left={convert(273)} width={convert(45)} />
          <CS.Bus index={0} src={BusOne} alt="버스" top={convert(323)} left={convert(238)} width={convert(69)} onClick={() => speak('이번 정류소는 제2 공학관 입니다.')} />
          <CS.Bus index={1} src={BusTwo} alt="버스" top={convert(653)} left={convert(154)} width={convert(67)} />
          <CS.Bus index={2} src={BusThree} alt="버스" top={convert(995)} left={convert(84)} width={convert(67)} />

          <CS.Image src={gateOn ? MainGateOn : MainGateOff} alt="정문" top={convert(1344)} left={convert(35)} width={convert(215)} />

          <CS.BackgroundFront src={BackgroundTop} top={convert(117)} left={convert(1)} width={convert(373)} />
          <CS.Text top={convert(1514)}>VERITAS LUX MEA</CS.Text>
          {missionComponent}
          {isLoading && <CS.Background src={Loading} top={convert(112)} left={0} width={convert(374)} alt="" />}
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
