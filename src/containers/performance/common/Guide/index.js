import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { EventBehavior } from '@U/initializer/googleAnalytics';
import { toast } from 'react-toastify';
import * as S from './styles';

function Guide({ date, times, youtubeUrl }) {
  const goToYoutube = useCallback(() => {
    if (youtubeUrl !== null && youtubeUrl.length > 0) {
      EventBehavior('Performance', `Click Youtube Link: ${youtubeUrl}`, `go to ${youtubeUrl} by performance page`);
      window.open(youtubeUrl, '_blank');
    } else if (youtubeUrl !== null && youtubeUrl.length === 0) {
      toast('공연 준비 중입니다😇');
    } else {
      toast('다시 클릭해주세요!');
    }
  }, [youtubeUrl]);

  return (
    <S.StyledGuide>
      <S.Texts>
        <p>{date}</p>
        {times.map(time => <p key={time}>{time}</p>)}
      </S.Texts>
      {/* <S.Button onClick={goToYoutube}>보러가기</S.Button> */}
    </S.StyledGuide>
  );
}
export default Guide;

Guide.propTypes = {
  date: PropTypes.string.isRequired,
  times: PropTypes.arrayOf(PropTypes.string).isRequired,
  youtubeUrl: PropTypes.string,
};

Guide.defaultProps = {
  youtubeUrl: null,
};
