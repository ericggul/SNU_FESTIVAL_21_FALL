import React, { useEffect, useMemo } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import ConfettiGenerator from 'confetti-js';
import * as S from './styles';

function Confetti({
  theme, svgs, max, zIndex = 0,
}) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  useEffect(() => {
    const confettiSettings = {
      target: 'confetti-canvas',
      width: theme.windowWidth,
      height: theme.windowHeight,
      rotate: true,
      max: max || (isMobile ? 15 : 20),
      props: svgs.length > 0 && svgs.map(svg => ({
        type: 'svg',
        src: svg.src,
        size: svg.size || (isMobile ? 20 : 50) + Math.random() * 80,
        weight: svg.weight || 1,
      })),
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, [theme.windowHeight, theme.windowWidth, svgs, isMobile, max]);

  return (
    <canvas id="confetti-canvas" style={{ position: 'absolute', zIndex }} />
  );
}
export default withTheme(Confetti);

Confetti.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
    windowHeight: PropTypes.number,
  }).isRequired,
  svgs: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    weight: PropTypes.number,
  })),
  max: PropTypes.number,
};

Confetti.defaultProps = {
  svgs: [],
  max: null,
};
