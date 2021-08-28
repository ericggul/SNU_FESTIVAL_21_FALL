import React from 'react';
import Fade from 'react-reveal/Fade';
import * as S from './styles';

function PublisherSection() {
  return (
    <Fade left distance="30px" delay={200}>
      <S.StyledPublisherSection>
        <p>관악의 밤 설립자</p>
        <div />
        <p>
          <span onClick={() => window.open('mailto:geehyun0105@snu.ac.kr')}>축장 권익현 </span>
          <br />
          <span onClick={() => window.open('mailto:ericggul@gmail.com')}>개발 최정윤 ericggul@gmail.com</span>
          <br />
          <span onClick={() => window.open('mailto:sk990120@snu.ac.kr')}>디자인 김예원 </span>
        </p>
      </S.StyledPublisherSection>
    </Fade>
  );
}
export default PublisherSection;

PublisherSection.propTypes = {

};
