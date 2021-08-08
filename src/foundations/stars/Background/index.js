import React, { useEffect, useRef } from 'react';
import * as S from './styles';

export default function Background({ top, left, size }) {
  let worldXAngle = 0;
  let worldYAngle = 0;
  let d = 0;
  const worldRef = useRef();
  const viewportRef = useRef();
  const worldEl = worldRef.current;
  const viewportEl = viewportRef.current;

  const handleAngle = (e) => {
    worldYAngle = -(0.5 - (e.clientX / window.innerWidth)) * 180;
    worldXAngle = (0.5 - (e.clientY / window.innerHeight)) * 180;
    updateView();
  };

  const updateView = () => {
    worldEl.style.transform = ` translateZ(${d}px)
      rotateX(${worldXAngle}deg)
      rotateY(${worldYAngle}deg)
    `;
  };

  const generate = () => {

  };

  const getRandom = (a, b) => Math.random() * (b - a) + a;

  const CreateCloud = () => (
    <S.CloudBase
      transform={`
          translateX(${getRandom(0, 500)}px)
          translateY(${getRandom(0, 500)}px)
          translateZ(${getRandom(0, 500)}px)
        `}
    />
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleAngle);
    return () => window.removeEventListener('mousemove', handleAngle);
  });

  return (
    <S.Container>
      <S.Viewport ref={viewportRef}>
        <S.World ref={worldRef}>
          <CreateCloud />
        </S.World>
      </S.Viewport>
    </S.Container>
  );
}
