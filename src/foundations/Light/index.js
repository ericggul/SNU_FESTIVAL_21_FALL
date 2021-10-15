import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

export function LightSimple({
  top, left, size = 1, handleClick,
}) {
  const width = useMemo(() => size * 8, [size]);

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
  const width = useMemo(() => size * 20, [size]);
  const [animate, setAnimate] = useState(false);
  const onClick = useCallback(() => {
    setAnimate(true);
    setTimeout(() => {
      handleClick();
    }, 1000);
  }, [animate]);

  return (
    <S.StyledLight1 animate={animate} onClick={onClick} top={top} left={left} width={50}>
      <S.CircleSimple2 width={width} top={0} left={0} delay={0} />
    </S.StyledLight1>
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
        <S.Circle3 top={pos.top} left={pos.left} width={pos.size} delay={i * 0.1} key={i} />
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
    <S.StyledLight1 animate={animate} onClick={onClick} top={top} left={left} width={width}>
      {randomArray.map((pos, i) => (
        <S.Circle31 top={pos.y} left={pos.x} width={pos.size} delay={i * 0.14} key={i} />
      ))}
    </S.StyledLight1>
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

  const width = useMemo(() => size * 70, [size]);
  return (
    <S.StyledLight1 animate={animate} onClick={onClick} top={top} left={left} width={width / 5}>
      <S.Axis2 width={width} rotate={90 + angle} />
      <S.Axis2 width={width} rotate={0 + angle} />
      <S.Circle4 width={width / 10} />
    </S.StyledLight1>
  );
}

export function Light5({
  top, left, size = 1, handleClick,
}) {
  const width = useMemo(() => size * 70, [size]);
  const [animate, setAnimate] = useState(false);
  const onClick = useCallback(() => {
    setAnimate(true);
    setTimeout(() => {
      handleClick();
    }, 1000);
  }, [animate]);
  return (
    <S.StyledLight1 animate={animate} onClick={onClick} top={top} left={left} width={width / 5}>
      <Light4 top={40} left={42} size={0.3} angle={20} />
      <Light4 top={0} left={20} size={0.5} angle={-10} />
      <Light4 top={65} left={8} size={0.2} angle={70} />
      <Light4 top={15} left={0} size={0.4} angle={50} />
      <Light4 top={70} left={34} size={0.3} angle={10} />
      <Light4 top={25} left={30} size={0.3} angle={10} />
      <Light4 top={40} left={0} size={0.4} angle={-40} />
    </S.StyledLight1>
  );
}

export function Light6({
  top, left, size = 1, handleClick,
}) {
  const width = useMemo(() => size * 70, [size]);
  const getRandom = useCallback((a, b) => Math.random() * (b - a) + a, []);
  const number = 90;
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
    <S.StyledLight1 animate={animate} onClick={onClick} top={top} left={left} width={width / 5}>
      {randomArray.map((pos, i) => (
        <S.Circle5 top={pos.y} left={pos.x} width={pos.size} delay={i * 0.1} key={i} />
      ))}
    </S.StyledLight1>
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
    <S.StyledLight1 animate={animate} onClick={onClick} top={top} left={left} width={width / 5}>
      <S.LightLetter>LIGHT</S.LightLetter>
    </S.StyledLight1>
  );
}
