import React, { useState, useEffect, useCallback } from 'react';
import ScrollTop from '@I/icon/scroll-top.svg';
import * as S from './styles';

function ScrollTopButton() {
  const [scroll, setScroll] = useState(0);

  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const onScroll = useCallback((e) => {
    setScroll(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <S.StyledScrollTopButton onClick={scrollTop}>
      <S.Image src={ScrollTop} alt="ScrollTop" scroll={scroll} />
    </S.StyledScrollTopButton>
  );
}
export default ScrollTopButton;

ScrollTopButton.propTypes = {

};
