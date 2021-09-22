import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function RandomTextShuffle({ text }) {
  function WordShuffler(giventext, ref) {
    let time = 0;
    let now;
    let then = Date.now();

    let delta;
    let currentTimeOffset = 0;

    let currentWord = null;
    let currentCharacter = 0;
    let currentWordLength = 0;

    const options = {
      fps: 10,
      timeOffset: 5,
      textColor: '#fff',
      needUpdate: true,
      colors: [
        '#111', '#222', '#333', '#444',
      ],
    };

    let needUpdate = true;
    const interval = 500 / options.fps;

    const chars = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', '!', '§',
    ];

    const getRandomColor = () => {
      const randNum = Math.floor(Math.random() * options.colors.length);
      return options.colors[randNum];
    };

    const holder = ref;

    const getRandCharacter = (characterToReplace) => {
      if (characterToReplace === ' ') {
        return ' ';
      }
      const randNum = Math.floor(Math.random() * chars.length);
      const lowChoice = -0.5 + Math.random();
      const picketCharacter = chars[randNum];
      return lowChoice < 0 ? picketCharacter.toLowerCase() : picketCharacter;
    };

    const writeWord = (inputText) => {
      currentWord = giventext;
      currentWordLength = currentWord.length;
    };

    const generateSingleCharacter = (color, character) => {
      const span = document.createElement('span');
      span.style.color = color;
      span.innerHTML = character;
      return span;
    };

    const updateCharacter = () => {
      now = Date.now();
      delta = now - then;

      if (delta > interval) {
        currentTimeOffset += 1;

        const words = [];
        if (currentTimeOffset === options.timeOffset
        && currentCharacter !== currentWordLength) {
          currentCharacter += 1;
          currentTimeOffset = 0;
        }
        for (let k = 0; k < currentCharacter; k += 1) {
          words.push(currentWord[k]);
        }

        for (let i = 0; i < currentWordLength - currentCharacter; i += 1) {
          words.push(getRandCharacter(currentWord[currentCharacter + i]));
        }

        if (currentCharacter === currentWordLength) {
          needUpdate = false;
        }
        holder.current.innerHTML = '';
        words.forEach((w, index) => {
          let color;
          if (index > currentCharacter) {
            color = getRandomColor();
          } else {
            color = options.textColor;
          }
          holder.current.appendChild(generateSingleCharacter(color, w));
        });

        then = now - (delta % interval);
      }
    };

    function update() {
      time += 1;
      if (needUpdate) {
        updateCharacter();
      }
      requestAnimationFrame(update);
    }
    writeWord(text);
    update(time);
  }

  const textRef = useRef();

  useEffect(() => {
    WordShuffler(text, textRef);
  }, [text, textRef]);

  return (
    <S.StyledRandomTextShuffle>
      <S.Text ref={textRef} />
    </S.StyledRandomTextShuffle>
  );
}
export default RandomTextShuffle;

RandomTextShuffle.propTypes = {
  text: PropTypes.string.isRequired,
};
