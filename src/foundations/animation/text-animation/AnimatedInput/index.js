import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

export default function AnimatedInput({ content, onMouseDown }) {
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState('');
  const [dir, setDir] = useState(1);
  const [index, setIndex] = useState(0);
  const [scriptIndex, setScriptIndex] = useState(0);

  const scripts = [
    '내용을 여기에 쓰면 됩니다.',
    '축하사 화이팅!   ',
    '2021 가을축제, 관악의 밤',
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setPlaceholder(scripts[scriptIndex].slice(0, Math.max(index, 0)));
        setIndex(index => index + dir);
      }, Math.random() * 200 + 100);

      return () => clearInterval(interval);
    }
  }, [loading, scriptIndex, index, dir]);

  useEffect(() => {
    if (index === -3) {
      setScriptIndex(scriptIndex => (scriptIndex + 1) % (scripts.length));
    }
  }, [index]);

  useEffect(() => {
    if (index > scripts[scriptIndex].length + 4 || index < -2) {
      setDir(dir => -dir);
    }
  }, [scriptIndex, index]);

  return (
    <S.TextArea
      placeholder={placeholder}
      {...content}
      onMouseDown={onMouseDown}
    />
  );
}
