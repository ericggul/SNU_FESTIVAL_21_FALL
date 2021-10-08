import Confetti from '@F/animation/Confetti';
import { withTheme } from 'styled-components';
import React, { useMemo } from 'react';
import NeutralRio from '@I/activity/place/NeutralRio.png';
import RightRio from '@I/activity/place/RightRio.png';
import WrongRio from '@I/activity/place/WrongRio.png';

export const speakRightorWrong = (tf) => {
  if (tf) {
    const utterance = new SpeechSynthesisUtterance('짝짝짝. 참 잘했어요.');
    utterance.lang = 'ko';
    utterance.rate = 1;
    utterance.pitch = 2.5;
    speechSynthesis.speak(utterance);
  } else {
    const utterance = new SpeechSynthesisUtterance('땡');
    utterance.lang = 'ko';
    utterance.rate = 0.8;
    utterance.pitch = 2;
    speechSynthesis.speak(utterance);
  }
};

export function ConfettiRightorWrong({ tf, isMobile }) {
  let source;

  if (tf === 1) {
    source = RightRio;
  } else if (tf === -1) {
    source = WrongRio;
  } else if (tf === 0) {
    source = NeutralRio;
  }
  return (
    <Confetti
      zIndex={-5}
      max={isMobile ? 5 : 7}
      svgs={[
        { src: source, size: isMobile ? 30 : 50 },
      ]}
    />
  );
}
