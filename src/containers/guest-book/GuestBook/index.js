import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Comments from '@C/guest-book/Comment';
import WriteBox from '@C/guest-book/WriteBox';
import withUser from '@U/hoc/withUser';
import { HeaderContent } from '@F/layout/Header';
import * as S from './styles';

function GuestBook({ user }) {
  return (
    <S.StyledGuestBook>
      <HeaderContent>방명록</HeaderContent>
      <S.Body>
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
