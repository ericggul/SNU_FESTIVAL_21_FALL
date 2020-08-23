import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Video({ isMuted, video }) {
  return (
    <S.Video autoPlay loop muted={isMuted}>
      <source src={video} type="video/mp4" />
    </S.Video>
  );
}
export default Video;

Video.propTypes = {
  isMuted: PropTypes.bool,
  video: PropTypes.string.isRequired,
};

Video.defaultProps = {
  isMuted: true,
};