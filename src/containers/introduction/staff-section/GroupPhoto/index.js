import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Photo from '@I/introduction/group-photo.jpeg';
import { withTheme } from 'styled-components';
import LightChange1 from '@F/animation/ImageTransition/LightChange1';

import * as S from './styles';

function GroupPhoto({ theme }) {
  const [action, setAction] = useState(false);
  const onScroll = useCallback(() => {
    if (window.scrollY / theme.windowWidth > 1.5) {
      setAction(true);
      console.log('actioned!');
    }
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <S.StyledGroupPhoto>
      <LightChange1 image={Photo} action={action} />
    </S.StyledGroupPhoto>
  );
}
export default withTheme(GroupPhoto);

GroupPhoto.propTypes = {

};
