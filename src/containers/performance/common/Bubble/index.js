import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { transition } from '@C/performance/Performance';
import * as S from './styles';

function Bubble({ title, decoration, speak }) {
  useEffect(() => {
    if (speak) {
      const utterance = new SpeechSynthesisUtterance(`${decoration} ${title}`);
      utterance.lang = 'ko';
      utterance.rate = 0.8;
      utterance.pitch = 0.8;
      speechSynthesis.speak(utterance);
    }
  }, [speak]);

  return (
    <S.StyledBubble
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      transition={{
        ...transition,
        delay: 0.3,
      }}
      long={decoration.length > 15}
    >
      <p>{decoration}</p>
      <p>{title}</p>
    </S.StyledBubble>
  );
}
export default Bubble;

Bubble.propTypes = {
  title: PropTypes.string.isRequired,
  decoration: PropTypes.string.isRequired,
};
