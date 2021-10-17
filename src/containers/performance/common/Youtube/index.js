import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import * as S from './styles';

function Youtube({ theme, src }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme]);
  return (
    <S.YouTube>
      <iframe
        width={isMobile ? theme.windowWidth : theme.windowWidth * 0.8}
        height={isMobile ? theme.windowWidth * 0.5625 : theme.windowWidth * 0.45}
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </S.YouTube>
  );
}
export default withTheme(Youtube);

Youtube.propTypes = {

};
