import React from 'react';
import PropTypes from 'prop-types';
import Comment from '@C/guest-book/comment/Comment';
import StampDescriptionBox from '@C/guest-book/StampDescriptionBox';
import * as S from './styles';

function GuestBook() {
  return (
    <S.StyledGuestBook>
      <S.Header>방명록</S.Header>
      {/* NOTE: width 조절을 위해 임시로 style 부여 */}
      <div style={{ width: '100%', height: '100%' }}>
        <S.StampDescriptionBoxWrapper>
          <StampDescriptionBox />
        </S.StampDescriptionBoxWrapper>
        <Comment />
      </div>
    </S.StyledGuestBook>
  );
}
export default GuestBook;

GuestBook.propTypes = {

};
