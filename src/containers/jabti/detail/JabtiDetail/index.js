import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router';
import ClipboardJS from 'clipboard';

import DetailBackground from '@C/jabti/detail/DetailBackground';
import DetailImage from '@C/jabti/detail/DetailImage';
import DetailBestWorst from '@C/jabti/detail/DetailBestWorst';
import DetailRecommend from '@C/jabti/detail/DetailRecommend';
import DetailLink from '@C/jabti/detail/DetailLink';
import DetailFestivalInfo from '@C/jabti/detail/DetailFestivalInfo';

import Loading from '@/containers/jabti/Loading';

import { EventBehavior } from '@U/initializer/googleAnalytics';
import { jabtiCollectionRef } from '@U/initializer/firebase';

import * as S from './styles';

function JabtiDetail({
  resultImage, resultTextImage, result, bestResult, worstResult, theme, description, spot, colorCode, colorName, index,
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
    setTimeout(() => setIsLoading(false), 5000);
  }, [index, fromQuestion, location, history]);

  useEffect(() => {
    if (viewCount.length > 10 && origin) {
      const updated = viewCount;
      updated[index] += 1;
      setUpdatedViewCount(updated);
    }
    if (viewCount.length > 10 && viewCount[index] > 0) {
      let whole = 0;
      for (let i = 0; i < viewCount.length; i++) {
        whole += viewCount[i];
      }
      setCurrentStars(Math.floor(viewCount[index] / whole * (theme.windowHeight * theme.windowWidth) / 40));
    }
  }, [viewCount, origin]);

  useEffect(() => {
    if (updatedViewCount.length > 10) {
      jabtiCollectionRef.doc('result-array').set({
        viewCount: updatedViewCount,
      });
    }
  }, [updatedViewCount]);

  return (
    <>
      <DetailBackground currentStars={currentStars} colorCode={colorCode} />
      <S.Detail>
        {!isLoading && (
          <S.Body>
            <S.HeaderText>
              당신의
              {' '}
              {String.fromCharCode(0x591C)}
              비티아이 유형은
            </S.HeaderText>
            <DetailImage resultImage={resultImage} resultTextImage={resultTextImage} index={index} />
            <DetailBestWorst best={bestResult} worst={worstResult} />
            <S.ExplainText>
              {description.split('//').map((e, i) => <div key={i}>{e}</div>)}
            </S.ExplainText>
            <DetailRecommend colorCode={colorCode} colorName={colorName} spot={spot} />
            <DetailLink result={result} />
            <DetailFestivalInfo />
          </S.Body>
        )}
        {isLoading && <S.LoadingWrapper><Loading index={index} colorCode={colorCode} /></S.LoadingWrapper>}
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
