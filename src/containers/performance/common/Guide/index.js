import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { EventBehavior } from '@U/initializer/googleAnalytics';
import { toast } from 'react-toastify';
import { transition } from '@C/performance/Performance';
import * as S from './styles';

function Guide({ type, date, times }) {
  return (
    <S.StyledGuide
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      transition={{
        ...transition,
        delay: 0.7,
      }}
    >
      <S.Texts>
        <p>{type}</p>
        <p>{date}</p>
        {times.map(time => <p key={time}>{time}</p>)}
      </S.Texts>
    </S.StyledGuide>
  );
}
export default Guide;

Guide.propTypes = {
  date: PropTypes.string.isRequired,
  times: PropTypes.arrayOf(PropTypes.string).isRequired,
  // youtubeUrl: PropTypes.string,
};

Guide.defaultProps = {
};
