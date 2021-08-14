import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function TextReveal({ text }) {
  const getRandom = (a, b) => Math.random() * (b - a) + a;
  const transformText = (string, ref) => {
    const target = ref.current;
    target.innerHTML = '';
    let boldPosition = string.indexOf('!');
    let stringSet = string.split('');
    stringSet.splice(boldPosition, 1);

    stringSet.forEach((str, i) => {
      const createNode = () => {
        const n = document.createElement('span');
        n.innerText = str;
        n.animate([{
          opacity: 0,
          filter: `blur(${getRandom(2, 5)}px)`,
        }, {
          opacity: 1,
          filter: 'blur(0px)',
        }], {
          duration: 1000,
          delay: getRandom(500, 2000),
          fill: 'backwards',
        });
        if (i === boldPosition) {
          n.style.textShadow = '0 0 0.5rem #E0A62F, 0 0 1rem #F9E0B2, 0 0 2rem #E0A62F, 0 0 3rem #E0A62F, 0 0 5rem #EEC05B, 0 0 7rem #E0A62F';
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
