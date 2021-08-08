import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Comments from '@C/guest-book/Comment';
import StampDescriptionBox from '@C/guest-book/StampDescriptionBox';
import WriteBox from '@C/guest-book/WriteBox';
import withUser from '@U/hoc/withUser';
import { HeaderContent } from '@F/layout/Header';
import confetti from 'canvas-confetti';
import * as S from './styles';

function GuestBook({ user }) {
  useEffect(() => {
    const end = Date.now() + (15 * 1000);

    // go Buckeyes!
    const colors = ['#bb0000', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);
  return (
    <S.StyledGuestBook>
      <HeaderContent>방명록</HeaderContent>
      <S.Body>
        <S.StampDescriptionBoxWrapper>
          <StampDescriptionBox />
        </S.StampDescriptionBoxWrapper>
        <S.WriteBoxWrapper>
          <WriteBox user={user} />
        </S.WriteBoxWrapper>
        <S.CommentsWrapper>
          <Comments user={user} />
        </S.CommentsWrapper>
      </S.Body>
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
