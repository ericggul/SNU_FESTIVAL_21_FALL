import React, { useCallback, useMemo, useRef } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import LoadingDesktop from '@I/layout/loading-desktop.png';
import LoadingMobile from '@I/layout/loading-mobile.png';
import { withTheme } from 'styled-components';
import LightFinishedBack from '@I/home/LightFinishedBack2.png';
import LightFinishedText from '@I/home/LightFinishedText.png';
import Character from '@C/clothing/result/Character';

import { toast } from 'react-toastify';
import html2canvas from 'html2canvas';

import withUser from '@U/hoc/withUser';
import { useUser } from '@U/hooks/useAuth';

import * as S from './styles';

function LightMissionComplete({
  message, theme, user, isAuthorized,
}) {
  const contentRef = useRef();
  const history = useHistory();
  const isMobile = useMemo(() => theme.windowWidth < 500, [theme]);

  const handleSaveClick = useCallback(() => {
    if (contentRef.current) {
      html2canvas(contentRef.current).then(canvas => {
        const url = canvas.toDataURL();
        let link = document.createElement('a');
        document.body.appendChild(link);
        link.href = url;
        link.download = '관악의_밤.png';
        link.click();
        document.body.removeChild(link);
      });
      toast('이미지 다운로드 완료!');
    }
  }, [contentRef]);

  return (
    <>
      <S.Background src={isMobile ? LoadingMobile : LoadingDesktop} />
      <S.StyledPageLoading>
        <HeaderContent>빛 찾기 완료!</HeaderContent>
        <S.Body>
          <S.Text>
            <S.Emph>
              {user && user.email}
            </S.Emph>
            {' '}
            님,
            {' '}
            <br />
            {' '}
            관악의 밤을 밝혀줄 빛을 모두 찾았어요.
            {' '}
            <br />
            {' '}
            <br />
            {' '}
            축하합니다!
          </S.Text>
          <S.Contents ref={contentRef}>
            <S.Image src={LightFinishedBack} />
            <Character containerWidth={theme.windowWidth < 768 ? theme.windowWidth * 0.3 : 230.4} jump={false} />
            <S.SmallText src={LightFinishedText} />
          </S.Contents>
          <S.SaveContainer>
            <S.Save onClick={() => history.push('/clothing')}>옷 입히기</S.Save>
            <S.Save onClick={handleSaveClick}>사진 저장하기</S.Save>
          </S.SaveContainer>

        </S.Body>
      </S.StyledPageLoading>
    </>
  );
}
export default withTheme(withUser(LightMissionComplete));

LightMissionComplete.propTypes = {
  message: PropTypes.string,
};

LightMissionComplete.defaultProps = {
  message: '로딩 중입니다...',
};
