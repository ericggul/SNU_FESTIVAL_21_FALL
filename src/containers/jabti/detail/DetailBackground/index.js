import React, { useState, useEffect } from 'react';
import { withTheme } from 'styled-components';
import Stars2 from '@F/stars/Stars2';
import CloudTop from '@I/jabti/background/cloud-top.png';
import CloudBottom from '@I/jabti/background/cloud-bottom.png';
import CloudLeft from '@I/jabti/background/cloud-left.png';
import CloudRight from '@I/jabti/background/cloud-right.png';
import PropTypes from 'prop-types';
import * as S from './styles';

function DetailBackground({ theme, currentStars, colorCode }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (currentStars > 0) {
      setLoading(true);
    }
  }, [currentStars]);
  return (
    <S.Background>
      {
        loading && <Stars2 width="100%" height="100%" color={colorCode} delay={0} number={currentStars} />
      }
      {
        theme.windowWidth < 768
          ? (
            <>
              <S.ImageTop src={CloudTop} />
              <S.ImageBottom src={CloudBottom} />
            </>
          )
          : (
            <>
              <S.ImageLeft src={CloudLeft} />
              <S.ImageRight src={CloudRight} />
            </>
          )
      }

    </S.Background>
  );
}
export default withTheme(DetailBackground);

DetailBackground.propTypes = {
  currentStars: PropTypes.number.isRequired,
  colorCode: PropTypes.string.isRequired,
};
