import React, { useMemo, useEffect } from 'react';
import { withTheme } from 'styled-components';
import SearchLogo from '@I/fortune/Search.svg';
import useInput from '@U/hooks/useInput';
import PropTypes from 'prop-types';
import * as S from './styles';

function Search({ number, theme }) {
  const width = useMemo(() => Math.min(theme.windowWidth, 700), [theme]);
  const { value, onChange, setValue } = useInput(number);
  useEffect(() => {
    setValue(number);
  }, []);

  const DATA = [
    {
      header: '꽝',
      body: '다음 기회에. 오늘은 운수가 좋지 않은 날이군요',
      link: 'https://kwwang.co.kr',
    },
    {
      header: `${number}번 탈락`,
      body: '다음 기회에. 오늘은 운수가 좋지 않은 날이군요',
      link: 'https://tallak.co.kr',
    },
    {
      header: '야비티아이',
      body: '다음 기회에. 오늘은 운수가 좋지 않은 날이군요',
      link: 'https://snufestival.com/jabti',
    },
    {
      header: '홍팀 ZZANG',
      body: '다음 기회에. 오늘은 운수가 좋지 않은 날이군요',
      link: 'https://zzang.com/jabti',
    },
    {
      header: '서울대학교 가을축제 관악의 밤',
      body: '다음 기회에. 오늘은 운수가 좋지 않은 날이군요',
      link: 'https://snufestival.com/jabti',
    },
    {
      header: '야비티아이',
      body: '다음 기회에. 오늘은 운수가 좋지 않은 날이군요',
      link: 'https://snufestival.com/jabti',
    },
    {
      header: '야비티아이',
      body: '다음 기회에. 오늘은 운수가 좋지 않은 날이군요',
      link: 'https://snufestival.com/jabti',
    },
    {
      header: '야비티아이',
      body: '다음 기회에. 오늘은 운수가 좋지 않은 날이군요',
      link: 'https://snufestival.com/jabti',
    },

  ];
  return (
    <S.StyledSearch>
      <S.Text top={width * 0.6}>
        <p>F</p>
        <p>o</p>
        <p>r</p>
        <p>t</p>
        <p>u</p>
        <p>n</p>
        <p>e</p>
      </S.Text>
      <S.SearchContainer>
        <S.LogoContainer>
          <S.SearchLogo src={SearchLogo} />
        </S.LogoContainer>
        <S.InputBox value={value} onChange={onChange} />
      </S.SearchContainer>
      <S.MainContainer>
        <S.Result>검색결과 약 4,810개 (0.39초)</S.Result>
        {DATA.map((d, i) => (
          <S.Component key={i}>
            <S.Link>{d.link}</S.Link>
            <S.Header>{d.header}</S.Header>
            <S.Body>{d.body}</S.Body>
          </S.Component>
        ))}
      </S.MainContainer>
    </S.StyledSearch>
  );
}
export default withTheme(Search);

Search.propTypes = {

};
