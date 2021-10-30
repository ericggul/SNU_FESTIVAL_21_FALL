import React from 'react';
import Fade from 'react-reveal/Fade';
import * as S from './styles';

function PublisherSection() {
  return (
    <Fade left distance="30px" delay={200}>
      <S.StyledPublisherSection>
        <p>
          <span>축장</span>
          <br />
          <span>개발</span>
          <br />
          <span>기획</span>
          <br />
          <span>디자인</span>
        </p>
        <div />
        <p>
          <span>권익현 </span>
          <br />
          <span>최정윤</span>
          <br />
          <span>권지현 이예은</span>
          <br />
          <span>김예원 송유민 이주은</span>
        </p>
      </S.StyledPublisherSection>
    </Fade>
  );
}
export default PublisherSection;

PublisherSection.propTypes = {

};
