import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const NEON_YELLOW = `#f6f8c0`;

function TextReveal({ text, durationTime, delayTime, color = NEON_YELLOW }) {
  const getRandom = (a, b) => Math.random() * (b - a) + a;
  const transformText = (string, ref) => {
    const target = ref.current;
    target.innerHTML = '';
    let boldPosition = string.indexOf('b');
    let stringSet = string.split('');
    stringSet.splice(boldPosition, 1);

    stringSet.forEach((str, i) => {
      const createNode = () => {
        const n = document.createElement('span');
        n.innerText = str;
        n.animate([{
          opacity: 0,
          filter: `blur(4px)`,
        }, {
          opacity: 1,
          filter: 'blur(0px)',
        }], {
          duration: durationTime,
          delay: getRandom(delayTime.min, delayTime.max),
          fill: 'backwards',
        });
        if (i === boldPosition) {
          n.style.textShadow = 
         `
         0 0 0rem ${color},
         0 0 0.1rem ${color}, 
   
         0 0 0.6rem ${color},
         0 0 1rem ${color}`;
        }
        target.appendChild(n);
      };

      createNode();
    });
  };

  const textRef = useRef();
  useEffect(() => {
    transformText(text, textRef);
  }, [text, textRef]);

  return (
    <S.StyledTextReveal ref={textRef} />
  );
}
export default TextReveal;

TextReveal.propTypes = {

};
