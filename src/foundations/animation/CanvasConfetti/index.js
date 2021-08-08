import React, { useEffect, useMemo } from 'react';
import { withTheme } from 'styled-components';
import confetti from 'canvas-confetti';
import * as S from './styles';

function CanvasConfetti({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  return (
    <canvas id="confetti-canvas-v2" />
  );
}
export default CanvasConfetti;

CanvasConfetti.propTypes = {

};
