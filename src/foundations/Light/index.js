import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

export function LightSimple({ top, left, size = 1 }) {
  const width = useMemo(() => size * 8, [size]);
  return (
    <S.StyledLight1 top={top} left={left} width={width}>
      <S.Circle1 width={width} />
    </S.StyledLight1>
  );
}

export function Light1({ top, left, size = 1 }) {
  const width = useMemo(() => size * 40, [size]);
  return (
    <S.StyledLight1 top={top} left={left} width={width}>
      <S.Circle2 width={width / 10} />
      <S.Axis width={width} rotate={90} />
      <S.Axis width={width} rotate={0} />
    </S.StyledLight1>
  );
}

export function Light2({ top, left, size = 1 }) {
  const width = useMemo(() => size * 10, [size]);
  return (
    <S.StyledLight1 top={top} left={left} width={width}>
      <S.Circle3 width={width / 10} top={34} left={26} />
      <S.Circle3 width={width / 9} top={10} left={20} />
      <S.Circle3 width={width / 7} top={0} left={15} />
      <S.Circle3 width={width / 12} top={16} left={30} />
      <S.Circle3 width={width / 10} top={0} left={25} />
      <S.Circle3 width={width / 8} top={10} left={0} />
      <S.Circle3 width={width / 10} top={4} left={18} />
      <S.Circle3 width={width / 10} top={30} left={0} />
      <S.Circle3 width={width / 20} top={60} left={15} />
    </S.StyledLight1>
  );
}

export function Light4({
  top, left, size = 1, angle = 0,
}) {
  const width = useMemo(() => size * 70, [size]);
  return (
    <S.StyledLight1 top={top} left={left} width={width / 5}>
      <S.Axis2 width={width} rotate={90 + angle} />
      <S.Axis2 width={width} rotate={0 + angle} />
      <S.Circle4 width={width / 10} />
    </S.StyledLight1>
  );
}

export function Light5({ top, left, size = 1 }) {
  const width = useMemo(() => size * 70, [size]);
  return (
    <S.StyledLight1 top={top} left={left} width={width / 5}>
      <Light4 top={10} left={10} size={0.3} angle={20} />
      <Light4 top={0} left={20} size={0.5} angle={-10} />
      <Light4 top={3} left={8} size={0.2} angle={70} />
      <Light4 top={15} left={0} size={0.4} angle={50} />
      <Light4 top={9} left={4} size={0.3} angle={10} />
      <Light4 top={25} left={30} size={0.3} angle={10} />
      <Light4 top={30} left={0} size={0.4} angle={-40} />
    </S.StyledLight1>
  );
}

export function Light6({ top, left, size = 1 }) {
  const width = useMemo(() => size * 70, [size]);
  return (
    <S.StyledLight1 top={top} left={left} width={width / 5}>
      <Light4 top={10} left={10} size={0.3} angle={20} />
      <Light4 top={0} left={20} size={0.5} angle={-10} />
      <Light4 top={3} left={8} size={0.2} angle={70} />
      <Light4 top={15} left={0} size={0.4} angle={50} />
      <Light4 top={9} left={4} size={0.3} angle={10} />
      <Light4 top={25} left={30} size={0.3} angle={10} />
      <Light4 top={30} left={0} size={0.4} angle={-40} />
    </S.StyledLight1>
  );
}
