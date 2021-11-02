import React, { useState, useEffect } from 'react';
import useInput from '@U/hooks/useInput';
import PropTypes from 'prop-types';
import * as S from './styles';

function Name({ name, onChangeName, background }) {
  const SCRIPTS = ['상의, 하의, 눈, 눈썹, 코, 입 ', '닉네임도 주는거 잊지 말구', '카카오톡으로 공유도 해봐!'];
  const [placeholder, setPlaceholder] = useState('');
  const [dir, setDir] = useState(1);
  const [index, setIndex] = useState(0);
  const [scriptIndex, setScriptIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder(SCRIPTS[scriptIndex].slice(0, Math.max(index, 0)));
      setIndex(idx => idx + dir);
    }, Math.random() * 200 + 100);
    return () => clearInterval(interval);
  }, [scriptIndex, placeholder, index, dir]);

  useEffect(() => {
    if (index === -6) {
      setScriptIndex(sIdx => (sIdx + 1) % (SCRIPTS.length));
      setDir(dr => -dr);
    }
  }, [index]);

  useEffect(() => {
    if (index > SCRIPTS[scriptIndex].length + 4) {
      setDir(dr => -dr);
    }
  }, [index, scriptIndex]);

  return (
    <>
      <S.Name>
        <S.Input onChange={onChangeName} placeholder="@snufestival">{name}</S.Input>
      </S.Name>

    </>
  );
}
export default Name;

Name.propTypes = {

};
