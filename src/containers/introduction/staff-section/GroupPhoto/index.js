import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Photo from '@I/introduction/group-photo.jpeg';
import { withTheme } from 'styled-components';
import LightChange1 from '@F/animation/ImageTransition/LightChange1';

import * as S from './styles';

function GroupPhoto({ theme }) {
  return (
    <S.StyledGroupPhoto>
      <LightChange1 image={Photo} />
    </S.StyledGroupPhoto>
  );
}
export default withTheme(GroupPhoto);

GroupPhoto.propTypes = {

};
