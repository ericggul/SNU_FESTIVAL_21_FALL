import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router';
import ClipboardJS from 'clipboard';
import { toast } from 'react-toastify';

import DetailBackground from '@C/jabti/detail/DetailBackground';
import DetailImage from '@C/jabti/detail/DetailImage';
import DetailRecommend from '@C/jabti/detail/DetailRecommend';
import DetailLink from '@C/jabti/detail/DetailLink';

import Loading from '@/containers/jabti/Loading';

import { EventBehavior } from '@U/initializer/googleAnalytics';
import { jabtiCollectionRef } from '@U/initializer/firebase';
import countapi from 'countapi-js';

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



  useEffect(() => {
    console.log(fromQuestion);
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
    setTimeout(() => setIsLoading(false), 4000);
  }, [index, fromQuestion, location, history]);

  useEffect(() => {
    if (viewCount.length > 10 && origin) {
      const updated = viewCount;
      updated[index] += 1;
      setUpdatedViewCount(updated);
    }
    if (viewCount.length > 10 && viewCount[index] > 0) {
      var whole = 0;
      for(let i=0; i<viewCount.length; i++){
        whole += viewCount[i];
      }
      setCurrentStars(Math.floor(viewCount[index]/whole * (theme.windowHeight * theme.windowWidth)/10));
    }
  }, [viewCount, origin]);

  useEffect(() => {
    if (updatedViewCount.length > 10) {
      jabtiCollectionRef.doc('result-array').set({
        viewCount: updatedViewCount,
      });
    }
  }, [updatedViewCount]);


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
      <DetailBackground currentStars={currentStars} colorCode={colorCode} />
      <S.Detail>
        {!isLoading && (
          <S.Body>
            <S.HeaderText>
              당신의 {String.fromCharCode(0x591C)}비티아이 유형은
            </S.HeaderText>
            <DetailImage resultImage={resultImage} resultTextImage={resultTextImage} index={index} /> 
            <S.ExplainText>
              여기는 유형별 설명란 계절이 지나 이 공기가 식어가도 너와 나의 맘속은 언제나 여름 빙하기가 다시 돌아와도 걱정 마 늘 함께야 여름이 쏟아진다아아아아 파핑 파핑 여름에 쏙 빠진 나
            </S.ExplainText>
            <DetailRecommend colorCode={colorCode} colorName={colorName} spot={spot} />
            <DetailLink result={result} />
          </S.Body>
        )}
        {isLoading && <S.LoadingWrapper><Loading index={index} colorCode={colorCode}/></S.LoadingWrapper>}
      </S.Detail>
      
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
