import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { pdfjs, Document, Page } from 'react-pdf';
import {
  CARTOON, FIELDS_IN_ENGLISH, LITERATURE, REVERSED_FIELDS, VIDEO,
} from '@C/activity/competition/variables';

import FilledHeart from '@I/icon/filled-heart.svg';
import EmptyHeart from '@I/icon/empty-heart.svg';
import PopupModal from '@F/modal/PopupModal';
import { toast } from 'react-toastify';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
import { competitionCollectionRef } from '@U/initializer/firebase';
import firebase from 'firebase';
import LoadingMascot from '@F/loading/LoadingMascot';
import Image from '@/foundations/images/Image';
import * as S from './styles';

function VoteSection({
  field, items, isLoaded, listIHaveVoted, theme, isAuthorized, user, onVoteForField,
}) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const { modalComponent: signInModalComponent, setIsModalOpen: setSignInModalComponent } = useModal(SignInGuide);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // clickedItem
  const [clickedItem, setClickedItem] = useState(null);
  const onClickItem = useCallback((item) => {
    setClickedItem(item);
    setIsModalOpen(true);
    setPageNumber(1);
  }, []);

  // likes
  const [myLikesForCompetition, setMyLikesForCompetition] = useState([]);
  useEffect(() => {
    setMyLikesForCompetition(listIHaveVoted);
  }, [listIHaveVoted]);
  useEffect(() => {
    if (!isAuthorized) setMyLikesForCompetition([]);
  }, [isAuthorized]);
  const onClickLikeButton = (competitionId) => {
    if (!isAuthorized) {
      setSignInModalComponent(true);
      return;
    }
    if (listIHaveVoted.length > 0) {
      toast('이미 투표에 참여했습니다.');
    } else if (myLikesForCompetition.includes(competitionId)) {
      setMyLikesForCompetition([]);
    } else if (myLikesForCompetition.length > 0) {
      toast('한 작품에만 투표할 수 있습니다.');
    } else {
      setMyLikesForCompetition([competitionId]);
    }
  };

  // vote
  const isDisableToVote = useMemo(() => (
    !isAuthorized || listIHaveVoted.length > 0 || !isLoaded
  ), [isAuthorized, listIHaveVoted, isLoaded]);
  const submit = () => {
    const { uid, email } = user;
    if (myLikesForCompetition.length === 0) {
      toast('하트를 눌러 투표를 진행해 주세요.');
      return;
    }

    if (!email.endsWith('@snu.ac.kr')) {
      toast('SNU 계정만 투표에 반영됩니다.');
      onVoteForField(field, myLikesForCompetition);
      return;
    }

    competitionCollectionRef.doc(FIELDS_IN_ENGLISH[field]).update({
      [myLikesForCompetition[0]]: firebase.firestore.FieldValue.arrayUnion(uid),
    }).then(() => {
      toast(`${REVERSED_FIELDS[field]} 부문 투표에 참여되었습니다.`);
      onVoteForField(field, myLikesForCompetition);
    }).catch(() => {
      toast('인터넷이 불안정합니다. 다시 시도해주세요.');
    });
  };

  // PDF
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = useCallback(({ numPages: newPages }) => {
    setNumPages(newPages);
  }, []);
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);

  return (
    <S.StyledVoteSection>
      <S.ItemSection>
        {items.map(item => (
          <S.Item key={item.title}>
            <S.ImageWrapper>
              <div onClick={() => onClickItem(item)}><Image src={item.thumbnail} alt="작품" /></div>
              <S.LikeButton onClick={() => onClickLikeButton(item.competitionId)}>
                <img src={myLikesForCompetition.includes(item.competitionId) ? FilledHeart : EmptyHeart} alt="like" />
              </S.LikeButton>
            </S.ImageWrapper>
            <p>
              {item.title}
              {' '}
              -
              {' '}
              {item.author}
            </p>
            <p>{item.description}</p>
          </S.Item>
        ))}
      </S.ItemSection>

      <PopupModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        closeOnDocumentClick
        width={`${isMobile ? theme.windowWidth : theme.windowWidth * (2 / 3)}px`}
      >
        <>
          { clickedItem?.type === 'pdf' && (
          <Document
            file={clickedItem?.file}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<LoadingMascot />}
          >
            <Page pageNumber={pageNumber} scale={(isMobile ? 0.5 : 1) * clickedItem?.scale} />
            <S.Pagination>
              <span onClick={() => (pageNumber > 1 ? setPageNumber(pageNumber - 1) : null)}>&lt;</span>
              <span>{`Page ${pageNumber} of ${numPages}`}</span>
              <span onClick={() => (pageNumber < numPages ? setPageNumber(pageNumber + 1) : null)}>&gt;</span>
            </S.Pagination>
          </Document>
        )}
          { clickedItem?.type === 'youtube' && (
          <iframe
            width={isMobile ? theme.windowWidth : theme.windowWidth * (2 / 3)}
            height={isMobile ? theme.windowWidth / 1.77 : (theme.windowWidth * (2 / 3)) / 1.77}
            src={clickedItem.youtubeUrl}
            title={clickedItem.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        )}
        </>
      </PopupModal>

      <S.SubmitSection>
        <S.SubmitButton isDisabled={isDisableToVote} onClick={!isDisableToVote ? submit : null}>제출하기</S.SubmitButton>
        <p>버튼을 누른 이후에는 수정이 불가합니다!</p>
      </S.SubmitSection>

      {signInModalComponent}
    </S.StyledVoteSection>
  );
}
export default withTheme(VoteSection);

VoteSection.propTypes = {
  field: PropTypes.oneOf([CARTOON, LITERATURE, VIDEO]).isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isLoaded: PropTypes.bool.isRequired,
  listIHaveVoted: PropTypes.arrayOf(PropTypes.number).isRequired,
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
    isLoading: PropTypes.bool,
    email: PropTypes.string,
  }).isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  onVoteForField: PropTypes.func.isRequired,
};
