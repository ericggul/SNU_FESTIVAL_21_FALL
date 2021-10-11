import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function TextReveal({ text, globalDelay }) {
  const getRandom = (a, b) => Math.random() * (b - a) + a;
  const transformText = (string, ref) => {
    const target = ref.current;
    target.innerHTML = '';

    const stringSet = string.split('<split> ');

    stringSet.forEach((str, i) => {
      const createNode = () => {
        const n = document.createElement('span');
        n.innerText = str + ' ';
        n.animate([{
          opacity: 0,
          filter: `blur(${getRandom(2, 5)}px)`,
        }, {
          opacity: 1,
          filter: 'blur(0px)',
        }], {
          duration: 1400,
          delay: globalDelay + i * 1400,
          fill: 'backwards',
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