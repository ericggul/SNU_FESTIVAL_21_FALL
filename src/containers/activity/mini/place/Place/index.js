import React, {
  useCallback, useState, useEffect, useMemo,
} from 'react';
import { useUser } from '@U/hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import useMiniGame from '@U/hooks/useMiniGame';
import withUser from '@U/hoc/withUser';
import { HeaderContent } from '@F/layout/Header';
import { withTheme } from 'styled-components';
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
        <Map solvedArray={places} handleClick={handleClick} />
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
