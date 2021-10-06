import React, {
  useCallback, useState, useEffect, useMemo,
} from 'react';
import { HeaderContent } from '@F/layout/Header';
import { withTheme } from 'styled-components';
import { CONVERTED_PLACES } from '@C/activity/mini/place/data.js';
import Map from '@C/activity/mini/place/Map';
import FullScreen from '@F/full-screen/PlaceFullScreen';
import QuestionSector from '@C/activity/mini/place/question/QuestionSector';
import PropTypes from 'prop-types';
import * as S from './styles';

function Place({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme]);
  const [sectorNum, setSectorNum] = useState(-1);
  const [solvedArray, setSolvedArray] = useState([0, 1, 0, 0, 0, 0, 0, 0, 0]);

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
        <Map solvedArray={solvedArray} handleClick={handleClick} />
      </S.Container>
      <FullScreen
        isFullScreen={sectorNum !== -1}
        onCloseFullScreen={() => setSectorNum(-1)}
        headerName="어디일까요?"
      >
        <QuestionSector sectorNum={sectorNum} />
      </FullScreen>
    </S.StyledPlace>
  );
}
export default withTheme(Place);

Place.propTypes = {

};
