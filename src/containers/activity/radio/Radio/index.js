import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import BackMobile from '@I/activity/radio/background-mobile.png';
import BackDesktop from '@I/activity/radio/background-web.png';
import DummyImage from '@I/activity/riddle/black/black-opening.png';
import { EventBehavior } from '@U/initializer/googleAnalytics';
import { linkCollectionRef } from '@U/initializer/firebase';
import { toast } from 'react-toastify';
import * as S from './styles';

function Radio({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  const [url, setUrl] = useState(null);
  useEffect(() => {
    linkCollectionRef.doc('radio').get()
      .then((doc) => {
        setUrl(doc.data().url);
      })
      .catch(() => (
        toast('인터넷이 불안정합니다. 다시 시도해주세요.')));
  }, []);

  const goToYoutube = useCallback(() => {
    if (url !== null && url.length > 0) {
      EventBehavior('Activity', `Click Youtube Link: ${url}`, `go to ${url} by activity page`);
      window.open(url, '_blank');
    } else if (url !== null && url.length === 0) {
      toast('행사 준비 중입니다😇');
    } else {
      toast('다시 클릭해주세요!');
    }
  }, [url]);

  return (
    <S.StyledRadio>
      <HeaderContent backgroundColor={theme.palette.TALKSHOW_HEADER}>토크쇼</HeaderContent>
      {isMobile
        ? <S.Background src={BackMobile} alt="백야 배경" />
        : <S.Background src={BackDesktop} alt="백야 배경" />}
      <S.Image src={DummyImage} />
      <S.Texts />
    </S.StyledRadio>
  );
}
export default withTheme(Radio);

Radio.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
