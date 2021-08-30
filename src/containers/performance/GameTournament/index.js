import React, { useEffect, useMemo, useState } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import CloudTemplar from '@I/performance/cloud-templar.png';
import CloudTemplarSmall from '@I/performance/cloud-templar-small.png';
import Guide from '@C/performance/common/Guide';
import Bubble from '@C/introduction/staff-section/Bubble';
import MascotForMission from '@C/performance/common/MascotForMission';
import Image from '@/foundations/images/Image';
import { linkCollectionRef } from '@U/initializer/firebase';
import { toast } from 'react-toastify';
import * as S from '../common/styles';
import * as SS from './styles';

function GameTournament({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 1170, [theme.windowWidth]);

  const title = (
    <SS.Title>
      <p>관악게임토너먼트 결승전</p>
      <p>LOL 해설의 최강자</p>
      <p>
        <SS.PurpleText>클템</SS.PurpleText>
        과 함께 하는 관게토
        {' '}
        <SS.PurpleText>결승전</SS.PurpleText>
      </p>
    </SS.Title>
  );
  const image = (
    <SS.Image><Image src={isMobile ? CloudTemplarSmall : CloudTemplar} alt="" circle /></SS.Image>
  );
  const teams = (
    <SS.Teams>
      <div>
        <p>Team</p>
        <p>
          <span style={{ visibility: 'hidden' }}>정</span>
          정글차이
          <span style={{ visibility: 'hidden' }}>어</span>
        </p>
      </div>
      <div>vs</div>
      <div>
        <p>Team</p>
        <p>입이커서악어</p>
      </div>
    </SS.Teams>
  );

  const [url, setUrl] = useState(null);
  useEffect(() => {
    linkCollectionRef.doc('game-tournament').get()
      .then((doc) => {
        setUrl(doc.data().url);
      })
      .catch(() => (
        toast('인터넷이 불안정합니다. 다시 시도해주세요.')));
  }, []);

  const guide = <Guide youtubeUrl={url} date="5월 12일" times={['15:00~18:00']} />;

  return (
    <SS.StyledGameTournament>
      <HeaderContent>관악게임토너먼트</HeaderContent>
      <SS.Body>
        {isMobile && (
        <S.MobileBody>
          {title}
          {image}
          {teams}
          {guide}
        </S.MobileBody>
        )}
        {!isMobile && (
        <S.BodyWrapper>
          <S.Body>
            {image}
            <div>
              {title}
              {teams}
              {guide}
            </div>
          </S.Body>
        </S.BodyWrapper>
        )}
        {url && (
          <SS.VideoWrapper
            widths={[850, 700, 300]}
            heights={[850 / 1.77, 700 / 1.77, 300 / 1.77]}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${url.split('/').pop()}`}
              title="관악게임토너먼트 라이브"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </SS.VideoWrapper>
        )}
      </SS.Body>
      <Bubble theme={theme} />
      <MascotForMission
        performance="gameTournament"
      />
    </SS.StyledGameTournament>
  );
}
export default withTheme(GameTournament);

GameTournament.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
