import React, {
  useState, useCallback, useMemo, useEffect,
} from 'react';
import Search from '@C/fortune/Search';
import { toast } from 'react-toastify';
import useAudio from '@U/hooks/useAudio';

import CookieImage from '@I/fortune/Fortune.png';
import SearchLogo from '@I/fortune/Search.svg';
import useInput from '@U/hooks/useInput';
import { withTheme } from 'styled-components';
import withUser from '@U/hoc/withUser';
import { getRandomElementFromArray } from '@U/functions/array';

import PropTypes from 'prop-types';
import Lucky from '@/static/audio/lucky.mp3';
import * as S from './styles';

function Fortune({ theme, user, isAuthorized }) {
  const width = useMemo(() => Math.min(theme.windowWidth, 700), [theme]);
  const [number, setNumber] = useState(-1);
  const { value, onChange, setValue } = useInput('');

  const [, playAudio] = useAudio(Lucky);

  const handleSearch = (input) => {
    playAudio();
    if (Number.isInteger(parseInt(input))) {
      setNumber(input);
    } else {
      toast('숫자만 입력해 주세요!');
      setValue(' ');
    }
  };

  const RANDOM_DUMMIES = [
    'Chukhasa brings me here!!! :)',
    '홍팀 ZZAANG',
    'Schumpeterstraße',
  ];

  const handleLoginClick = useCallback(() => {
    const script = getRandomElementFromArray(RANDOM_DUMMIES);
    toast(script);
  }, []);

  return (
    number === -1
      ? (
        <S.StyledFortune>
          <S.Top>
            <S.Login onClick={handleLoginClick}>{isAuthorized ? '로그아웃' : '로그인'}</S.Login>
          </S.Top>
          <S.CookieContainer width={width * 0.8} height={width * 0.8}>
            <S.Image src={CookieImage} />
            <S.Text top={width * 0.65}>
              <p>F</p>
              <p>o</p>
              <p>r</p>
              <p>t</p>
              <p>u</p>
              <p>n</p>
              <p>e</p>
            </S.Text>
          </S.CookieContainer>
          <S.SearchContainer>
            <S.LogoContainer onClick={() => handleSearch(value)}>
              <S.SearchLogo src={SearchLogo} />
            </S.LogoContainer>
            <S.InputBox placeholder="숫자를 입력하세요" value={value} onChange={onChange} />
          </S.SearchContainer>
          <S.Button onClick={() => handleSearch(value)}>I'm Feeling Lucky</S.Button>
          <a
            href="https://www.google.com/search?q=%EC%BD%94%EB%A1%9C%EB%82%98+19+%EB%B0%B1%EC%8B%A0+%EC%98%88%EC%95%BD"
          >
            검색창에 숫자를 입력하고 위의 버튼을 클릭하세요
          </a>
        </S.StyledFortune>
      )
      : <Search number={number} backToMain={() => setNumber(-1)} />

  );
}
export default withTheme(withUser(Fortune));

Fortune.propTypes = {

};
