import React, { useEffect, useState, useCallback } from 'react';
import { guestBookCollectionRef } from '@U/initializer/firebase';
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
  const minute = today.getMinutes();
  const convertedTime = hours * 60 + minute;
  const history = useHistory();

  /// 방명록
  const [comments, setComments] = useState([]);
  const [bestComments, setBestComments] = useState([]);
  useEffect(() => {
    const newBestComments = comments
      .filter(comment => comment.likes.length > 0)
      .sort((a, b) => b.likes.length - a.likes.length)
      .slice(0, 3);
    newBestComments.forEach(comment => {
      comment.isBest = true;
    });
    setBestComments(newBestComments);
  }, [comments]);

  const subscribeComments = useCallback(() => guestBookCollectionRef
    .orderBy('created_at', 'desc')
    .onSnapshot(docs => {
      const firestoreComments = [];
      docs.forEach(doc => (
        firestoreComments.push({
          id: doc.id,
          ...doc.data(),
        })));
      setComments(firestoreComments);
    }), []);

  useEffect(() => {
    const unsubscribe = subscribeComments();
    return () => unsubscribe();
  }, [subscribeComments]);

  const commentsList = useCallback(() => {
    let descriptions = [];
    let indicators = [];
    let links = [];
    bestComments.map((com, i) => {
      descriptions.push(`[BEST]${com.content}`);
      indicators.push('방명록');
      links.push('/guest-book');
    });
    return { descriptions, indicators, links };
  }, [bestComments]);

  const PERFORMANCES = [
    ['보컬/힙합공연 씽스틸러', 2, 930, 1080, '/performance/sing-stealer'],
    ['밴드공연 폰서트 LIVE 1부', 4, 1065, 1300, '/performance/phone-cert'],
    ['밴드공연 폰서트 LIVE 2부', 5, 1080, 1200, '/performance/phone-cert'],
    ['댄스공연 힛 더 스테이지', 5, 750, 770, '/performance/hit-the-stage'],
  ];

  const performanceList = useCallback(() => {
    let pDescriptions = [];
    let pIndicators = [];
    let pLinks = [];
    PERFORMANCES.map((pf) => {
      if (convertedTime < pf[3] && date === pf[1]) {
        pIndicators.push('공연');
        pLinks.push(pf[4]);
        let description = '';
        if (convertedTime > pf[2]) {
          description = `${pf[0]} NOW LIVE`;
        } else if (convertedTime > pf[2] - 60) {
          description = `${pf[2] - convertedTime}분 후 ${pf[0]}`;
        } else {
          description = `${Math.floor((pf[2] - convertedTime) / 60)}시간 후 ${pf[0]}`;
        }
        pDescriptions.push(description);
      }
    });

    return { pDescriptions, pIndicators, pLinks };
  }, [hours]);

  const { pDescriptions, pIndicators, pLinks } = performanceList();

  const [INDICATORS, setINDICATORS] = useState(['오목', ...pIndicators]);
  const [LINKS, setLINKS] = useState(['/activity/mini/omok', ...pLinks]);
  const [DESCRIPTIONS, setDESCRIPTIONS] = useState([
    '오목 오후 5시까지 진행', ...pDescriptions,
  ]);

  useEffect(() => {
    const { descriptions, indicators, links } = commentsList();
    setINDICATORS(ind => [...ind, ...indicators]);
    setDESCRIPTIONS(des => [...des, ...descriptions]);
    setLINKS(lnk => [...lnk, ...links]);
  }, [bestComments]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDisplay(dp => (dp + 1) % (LINKS.length));
    }, 3000);
    return () => clearInterval(interval);
  }, [LINKS]);

  return (
    <>
      <S.NoticeWrapper>
        { bestComments.length > 0 && INDICATORS.map((e, i) => (
          i === currentDisplay
            && (
            <S.Notice onClick={() => history.push(LINKS[currentDisplay])} key={i}>
              <S.Indicator>{INDICATORS[currentDisplay]}</S.Indicator>
              <p>{DESCRIPTIONS[currentDisplay]}</p>
            </S.Notice>
            )
        ))}
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
