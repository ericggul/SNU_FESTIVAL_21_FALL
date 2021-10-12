import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { confettiFire, confettiSpread } from '@C/performance/common/confettiFire';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Lumination2 from '@F/animation/Lumination/Lumination2';
import GameTournamentIcon from '@I/performance/icon/game-tournament-icon.png';
import GameTournamentImage from '@I/performance/game-tournament.png';
import { GameTournamentData } from '@C/performance/Data';
import { HeaderContent } from '@F/layout/Header';
import Title from '@C/performance/common/Title';
import Bubble from '@C/performance/common/Bubble';
import Date from '@C/performance/common/Date';
import Youtube from '@C/performance/common/Youtube';
import Guide from '@C/performance/common/Guide';
import Starring from '@C/performance/common/Starring';
import Fade from 'react-reveal/Fade';

import CloudTemplar from '@I/performance/cloud-templar.png';
import CloudTemplarSmall from '@I/performance/cloud-templar-small.png';

import MascotForMission from '@C/performance/common/MascotForMission';
import { linkCollectionRef } from '@U/initializer/firebase';
import { toast } from 'react-toastify';
import Image from '@/foundations/images/Image';
import * as S from '../common/styles';
import * as SS from './styles';

function GameTournament({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 1170, [theme.windowWidth]);

  // const teams = (
  //   <SS.Teams>
  //     <div>
  //       <p>Team</p>
  //       <p>
  //         <span style={{ visibility: 'hidden' }}>정</span>
  //         정글차이
  //         <span style={{ visibility: 'hidden' }}>어</span>
  //       </p>
  //     </div>
  //     <div>vs</div>
  //     <div>
  //       <p>Team</p>
  //       <p>입이커서악어</p>
  //     </div>
  //   </SS.Teams>
  // );

  const [url, setUrl] = useState('https://www.youtube.com/embed/phnjI5IfelQ');
  const [speak, setSpeak] = useState(false);
  const [confettiEnabled, setConfettiEnabled] = useState(false);

  const [confettiPos, setConfettiPos] = useState({ x: 0.5, y: 0.5 });

  const clickforConfetti = useCallback((e) => {
    setConfettiPos({ x: e.clientX / theme.windowWidth, y: e.clientY / theme.windowHeight });
    setConfettiEnabled(true);
  }, [theme]);

  useEffect(() => {
    window.addEventListener('click', clickforConfetti);
    return () => window.removeEventListener('click', clickforConfetti);
  }, []);

  useEffect(() => {
    if (confettiEnabled) {
      confettiSpread(confettiPos.x, confettiPos.y);
      setConfettiEnabled(false);
    }
  }, [confettiEnabled]);

  useEffect(() => {
    linkCollectionRef.doc('game-tournament').get()
      .then((doc) => {
        setUrl(doc.data().url);
      })
      .catch(() => (
        toast('인터넷이 불안정합니다. 다시 시도해주세요.')));
  }, []);

  const icon = (
    <S.Icon
      onClick={() => setSpeak(!speak)}
    >
      <Image src={GameTournamentIcon} alt="" objectFit="scale-down" />
    </S.Icon>
  );
  const bubble = <Bubble decoration="카트라이더 슝슝~" title="관악게임토너먼트!" speak={speak} />;
  const title = <Title title="관악게임토너먼트" handleClick={() => setConfettiEnabled(true)} />;
  const date = <Date date={29} />;
  const youTube = <Youtube src="https://www.youtube.com/embed/phnjI5IfelQ" />;
  const guide = <Guide date="5월 13일" times={['1부 13:30~15:30', '2부 17:30~20:10']} />;
  const starring = <Starring data={GameTournamentData} />;
  const image = (
    <S.Image>
      {new Array(15).fill(0).map((e, i) => <S.AbsoluteImage key={i} src={GameTournamentImage} alt="hit-the-stage" hue={-30 + i * 5} />)}
    </S.Image>
  );

  return (
    <S.Wrapper>
      <HeaderContent>관악게임토너먼트</HeaderContent>
      <Lumination2 width="100%" height="calc(100% + 1.5rem)" />
      {isMobile && (
        <S.MobileBody
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 1,
          }}
        >
          <S.IconBubble>
            {icon}
            {bubble}
          </S.IconBubble>
          {title}
          {date}
          {youTube}
          {guide}
          {starring}
          {image}
        </S.MobileBody>
      )}
      {!isMobile && (
        <S.MobileBody
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 1,
          }}
        >
          <S.DesktopWrapper>
            <S.IconBubble>
              {icon}
              {bubble}
            </S.IconBubble>
            <S.TitleDate>
              {title}
              {date}
            </S.TitleDate>

          </S.DesktopWrapper>
            {youTube}
            {guide}
            {starring}
            {image}

        </S.MobileBody>
      )}
      {/* <Bubble theme={theme} /> */}
      <MascotForMission
        performance="gameTournament"
      />
    </S.Wrapper>
  );
}
export default withTheme(GameTournament);

GameTournament.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
