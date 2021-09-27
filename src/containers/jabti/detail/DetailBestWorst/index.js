import React, { useCallback } from 'react';
import { colorCodes } from '@P/jabti/JabtiDetail';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import * as S from './styles';

function DetailBestWorst({ best, worst }) {
  const history = useHistory();

  const sendAnotherResult = useCallback((code) => {
    history.push(`/jabti/${code}`);
  }, [history]);

  const converter = (code) => {
    let result = '';
    let resultIndex = 0;

    if (code[0] === 's') {
      result += '순';
    } else {
      result += '뼈';
      resultIndex += 8;
    }

    if (code[1] === 'y') {
      result += '염';
    } else {
      result += '우';
      resultIndex += 4;
    }

    if (code[2] === 'b') {
      result += '빡';
    } else {
      result += '가';
      resultIndex += 2;
    }

    if (code[3] === 'g') {
      result += '걸';
    } else {
      result += '택';
      resultIndex += 1;
    }

    return { result, index: resultIndex };
  };
  return (
    <S.DetailBestWorst>
      <S.RecommendRow>
        <S.RecommendBox onClick={() => sendAnotherResult(best)}>
          {/* <S.RecommendBackground /> */}
          <S.RecommendIndicator>최상의 조합</S.RecommendIndicator>
          <S.RecommendResult color={colorCodes[converter(best).index]}>{converter(best).result}</S.RecommendResult>
        </S.RecommendBox>
        <S.RecommendBox onClick={() => sendAnotherResult(worst)}>
          {/* <S.RecommendBackground /> */}
          <S.RecommendIndicator>최악의 조합</S.RecommendIndicator>
          <S.RecommendResult color={colorCodes[converter(worst).index]}>{converter(worst).result}</S.RecommendResult>
        </S.RecommendBox>
      </S.RecommendRow>
    </S.DetailBestWorst>
  );
}
export default DetailBestWorst;

DetailBestWorst.propTypes = {

};
