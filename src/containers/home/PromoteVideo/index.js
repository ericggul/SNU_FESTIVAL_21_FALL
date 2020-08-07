import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import bluemingVideo from '@/static/image/video/blueming.mp4';
import * as S from './styles';

function PromoteVideo({ parallax, offset }) {
  const setVideoSound = (clickEvent) => {
    clickEvent.stopPropagation();

    const isMuted = document.getElementById('bluemingVideo').muted;
    document.getElementById('bluemingVideo').muted = !isMuted;
  };

  return (
    <S.StyledPromoteVideo>
      <ParallaxLayer
        offset={offset}
        speed={0.1}
        onClick={() => parallax.scrollTo(offset + 1)}
      >
        <S.SoundButton onClick={setVideoSound}>소리</S.SoundButton>
        <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }} id="bluemingVideo">
          <source src={bluemingVideo} type="video/mp4" />
        </video>
      </ParallaxLayer>
    </S.StyledPromoteVideo>
  );
}
export default PromoteVideo;

PromoteVideo.propTypes = {
  parallax: PropTypes.objectOf(PropTypes.any),
  offset: PropTypes.number.isRequired,
};

PromoteVideo.defaultProps = {
  parallax: null,
};
