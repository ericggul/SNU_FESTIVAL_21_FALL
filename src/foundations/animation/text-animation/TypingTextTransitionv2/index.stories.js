import React from 'react';
import TypingTextTransition from './index';

export default {
  title: 'foundations/text-animation/TypingTextTransition',
};

export const Default = () => (
  <div style={{ height: 400, width: 800 }}>
    <TypingTextTransition
      text="지금은 기간이 아닙니다!"
      intervalTime={100}
    />
  </div>
);
