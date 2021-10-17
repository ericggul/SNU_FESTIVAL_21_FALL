import React, {
  useMemo, useEffect, useState, useCallback,
} from 'react';
import { Link } from 'react-router-dom';
import { withTheme } from 'styled-components';
import SearchLogo from '@I/fortune/Search.svg';
import useInput from '@U/hooks/useInput';
import { sha256 } from 'js-sha256';
import { ANSWERS } from '@C/fortune/Search/data';
import PropTypes from 'prop-types';
import * as S from './styles';

function Search({ number, theme, backToMain }) {
  const width = useMemo(() => Math.min(theme.windowWidth, 700), [theme]);
  const { value, onChange, setValue } = useInput(number);
  const [lucky, setLucky] = useState(false);
  useEffect(() => {
    if (ANSWERS.includes(sha256(number))) {
      setLucky(true);
    }
    setValue(number);
  }, [number]);

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
      body: '기분도 나쁜데 야비티아이나 한번 더하고 가지 그래? 난 순염빡택 나왔어!',
      link: 'https://snufestival.com/jabti',
    },
    {
      header: '지금은 \'존버\'할 때입니다.',
      body: '포춘쿠키는 총 980개! 아직.. 몇 발 남았다...',
      link: 'https://zzang.com/jabti',
    },
    {
      header: '그러길래',
      body: `그러길래 누가 ${number}번 뽑으래? 메롱 :->`,
      link: 'https://snufestival.com/404',
    },
    {
      header: '서울대학교 가을축제 관악의 밤',
      body: '10월 26일 - 10월 29일, 밝게 빛날 관악의 밤을 상상해보세요. 풍선마당과 웹사이트를 통해 열리는 관악의 밤, 기대해주세요!',
      link: 'https://ajik.gaebal.jung',
    },
    {
      header: '서울대학교 겨울축제 관악의 눈',
      body: '포스트-코로나 시대의 포스트-페스티벌. 아무런 걱정 없이 눈오는 날을 반겼던 어른이들을 추억하며.',
      link: 'https://snufestival.com/gwanak-eyes',
    },
    {
      header: '본축제가 언제냐고요?',
      body: '2021년 서울대학교 가을축제 <관악의 밤>은 10월 26일부터 10월 29일까지 개최됩니다.',
      link: 'https://www.instagram.com/snufestival/',
    },
    {
      header: '축하사 인스타그램이 어디있냐고요?',
      body: '지금 이 링크를 바로 클릭하시면 서울대학교 축제하는사람들 인스타그램으로 연결됩니다.',
      link: 'https://www.instagram.com/snufestival/',
    },
    {
      header: '404 Page Not Found.',
      body: '죄송합니다. 방문하시려는 페이지의 주소가 잘못 입력된것 같습니다. 입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.',
      link: 'https://snufestival.com/404',
    },
    {
      header: '404 Page Not Found.',
      body: '404. That\'s an error. The requested URL was not found on this server.',
      link: 'https://snufestival.com/404',
    },
    {
      header: '꽝',
      body: '꽝이라고요. 그만 내려보세요.',
      link: 'https://kwwang.co.kr',
    },
  ];

  const LUCKY_DATA = [
    {
      header: 'I\'m Feeling Lucky!',
      body: '축하합니다! 포춘쿠키 이벤트에 당첨되셨습니다.',
      link: 'https://www.instagram.com/snufestival/',
    },
    {
      header: '포춘쿠키 번호 종이를 사진으로 남겨주세요.',
      body: '찍은 사진과 함께 본 화면을 캠쳐해서 축제하는사람들 인스타그램 계쩡으로 DM을 보내주시면 이벤트 응모가 완료됩니다.',
      link: 'https://www.instagram.com/snufestival/',
    },
    {
      header: '당첨을 축하드립니다!',
      body: '포춘쿠키 이벤트 당첨을 축하드립니다!',
      link: 'https://www.instagram.com/snufestival/',
    },
    {
      header: '축하사 인스타그램으로 사진을 보내주세요.',
      body: '찍은 사진과 함께 본 화면을 캠쳐해서 축제하는사람들 인스타그램 계쩡으로 DM을 보내주시면 이벤트 응모가 완료됩니다.',
      link: 'https://www.instagram.com/snufestival/',
    },
    {
      header: '꼭 포춘쿠키 번호도 사진으로 찍어주세요!',
      body: '사진으로 남겨진 포춘쿠키 번호를 인스타그램 DM으로 함께 제출해주셔야지 성공적으로 당첨됩니다.',
      link: 'https://www.instagram.com/snufestival/',
    },
    {
      header: '혹시 당신.. 인스타그램이 없으시다구여?',
      body: '괜찮습니다! 아래 링크를 통해 카카오톡 플러스친구로 포춘쿠키 번호가 찍혀진 사진을 보내주세요.',
      link: 'https://pf.kakao.com/_xeELIxd',
    },
    {
      header: '축하사 인스타그램이 어디있냐고요?',
      body: '지금 이 링크를 바로 클릭하시면 서울대학교 축제하는사람들 인스타그램으로 연결됩니다.',
      link: 'https://www.instagram.com/snufestival/',
    },
    {
      header: '본축제가 언제냐고요?',
      body: '2021년 서울대학교 가을축제 <관악의 밤>은 10월 26일부터 10월 29일까지 개최됩니다.',
      link: 'https://www.instagram.com/snufestival/',
    },

  ];

  const SEND_LINKS = ['https://www.instagram.com/snufestival/', 'https://pf.kakao.com/_xeELIxd'];

  const linkConverter = useCallback((display) => {
    if (display.includes('jabti') || display.includes('instagram') || display.includes('kakao')) {
      return display;
    }
    const today = new Date();
    const date = today.getDate();
    if (date > 25) {
      return 'https://snufestival.com';
    }
    return Math.random() < 0.5 ? SEND_LINKS[0] : SEND_LINKS[1];
  }, []);

  const [dataSet, setDataSet] = useState(null);

  useEffect(() => {
    if (lucky) {
      setDataSet(LUCKY_DATA);
    } else {
      setDataSet(DATA);
    }
  }, [lucky]);

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
        {dataSet && dataSet.map((d, i) => (
          <a key={i} href={linkConverter(d.link)} style={{ textDecoration: 'none' }}>
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
