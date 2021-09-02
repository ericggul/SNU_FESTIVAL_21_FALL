import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router';
import ClipboardJS from 'clipboard';
import { toast } from 'react-toastify';

import Loading from '@/containers/jabti/Loading';
import Stars2 from '@F/stars/Stars2';

import KakaoIcon from '@I/icon/kakao.svg';
import StartAgain from '@I/icon/start-again.svg';
import { EventBehavior } from '@U/initializer/googleAnalytics';
import { jabtiCollectionRef } from '@U/initializer/firebase';
import countapi from 'countapi-js';
import Background from '@C/tarot/Background';
import * as S from './styles';

function JabtiDetail({
  resultImage, resultTextImage, result, theme, spot, colorCode, colorName, index,
}) {
  const location = useLocation();
  const fromQuestion = location.state ? location.state.fromQuestions : false;

  const [isLoading, setIsLoading] = useState(false);
  const [viewCount, setViewCount] = useState([]);
  const [updatedViewCount, setUpdatedViewCount] = useState([]);
  const [currentStars, setCurrentStars] = useState(0);
  const [origin, setOrigin] = useState(false);
  const getRandom = (a, b) => Math.random() * (b - a) + a;


  const history = useHistory();
  const goToJabti = useCallback(() => {
    history.push('/jabti');
  }, [history]);

  // console.log(mission);

  useEffect(() => {
    setIsLoading(true);
    jabtiCollectionRef.doc('result-array').get().then((doc) => (
      (Object.entries(doc.data()).forEach(([key, likes]) => {
        setViewCount(likes);
      }))
    ));
    if (fromQuestion) {
      setOrigin(true);
      console.log('from Question confirmed');
    }
    if (location.state && location.state.fromQuestions) {
      const state = { ...history.location.state };
      delete state.fromQuestions;
      history.replace({
        ...history.location, state,
      });
    }
    new ClipboardJS('.clipboard');
    setTimeout(() => setIsLoading(false), 5000);
  }, [index, fromQuestion, location, history]);

  useEffect(() => {
    if (viewCount.length > 10 && origin) {
      const updated = viewCount;
      updated[index] += 1;
      setUpdatedViewCount(updated);
    }
    if (viewCount.length > 10) {
      setCurrentStars(viewCount[index]);
    }
  }, [viewCount, origin]);

  useEffect(() => {
    if (updatedViewCount.length > 10) {
      jabtiCollectionRef.doc('result-array').set({
        viewCount: updatedViewCount,
      });
    }
  }, [updatedViewCount]);

  console.log(currentStars);


  const shareThroughKakao = useCallback(() => {
    window.Kakao.Link.sendCustom({
      templateId: 53192,
      templateArgs: {
        result,
        // imageUrl: `https://snufestival.com/images/achieve-card.png`,
        imageUrl: `https://snufestival.com/images/${result}-card.png`,
      },
    });
    // EventBehavior('Tarot', 'Click Tarot Kakao Share', `share ${result} by kakao`);
  }, [result]);

  
  return (
    <>
      <S.Background>
        {
          currentStars>0 && <Stars2 width="100%" height="100%" color={colorCode} number={400}/>
        }
      </S.Background>
      <S.StyledTarotDetail>
        {!isLoading && (
          <S.Body>
            <S.HeaderText>
              당신의 {String.fromCharCode(0x591C)}비티아이 유형은
            </S.HeaderText>
            <S.ImageContainer>
              <S.ResultImage over4={index >=4 }src={resultImage} />
              <S.ResultImageText over4={index >=4 }src={resultTextImage} />
            </S.ImageContainer>
            <S.ExplainText>
              여기는 유형별 설명란 계절이 지나 이 공기가 식어가도 너와 나의 맘속은 언제나 여름 빙하기가 다시 돌아와도 걱정 마 늘 함께야 여름이 쏟아진다아아아아 파핑 파핑 여름에 쏙 빠진 나
            </S.ExplainText>
            <S.RecommendSection>
              <S.RecommendBox expandHeight={colorName.length > 15}>
                <S.RecommendBackground></S.RecommendBackground>
                <S.RecommendIndicator>나의 학교 스팟</S.RecommendIndicator>
                <S.RecommendResult color={colorCode}>{spot}</S.RecommendResult>
              </S.RecommendBox>
              <S.RecommendBox expandHeight={colorName.length > 15}>
              <S.RecommendBackground></S.RecommendBackground>
                <S.RecommendIndicator>나의 별 색깔</S.RecommendIndicator>
                <S.RecommendResult color={colorCode}>{colorName}</S.RecommendResult>
              </S.RecommendBox>
            </S.RecommendSection>
            <S.LinkSection>
              <S.Links>
              <p>결과 공유하기</p>
                <img src={KakaoIcon} alt="카카오 공유" onClick={shareThroughKakao} />
              </S.Links>
              <S.Links>
              <p>테스트 다시하기</p>
                <img src={StartAgain} alt="타로 다시보기" onClick={goToJabti} />
              </S.Links>
            </S.LinkSection>
          </S.Body>
        )}
        {isLoading && <S.LoadingWrapper><Loading index={index} colorCode={colorCode}/></S.LoadingWrapper>}
      </S.StyledTarotDetail>
      
    </>
  );
}
export default withTheme(JabtiDetail);

JabtiDetail.propTypes = {
  resultImage: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,

  index: PropTypes.number.isRequired,
};
