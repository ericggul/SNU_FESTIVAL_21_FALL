import React from 'react';
import PropTypes from 'prop-types';
import LightChange1 from '@/foundations/animation/ImageTransition/LightChange1';
import Photo from '@I/introduction/group-photo.png';

import * as S from './styles';

function GroupPhoto() {
  return (
    <S.StyledGroupPhoto>
      <LightChange1 image={Photo} />
      {/* <S.Image src={Photo} alt="축하사 단체사진" /> */}
    </S.StyledGroupPhoto>
  );
}
export default GroupPhoto;

GroupPhoto.propTypes = {

};
