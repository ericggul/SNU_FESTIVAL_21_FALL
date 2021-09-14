import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const NEON_YELLOW = `#f6f8c0`;

function TextReveal({ text }) {
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
          opacity: 1,
          filter: `blur(0px)`,
        }, {
          opacity: 0,
          filter: 'blur(20px)',
        }], {
          duration: 1000,
          delay:(stringSet.length - i) * 350,
          fill: 'forwards',
        });

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
