import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import { useHistory } from 'react-router';
import ClipboardJS from 'clipboard';
import { toast } from 'react-toastify';
import KakaoIcon from '@I/icon/kakao.svg';
import LinkIcon from '@I/icon/link.svg';
import Loading from '@C/tarot/Loading';
import { EventBehavior } from '@U/initializer/googleAnalytics';
import Background from '@C/tarot/Background';
import * as S from './styles';

function TarotDetail({
  resultImage, result, theme, links,
}) {
  const isMobile = useMemo(() => theme.windowWidth < 1170, [theme.windowWidth]);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const goToTarot = useCallback(() => {
    history.push('/tarot');
  }, [history]);
  const goToLink = useCallback(() => {
    if (links?.url === 'instagram') {
      window.open('https://www.instagram.com/snufestival', '_blank');
    } else {
      history.push(links?.url);
    }
  }, [history, links?.url]);

  useEffect(() => {
    setIsLoading(true);
    new ClipboardJS('.clipboard');
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  const shareThroughUrl = useCallback(() => {
    toast('클립보드에 복사되었습니다');
    EventBehavior('Tarot', 'Click Tarot Link Share', `share ${result} by clipboard`);
  }, [result]);

  const shareThroughKakao = useCallback(() => {
    window.Kakao.Link.sendCustom({
      templateId: 60678,
      templateArgs: {
        result,
        imageUrl: `https://snufestival.com/images/${result}-card.png`,
      },
    });
    EventBehavior('Tarot', 'Click Tarot Kakao Share', `share ${result} by kakao`);
  }, [result]);

  return (
    <>
      <Background isMobile={isMobile} />
      <S.StyledTarotDetail>
        <HeaderContent backgroundColor="transparent" color="white">오늘의 타로</HeaderContent>
        {!isLoading && (
          <S.Body>
            <img src={resultImage} alt="" />
            <S.Button onClick={goToLink}>
              {links?.name}
              {' '}
              연결하기
            </S.Button>
            <p>결과 공유하기</p>
            <S.Links>
              <img src={LinkIcon} alt="링크 공유" className="clipboard" data-clipboard-text={`https://snufestival.com/tarot/${result}`} onClick={shareThroughUrl} />
              <img src={KakaoIcon} alt="카카오 공유" onClick={shareThroughKakao} />
            </S.Links>
            <S.Button onClick={goToTarot}>타로 다시보기</S.Button>
          </S.Body>
        )}
        {isLoading && <S.LoadingWrapper><Loading /></S.LoadingWrapper>}
      </S.StyledTarotDetail>
    </>
  );
}
export default withTheme(TarotDetail);

TarotDetail.propTypes = {
  resultImage: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
  links: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
