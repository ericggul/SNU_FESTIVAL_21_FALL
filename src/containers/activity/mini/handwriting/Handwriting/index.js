import React, {
  useMemo, useState, useCallback, useEffect,
} from 'react';
import { HeaderContent } from '@F/layout/Header';
import { withTheme } from 'styled-components';
import useModal from '@U/hooks/useModal';
import Map from '@C/activity/mini/handwriting/Map';
import QuestionSector from '@C/activity/mini/handwriting/question/QuestionSector';
import PropTypes from 'prop-types';
import { COLLEGES, CONVERTED_MAJORS } from '@C/activity/mini/handwriting/data.js';
import withUser from '@U/hoc/withUser';
import SignInGuide from '@F/modal/content/SignInGuide';
import { useUser } from '@U/hooks/useAuth';
import useMiniGame from '@U/hooks/useMiniGame';

import { useSelector } from 'react-redux';

import FullScreen from '@/foundations/full-screen/HandwritingFullScreen';
import * as S from './styles';

function Handwriting({ theme }) {
  const { user, isAuthorized } = useUser();
  const miniGame = useMiniGame();

  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);

  const [sectorNum, setSectorNum] = useState(-1);
  const handleClick = useCallback((i) => {
    setSectorNum(i);
  }, [isAuthorized]);

  const handwritingArray = useSelector(state => state.miniGame.handwriting);
  console.log('hand', handwritingArray);
  const solvedArrayMultipleSectors = useCallback((handwritings) => {
    console.log(handwritings);
    const solvedNumberArray = [];
    const solvedRateArray = [];
    for (let i = 0; i < COLLEGES.length; i += 1) {
      const inputString = handwritings[i].toString(2);
      const array = [];
      const solvedIndexesStorage = [];
      const unSolvedIndexesStorage = [];
      let solvedNumber;
      let solvedRate;
      for (let idx = 0; idx < CONVERTED_MAJORS[i].length; idx += 1) {
        if (idx < inputString.length) {
          array[idx] = parseInt(inputString[inputString.length - 1 - idx], 10);
          if (array[idx] === 1) {
            solvedIndexesStorage.push(idx);
          } else {
            unSolvedIndexesStorage.push(idx);
          }
        } else {
          array[idx] = 0;
          unSolvedIndexesStorage.push(idx);
        }
      }
      solvedNumber = solvedIndexesStorage.length;
      solvedRate = solvedNumber / CONVERTED_MAJORS[i].length;
      solvedNumberArray.push(solvedNumber);
      solvedRateArray.push(solvedRate);
    }

    return [solvedNumberArray, solvedRateArray];
  }, []);
  let [solvedNumbers, solvedRates] = solvedArrayMultipleSectors(handwritingArray);
  useEffect(() => {
    [solvedNumbers, solvedRates] = solvedArrayMultipleSectors(handwritingArray);
  }, [sectorNum]);

  console.log('solvedNumbers', solvedNumbers, solvedRates);
  return (
    <S.StyledHandwriting>
      <HeaderContent backgroundColor={theme.palette.HANDWRITING_HEADER}>
        서울대 필기 맞추기
      </HeaderContent>
      <S.Container>
        <S.Description>
          단과대 별로 필기를 찾아보세요!
        </S.Description>
        <Map
          handleClick={handleClick}
          solvedRates={solvedRates}
        />
      </S.Container>
      <FullScreen
        isFullScreen={sectorNum !== -1}
        onCloseFullScreen={() => setSectorNum(-1)}
        backgroundColor={theme.palette.HANDWRITING_PURPLE}
        headerName={COLLEGES[sectorNum]}
      >
        <QuestionSector sectorNum={sectorNum} />
      </FullScreen>
      {signInModalComponent}
    </S.StyledHandwriting>
  );
}

Handwriting.propTypes = {

};

export default withTheme(withUser(Handwriting));
