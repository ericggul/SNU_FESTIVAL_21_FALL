import React, {
  useCallback, useState, useEffect, useMemo,
} from 'react';
import { useUser } from '@U/hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import useMiniGame from '@U/hooks/useMiniGame';
import withUser from '@U/hoc/withUser';
import { HeaderContent } from '@F/layout/Header';
import { withTheme } from 'styled-components';
import { sumOfArray } from '@U/functions/array';
import Map from '@C/activity/mini/place/Map';
import FullScreen from '@F/full-screen/PlaceFullScreen';
import QuestionSector from '@C/activity/mini/place/question/QuestionSector';
import PropTypes from 'prop-types';
import * as S from './styles';

function Place({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme]);
  const [sectorNum, setSectorNum] = useState(-1);

  let places = useSelector(state => state.miniGame.place);

  const handleClick = useCallback((i) => {
    setSectorNum(i);
  }, []);
  console.log(sectorNum);
  return (
    <S.StyledPlace>
      <HeaderContent backgroundColor={theme.palette.PLACE_HEADER}>
        서울대 장소 찾기
      </HeaderContent>
      <S.Container isMobile={isMobile}>
        <S.Text>
          <S.EmphText>서울대 곳곳의 모습, 너 조금 낯설다?</S.EmphText>
          <br />
          <br />
          비대면 수업으로 인해 오랫동안 보지 못한 학교의 모습...
          {' '}
          학교 이곳저곳도 살펴볼 수 있는,
          {' '}
          <S.EmphText>비대면 소풍</S.EmphText>
          의 기회!
          {' '}
          캠퍼스 사진 보며 헌내기들한테는 추억이,
          {' '}
          새내기들한테는 설렘이 피어오를거에요.
        </S.Text>
        <Map solvedArray={places} handleClick={handleClick} />
        <S.TextBottom>
          이벤트:
          {' '}
          <S.EmphText>9개</S.EmphText>
          {' '}
          장소중
          {' '}
          <S.EmphText>6곳</S.EmphText>
          {' '}
          이상을 맞춰보세요!
          {' '}
          <S.EmphText>
            {sumOfArray(places) >= 6 && '미션 완료!'}
          </S.EmphText>
        </S.TextBottom>
      </S.Container>
      <FullScreen
        isFullScreen={sectorNum !== -1}
        onCloseFullScreen={() => setSectorNum(-1)}
        headerName="어디일까요?"
      >
        <QuestionSector sectorNum={sectorNum} setSectorNum={setSectorNum} />
      </FullScreen>
    </S.StyledPlace>
  );
}
export default withTheme(withUser(Place));

Place.propTypes = {

};
