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
  const minuite = today.getMinutes();
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

  // const performanceList = useCallback(() => {
  //   let descriptions = [];
  //   let indicators = [];
  //   let links = [];
  //   if (date === 26) {
  //     descriptions.push('');
  //   }
  //   return descriptions, indicators, links;
  // }, [hours]);

  const [INDICATORS, setINDICATORS] = useState(['공연', '공연', '공연', '공연', '게임', '토크쇼', '오목']);
  const [LINKS, setLINKS] = useState([
    '/performance/phone-cert', '/performance/hit-the-stage',
    '/performance/sing-stealer', '/performance/game-tournament',
    '/activity/group', '/activity/radio', '/activity/mini/omok']);
  const [DESCRIPTIONS, setDESCRIPTIONS] = useState([
    `${26 - date}일 후 폰서트 LIVE 밴드 무대`,
    `${26 - date}일 후 힛더스테이지 댄스 무대`,
    `${26 - date}일 후 매력적인 목소리가 가득 찬 씽스틸러`,
    `${26 - date}일 후 관악게임토너먼트`,
    `단체게임 신청 ${26 - date}일 남음`,
    `${26 - date}일 후 토크쇼`,
    '오목 오후 5시까지 진행',
  ]);

  useEffect(() => {
    console.log(commentsList());
    const { descriptions, indicators, links } = commentsList();
    console.log(descriptions, indicators);
    setINDICATORS(ind => [...ind, ...indicators]);
    setDESCRIPTIONS(des => [...des, ...descriptions]);
    setLINKS(lnk => [...lnk, links]);
  }, [bestComments]);

  console.log(INDICATORS);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDisplay(dp => (dp + 1) % (LINKS.length));
    }, 3000);
    return () => clearInterval(interval);
  }, [LINKS]);

  return (
    <>
      <S.NoticeWrapper>
        {INDICATORS.map((e, i) => (
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
