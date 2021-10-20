import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import useAudio from '@U/hooks/useAudio';
import { withTheme } from 'styled-components';
import Light from '@/static/audio/light.mp3';
import Zarathustra from '@/static/audio/Zarathustra.mp3';
import * as S from './styles';

export function LightSimple({
  top, left, size = 1, handleClick,
}) {
  const width = useMemo(() => size * 8, [size]);
  const [, playAudio] = useAudio(Light);
  const [animate, setAnimate] = useState(false);
  const onClick = useCallback(() => {
    setAnimate(true);
    setTimeout(() => {
      handleClick();
    }, 1000);
  }, [animate]);
  return (
    <S.ContainerSimple animate={animate} onClick={onClick} top={top} left={left} width={50}>
      <S.Circle1 width={width} />
    </S.ContainerSimple>
  );
}

export function LightSimple2({
  top, left, size = 1, handleClick,
}) {
  const [, playAudio] = useAudio(Zarathustra);
  const width = useMemo(() => size * 20, [size]);
  const [animate, setAnimate] = useState(false);
  const onClick = () => {
    setAnimate(true);
    playAudio();
    setTimeout(() => {
      handleClick();
    }, 7000);
  };

  return (
    <S.ContainerSimple2 animate={animate} onClick={onClick} top={top} left={left} width={50}>
      <S.CircleSimple2 width={width} top={0} left={0} delay={0} />
    </S.ContainerSimple2>
  );
}

export function Light1({
  top, left, size = 1, handleClick,
}) {
  const width = useMemo(() => size * 200, [size]);
  const [animate, setAnimate] = useState(false);
  const onClick = useCallback(() => {
    setAnimate(true);
    setTimeout(() => {
      handleClick();
    }, 1000);
  }, [animate]);
  return (
    <S.Container1 animate={animate} onClick={onClick} top={top} left={left} width={50}>
      <S.Circle2 width={width / 20} />
      <S.Axis width={width} rotate={30} />
      <S.Axis width={width} rotate={120} />
    </S.Container1>
  );
}

export function Light2({
  top, left, size = 1, handleClick,
}) {
  const width = useMemo(() => size * 10, [size]);
  const getRandom = useCallback((a, b) => Math.random() * (b - a) + a, []);
  const number = 10;
  const allowance = 100;
  const randomArray = useMemo(() => {
    const array = [];
    for (let i = 0; i < number; i += 1) {
      array.push({ x: getRandom(0, allowance), y: getRandom(0, allowance), size: getRandom(10, 20) });
    }
    return array;
  }, []);

  const [animate, setAnimate] = useState(false);
  const onClick = useCallback(() => {
    setAnimate(true);
    setTimeout(() => {
      handleClick();
    }, 1000);
  }, [animate]);

  return (
    <S.C2 animate={animate} top={top} left={left} width={width} onClick={onClick}>
      {randomArray.map((pos, i) => (
        <S.Circle3 animate={!animate} top={pos.top} left={pos.left} width={pos.size} delay={i * 0.1} key={i} />
      ))}
    </S.C2>
  );
}

export function Light3({
  top, left, size = 1, handleClick,
}) {
  const width = useMemo(() => size * 10, [size]);
  const getRandom = useCallback((a, b) => Math.random() * (b - a) + a, []);
  const number = 15;
  const allowance = 60;
  const randomArray = useMemo(() => {
    const array = [];
    for (let i = 0; i < number; i += 1) {
      array.push({ x: getRandom(0, allowance), y: getRandom(0, allowance), size: getRandom(10, 20) });
    }
    return array;
  }, []);
  const [animate, setAnimate] = useState(false);
  const onClick = useCallback(() => {
    setAnimate(true);
    setTimeout(() => {
      handleClick();
    }, 1000);
  }, [animate]);

  return (
    <S.Container3 animate={animate} onClick={onClick} top={top} left={left} width={width}>
      {randomArray.map((pos, i) => (
        <S.Circle31 top={pos.y} left={pos.x} width={pos.size} delay={i * 0.14} key={i} />
      ))}
    </S.Container3>
  );
}

export function Light4({
  top, left, size = 1, angle = 0, handleClick,
}) {
  const [animate, setAnimate] = useState(false);
  const onClick = useCallback(() => {
    setAnimate(true);
    setTimeout(() => {
      handleClick();
    }, 1000);
  }, [animate]);

  const width = useMemo(() => size * 20, [size]);

  const getRandom = useCallback((a, b) => Math.random() * (b - a) + a, []);
  const getRandomColor = useCallback(() => `hsl(${getRandom(180, 200)}, ${getRandom(50, 100)}%, ${getRandom(50, 80)}%)`);
  const number = 16;
  const randomArray = useMemo(() => {
    const array = [];
    for (let i = 0; i < number; i += 1) {
      array.push({ x: width * (i % 4), y: width * Math.floor(i / 4), color: getRandomColor() });
    }
    return array;
  }, []);

  return (
    <S.Container4 animate={animate} onClick={onClick} top={top} left={left}>
      {randomArray.map((pos, i) => <S.Circle4 width={width / 3} delay={i * 0.25} key={i} top={pos.y} left={pos.x} color={pos.color} />)}
    </S.Container4>
  );
}

function Light5({
  size = 1, handleClick, theme, visible,
}) {
  const width = useMemo(() => size * 70, [size]);
  const [animate, setAnimate] = useState(false);
  const onClick = useCallback(() => {
    setAnimate(true);
    handleClick();
  }, [animate]);

  console.log('animate', animate);

  const getRandom = useCallback((a, b) => Math.random() * (b - a) + a, []);
  const number = 50;
  const randomArray = useMemo(() => {
    const array = [];
    for (let i = 0; i < number; i += 1) {
      array.push({
        x: getRandom(0, theme.windowWidth), y: getRandom(0, theme.windowHeight),
        // size: getRandom(0.5, 1.4),
      });
    }
    return array;
  }, []);

  return (
    <S.Container5 animate={animate} visible={visible}>
      {randomArray.map((pos, i) => (
        <S.Circle5
          onClick={onClick}
          animate={animate}
          key={i}
          width={1}
          top={pos.y}
          left={pos.x}
          delay={i * 0.1}
        />
      ))}
    </S.Container5>
  );
}

export default withTheme(Light5);

export function Light6({
  top, left, size = 1, handleClick,
}) {
  const width = useMemo(() => size * 70, [size]);
  const getRandom = useCallback((a, b) => Math.random() * (b - a) + a, []);
  const number = 140;
  const allowance = 90;
  const randomArray = useMemo(() => {
    const array = [];
    for (let i = 0; i < number; i += 1) {
      array.push({ x: getRandom(0, allowance), y: getRandom(0, allowance), size: getRandom(0.5, 1.5) });
    }
    return array;
  }, []);
  const [animate, setAnimate] = useState(false);
  const onClick = useCallback(() => {
    setAnimate(true);
    setTimeout(() => {
      handleClick();
    }, 1000);
  }, [animate]);
  return (
    <S.Container6 animate={animate} onClick={onClick} top={top} left={left} width={width / 5}>
      {randomArray.map((pos, i) => (
        <S.Circle6 top={pos.y} left={pos.x} width={pos.size} delay={i * 0.1} key={i} />
      ))}
    </S.Container6>
  );
}

export function Light7({
  top, left, size = 1, handleClick,
}) {
  const width = useMemo(() => size * 60, [size]);
  const getRandom = useCallback((a, b) => Math.random() * (b - a) + a, []);
  const number = 40;
  const allowance = 90;
  const randomArray = useMemo(() => {
    const array = [];
    for (let i = 0; i < number; i += 1) {
      array.push({
        x: getRandom(0, allowance), y: getRandom(0, allowance), size: getRandom(width * 0.5, width), rotate: getRandom(0, 360),
      });
    }
    return array;
  }, []);

  const [animate, setAnimate] = useState(false);
  const onClick = useCallback(() => {
    setAnimate(true);
    setTimeout(() => {
      handleClick();
    }, 1000);
  }, [animate]);
  return (
    <S.StyledLight1 animate={animate} onClick={onClick} top={top} left={left} width={width / 5} onClick={onClick}>
      {randomArray.map((pos, i) => (
        <S.Axis3 top={pos.y} left={pos.x} width={pos.size} rotate={pos.rotate} delay={i * 0.1} key={i} />
      ))}
    </S.StyledLight1>
  );
}

export function LightLetter({
  top, left, size = 1, handleClick,
}) {
  const width = useMemo(() => size * 60, [size]);
  const [animate, setAnimate] = useState(false);
  const onClick = useCallback(() => {
    setAnimate(true);
    setTimeout(() => {
      handleClick();
    }, 1000);
  }, [animate]);
  return (
    <S.ContainerLetter animate={animate} onClick={onClick} top={top} left={left} width={width / 5}>
      <S.LightLetter>LIGHT</S.LightLetter>
    </S.ContainerLetter>
  );
}
