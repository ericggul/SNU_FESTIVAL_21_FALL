import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function PromotionVideoSection() {
  return (
    <S.StyledPromotionVideoSection>
      <S.VideoWrapper
        widths={[850, 700, 300]}
        heights={[850 / 1.77, 700 / 1.77, 300 / 1.77]}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/6eJz8rOkBSQ"
          title="축하사 홍보영상"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </S.VideoWrapper>
      {/* <S.Text>
        이제 우리 함께 페스월드로 떠나볼까?
      </S.Text> */}
    </S.StyledPromotionVideoSection>
  );
}
export default PromotionVideoSection;

PromotionVideoSection.propTypes = {

};
