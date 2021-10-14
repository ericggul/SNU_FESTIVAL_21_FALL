import React, { useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withTheme } from 'styled-components';
import SearchLogo from '@I/fortune/Search.svg';
import useInput from '@U/hooks/useInput';
import PropTypes from 'prop-types';
import * as S from './styles';

function Search({ number, theme, backToMain }) {
  const width = useMemo(() => Math.min(theme.windowWidth, 700), [theme]);
  const { value, onChange, setValue } = useInput(number);
  useEffect(() => {
    setValue(number);
  }, []);

  const DATA = [
    {
      header: '꽝',
      body: '무겁고 단단한 물체가 바닥에 떨어지거나 부딪치는 소리, 또는 폭발할때 들리는 소리를 표현한 의성어로, 거센 말로 \'쾅\'이 있다.',
      link: 'https://kwwang.co.kr',
    },
    {
      header: `${number}번 탈락`,
      body: '당신의 행운은 출중하지만 이번 기회는 탈락! 대신... 기말고사를 잘보게 될지도?!',
      link: 'https://tallak.co.kr',
    },
    {
      header: '어림도 없지',
      body: '기분도 나쁜데 야비티아이나 한번 더하고 가지 그래? 난 순염빡택 나왔어! 설마 뼈는 아니겠지??',
      link: 'https://snufestival.com/jabti',
    },
    {
      header: '지금은 \'존버\'할 때입니다.',
      body: '포춘쿠키는 총 980개! 아직.. 몇 발 남았다...',
      link: 'https://zzang.com/jabti',
    },
    {
      header: '서울대학교 가을축제 관악의 밤',
      body: '10월 26일 - 10월 29일, 밝게 빛날 관악의 밤을 상상해보세요.',
      link: 'https://ajik.gaebal.jung',
    },
    {
      header: '서울대학교 겨울축제 관악의 눈',
      body: '포스트-코로나 시대의 포스트-페스티벌, 관악의 눈을 통해 ',
      link: 'https://snufestival.com/gwanak-eyes',
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
      <S.Text top={width * 0.6} onClick={backToMain}>
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
          <a key={i} href={d.link} style={{ textDecoration: 'none' }}>
            <S.Component key={i}>
              <S.Link>{d.link}</S.Link>
              <S.Header>{d.header}</S.Header>
              <S.Body>{d.body}</S.Body>
            </S.Component>
          </a>
        ))}
      </S.MainContainer>
    </S.StyledSearch>
  );
}
export default withTheme(Search);

Search.propTypes = {

};
