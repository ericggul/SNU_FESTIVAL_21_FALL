import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function RandomTextShuffle({ initialText, changeText, delayTime }) {
  const [execute, setExecute] = useState(false);
  function WordShuffler(giventext, ref) {
    let time = 0;
    let now;
    let then = Date.now();

    let delta;
    let currentTimeOffset = 0;

    const options = {
      fps: 100,
      timeOffset: 30,
      textColor: '#fff',
      needUpdate: true,
      colors: [
        '#555', '#666', '#777', '#888', '#999', '#aaa', '#bbb',
      ],
    };

    let needUpdate = execute;
    const interval = 500 / options.fps;

    const chars = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    ];

    const getRandomColor = () => {
      const randNum = Math.floor(Math.random() * options.colors.length);
      return options.colors[randNum];
    };

    const getRandCharacter = (characterToReplace) => {
      if (characterToReplace === ' ') {
        return ' ';
      }
      const randNum = Math.floor(Math.random() * chars.length);
      const lowChoice = -0.5 + Math.random();
      const picketCharacter = chars[randNum];
      return lowChoice < 0 ? picketCharacter.toLowerCase() : picketCharacter;
    };

    const generateSingleCharacter = (color, character) => {
      const span = document.createElement('span');
      span.style.color = color;
      span.innerHTML = character;
      return span;
    };

    const holder = ref;
    for (let i = 0; i < initialText.length; i += 1) {
      if (!needUpdate) {
        holder.current.appendChild(generateSingleCharacter('white', initialText[i]));
      }
    }

    const updateCharacter = () => {
      now = Date.now();
      delta = now - then;

      if (delta > interval) {
        currentTimeOffset += 1;

        if (currentTimeOffset === options.timeOffset && holder.current !== null) {
          holder.current.removeChild(holder.current.firstChild);
          holder.current.prepend(generateSingleCharacter('white', changeText.charAt(0)));
          needUpdate = false;
        }
        if (currentTimeOffset < options.timeOffset && holder.current !== null) {
          holder.current.removeChild(holder.current.firstChild);
          let color = getRandomColor();
          let w = getRandCharacter('P');
          holder.current.prepend(generateSingleCharacter(color, w));
        }
      }
    };

    function update() {
      time += 1;
      updateCharacter();
      requestAnimationFrame(update);
    }

    if (needUpdate) {
      update(time);
    }
  }

  const textRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setExecute(true);
    }, delayTime);
  }, []);

  useEffect(() => {
    WordShuffler(changeText, textRef);
  }, [changeText, textRef, execute]);

  return (
    <S.StyledRandomTextShuffle>
      <S.Text ref={textRef} />
    </S.StyledRandomTextShuffle>
  );
}
export default RandomTextShuffle;

RandomTextShuffle.propTypes = {
  changeText: PropTypes.string.isRequired,
};
