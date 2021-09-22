import React, {useCallback} from 'react';
import { useHistory } from 'react-router';
import KakaoIcon from '@I/icon/kakao.svg';
import StartAgain from '@I/icon/start-again.svg';
import PropTypes from 'prop-types';
import * as S from './styles';

function DetailLink({result}) {

  const history = useHistory();
  const shareThroughKakao = useCallback(() => {
    window.Kakao.Link.sendCustom({
      templateId: 60678,
      templateArgs: {
        result,
        // imageUrl: `https://snufestival.com/images/achieve-card.png`,
        imageUrl: `https://snufestival.com/images/${result}.png`,
      },
    });
    // EventBehavior('Tarot', 'Click Tarot Kakao Share', `share ${result} by kakao`);
  }, [result]);

  const goToJabti = useCallback(() => {
    history.push('/jabti');
  }, [history]);

  return (
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
  );
}
export default DetailLink;

DetailLink.propTypes = {

};
