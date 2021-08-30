import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Comments from '@C/guest-book/Comment';
import WriteBox from '@C/guest-book/WriteBox';
import Heart from '@C/guest-book/Heart';
import withUser from '@U/hoc/withUser';
import { HeaderContent } from '@F/layout/Header';
import * as S from './styles';

function GuestBook({ user }) {
  const [heartAnimate, setHeartAnimate] = useState(false);
  const heartAnimateToggle = useCallback(() => {
    setHeartAnimate(true);
    setTimeout(() => {
      setHeartAnimate(false);
    }, 520);
  }, []);
  return (
    <S.StyledGuestBook>
      <HeaderContent>방명록</HeaderContent>
      <S.Body>
        <S.WriteBoxWrapper>
          <WriteBox user={user} />
        </S.WriteBoxWrapper>
        <S.CommentsWrapper>
          <Comments user={user} handleHeartClick={heartAnimateToggle} />
        </S.CommentsWrapper>
      </S.Body>
      <Heart heartAnimate={heartAnimate} />
    </S.StyledGuestBook>
  );
}
export default withUser(GuestBook);

GuestBook.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    isLoading: PropTypes.bool,
    email: PropTypes.string,
  }).isRequired,
};
