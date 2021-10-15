import React, { useEffect, useState } from 'react';
import Bell from '@I/icon/bell.svg';
import useModal from '@U/hooks/useModal';
import { useHistory } from 'react-router';
import Skeleton from '@I/skeleton/skeleton.png';
import * as S from './styles';

function Notice() {
  const { modalComponent, setIsModalOpen } = useModal(TimeTable, { width: '80%' });

  const [currentDisplay, setCurrentDisplay] = useState(0);

  const today = new Date();
  const date = today.getDate();
  const hours = today.getHours();
  const minuite = today.getMinutes();
  const history = useHistory();

  const INDICATORS = ['방명록', '공연', '공연', '공연', '공연', '게임', '토크쇼', '오목'];
  const LINKS = ['/guest-book',
    '/performance/phone-cert', '/performance/hit-the-stage',
    '/performance/sing-stealer', '/performance/game-tournament',
    '/activity/group', '/activity/radio', '/activity/mini/omok'];

  const DESCRIPTIONS = ['dummy guest book',
    `${26 - date}일 후 폰서트 LIVE 밴드 무대`,
    `${26 - date}일 후 힛더스테이지 댄스 무대`,
    `${26 - date}일 후 매력적인 목소리가 가득 찬 씽스틸러`,
    `${26 - date}일 후 관악게임토너먼트`,
    `단체게임 신청 ${26 - date}일 남음`,
    '오목 오후 5시까지 진행',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDisplay(dp => dp + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <S.NoticeWrapper>
        <S.Notice onClick={() => history.push(LINKS[currentDisplay])}>
          <S.Indicator>{INDICATORS[currentDisplay]}</S.Indicator>
          <p>{DESCRIPTIONS[currentDisplay]}</p>
        </S.Notice>
      </S.NoticeWrapper>
      {modalComponent}
    </>
  );
}
export default Notice;

Notice.propTypes = {

};

function TimeTable() {
  return (
    <S.TimeTable src={Skeleton} alt="타임테이블" />
  );
}
