import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import {
  LIST,
} from '@C/activity/competition/variables';
import { MapInteractionCSS } from 'react-map-interaction';
import HeartClicked from '@I/activity/competition/heart-clicked.png';
import HeartDefault from '@I/activity/competition/heart.png';
import PopupModal from '@F/modal/PopupModal';
import { toast } from 'react-toastify';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
import ImageModal from '@C/activity/competition/ImageModal';
import { competitionCollectionRef } from '@U/initializer/firebase';
import firebase from 'firebase';
import LoadingMascot from '@F/loading/LoadingMascot';
import { EventBehavior } from '@U/initializer/googleAnalytics';
import Skeleton from '@I/skeleton/skeleton.png';
import Image from '@/foundations/images/Image';
import * as S from './styles';

function VoteSection({
  shuffled, theme, isAuthorized, user,
}) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const [selectedSrc, setSelectedSrc] = useState('https://snufestival.com/images/competition/0.jpg');
  const { modalComponent: signInModalComponent, setIsModalOpen: setSignInModalComponent } = useModal(SignInGuide);
  const { modalComponent: imageModalComponent, setIsModalOpen: setImageModalComponent } = useModal(ImageModal, true, false, {
    src: selectedSrc,
  });

  // likes
  const [myLikesForCompetition, setMyLikesForCompetition] = useState([]);
  useEffect(() => {
    if (!isAuthorized) setMyLikesForCompetition([]);
    if (isAuthorized) {
      competitionCollectionRef.doc('likes').get().then((doc) => {
        Object.entries(doc.data()).forEach(([key, likes]) => {
          if (likes.includes(user.uid)) {
            setMyLikesForCompetition(comp => [...comp, key]);
          }
        });
      });
    }
  }, [isAuthorized]);

  useEffect(() => {
    competitionCollectionRef.doc('likes').get().then((doc) => {
      console.log(doc.data());
      let array = [];
      for (const [object, key] of Object.entries(doc.data())) {
        array.push({ [object]: key.length });
      }
      console.log(array);
    });
  }, []);

  const onClickLikeButton = useCallback((competitionId) => {
    if (!isAuthorized) {
      setSignInModalComponent(true);
      return;
    }
    let isLiked = false;

    if (myLikesForCompetition.length >= 5 && !myLikesForCompetition.includes(competitionId.toString())) {
      toast('최대 다섯 작품에만 투표할 수 있습니다.');
    } else {
      if (myLikesForCompetition.includes(competitionId.toString())) {
        setMyLikesForCompetition(comp => comp.filter(item => item !== competitionId.toString()));
        isLiked = true;
      } else {
        setMyLikesForCompetition(comp => [...comp, competitionId.toString()]);
      }

      competitionCollectionRef.doc('likes').update({
        [competitionId]: isLiked
          ? firebase.firestore.FieldValue.arrayRemove(user.uid) : firebase.firestore.FieldValue.arrayUnion(user.uid),
      }).then(() => (isLiked
        ? toast(`좋아요 취소(${myLikesForCompetition.length - 1}/5)`)
        : toast(`좋아요!(${myLikesForCompetition.length + 1}/5)`))).catch(() => {
        toast('인터넷이 불안정합니다. 다시 시도해주세요.');
      });
    }
  }, [isAuthorized, myLikesForCompetition]);

  const handleImageClick = useCallback((idx) => {
    setSelectedSrc(`https://snufestival.com/images/competition/${shuffled[idx]}.jpg`);
    setImageModalComponent(true);
  }, [selectedSrc, shuffled]);

  const Item = ({ i, handleClick }) => (
    <S.Item key={LIST[shuffled[i]]}>
      <S.ImageWrapper>
        <S.Image
          src={`https://snufestival.com/images/competition/${shuffled[i]}.jpg`}
          alt="작품"
          onClick={() => handleClick(i)}
        />
      </S.ImageWrapper>
      <S.InfoSection>
        <p>
          {LIST[shuffled[i]]}
        </p>
        <S.LikeButton onClick={() => onClickLikeButton(shuffled[i])}>
          <img src={myLikesForCompetition.includes(shuffled[i].toString()) ? HeartClicked : HeartDefault} alt="like" />
        </S.LikeButton>
      </S.InfoSection>
    </S.Item>
  );

  return (
    <S.StyledVoteSection>
      <S.ItemSection>
        {shuffled.map((item, i) => (
          <Item i={i} key={i} handleClick={handleImageClick} />
        ))}
      </S.ItemSection>
      {signInModalComponent}
      {imageModalComponent}
    </S.StyledVoteSection>
  );
}
export default withTheme(VoteSection);

VoteSection.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
    isLoading: PropTypes.bool,
    email: PropTypes.string,
  }).isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};
