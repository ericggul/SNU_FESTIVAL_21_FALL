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
import { schoolPride } from '@C/performance/common/confettiFire';
import withUser from '@U/hoc/withUser';
import { sumOfArray } from '@U/functions/array';
import SignInGuide from '@F/modal/content/SignInGuide';
import { useUser } from '@U/hooks/useAuth';
import useMiniGame from '@U/hooks/useMiniGame';

import { useSelector } from 'react-redux';

// Mission
import {
  Light1, Light2, Light3, Light4, Light5, Light6, Light7, LightLetter, LightSimple, LightSimple2,
} from '@F/Light';
import useMission from '@U/hooks/useMission';
import LightMissionGuide from '@F/modal/content/LightMissionGuide';

import FullScreen from '@/foundations/full-screen/HandwritingFullScreen';
import * as S from './styles';

const getRandom = (a, b) => Math.random() * (b - a) + a;
function Handwriting({ theme, user, isAuthorized }) {
  /// //////////////////////////
  const mission = useMission();
  const [lightVisible, setLightVisible] = useState(false);
  const [sustainLightTemp, setSustainLightTemp] = useState(false);
  const PAGE_LIGHT_INDICATOR = 9;

  const onModalChange = useCallback(() => {
    setSustainLightTemp(false);
  }, []);
  const { modalComponent: lightModalComponent, setIsModalOpen: setIsLightModalOpen } = useModal(LightMissionGuide, false, true,
    {
      pageIndicator: PAGE_LIGHT_INDICATOR,
    }, onModalChange);
  useEffect(() => {
    // Doing Mission and not founded
    if (isAuthorized && mission.light) {
      if (!mission.light[PAGE_LIGHT_INDICATOR]) {
        setLightVisible(true);
      } else if (sustainLightTemp) {
        setLightVisible(true);
      } else {
        setLightVisible(false);
      }
    } else {
      setLightVisible(true);
    }
  }, [isAuthorized, mission, setIsLightModalOpen, sustainLightTemp]);

  const lightMissionClick = useCallback(() => {
    setSustainLightTemp(true);
    setIsLightModalOpen(true);
  }, [isAuthorized, mission, lightVisible]);

  /// //////////////////////////

  const miniGame = useMiniGame();

  const [sectorNum, setSectorNum] = useState(-1);
  const handleClick = useCallback((i) => {
    setSectorNum(i);
  }, [isAuthorized]);

  const handwritingArray = useSelector(state => state.miniGame.handwriting);
  console.log('hand', handwritingArray);
  const solvedArrayMultipleSectors = useCallback((handwritings) => {
    const solvedNumberArray = [];
    const solvedRateArray = [];
    if (handwritings) {
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
    }
    return [solvedNumberArray, solvedRateArray];
  }, []);
  let solvedNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let solvedRates = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  if (handwritingArray) {
    [solvedNumbers, solvedRates] = solvedArrayMultipleSectors(handwritingArray);
  }
  useEffect(() => {
    if (handwritingArray && solvedNumbers && solvedRates) {
      [solvedNumbers, solvedRates] = solvedArrayMultipleSectors(handwritingArray);
    }
  }, [sectorNum]);

  useEffect(() => {
    if (sumOfArray(solvedNumbers) === 82) {
      console.log('spread!');
      schoolPride();
    }
  }, [solvedNumbers]);

  console.log('solvedNumbers', solvedNumbers, solvedRates);
  return (
    <S.StyledHandwriting>
      <HeaderContent backgroundColor="transparent">미니게임</HeaderContent>
      <S.Container>
        <S.Description>
          <S.EmphText>이 필기, 어느 과 친구가 쓴 걸까?</S.EmphText>
          <br />
          <br />
          학생들의 실제 필기 사진을 보며
          여기가 어느 과인지
          추측해 보세요.
          <br />
          아니, 다들 이렇게 열심히 공부했을 줄 몰랐네요...
          <br />
          <br />
          <S.EmphText>
            이벤트: 10개 단과대, 82개 과, 30개 이상 맞추기!
            {' '}
            <br />
            (현재
            {' '}
            {`${sumOfArray(solvedNumbers)}/82`}
            )
            {' '}
            {sumOfArray(solvedNumbers) >= 30 && '미션 완료!'}
          </S.EmphText>
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
        <QuestionSector sectorNum={sectorNum} goBackToMain={() => setSectorNum(-1)} />
      </FullScreen>
      <Light7 top={theme.windowHeight * 0.8} left={theme.windowWidth * 0.3} handleClick={lightMissionClick} />
      {lightModalComponent}
    </S.StyledHandwriting>
  );
}

Handwriting.propTypes = {

};

export default withTheme(withUser(Handwriting));
