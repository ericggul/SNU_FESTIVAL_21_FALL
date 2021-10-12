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
      {/* <HeaderContent backgroundColor={theme.palette.HANDWRITING_HEADER}>
        서울대 필기 맞추기
      </HeaderContent> */}
      <S.Container>
        <S.Description>
          <S.EmphText>이 필기, 어느 과 친구가 쓴 걸까?</S.EmphText>
          <br />
          <br />
          숫자로, 수식으로, 언어로, 그림으로!
          <br />
          학생들의 실제 필기 사진을 보며
          여기가 어느 과인지
          추측해 보세요.
          <br />
          생각보다 뻔하지 않아요!
          {' '}
          글자 하나, 수식 하나 꼼꼼히 살펴보시는 것을 추천합니다.
          <br />
          아니, 다들 이렇게 열심히 공부했을 줄 몰랐네요...
          <br />
          <br />
          <br />
          <S.EmphText>10개 단과대, 82개 과. 30개 이상 맞춰보세요!</S.EmphText>
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
