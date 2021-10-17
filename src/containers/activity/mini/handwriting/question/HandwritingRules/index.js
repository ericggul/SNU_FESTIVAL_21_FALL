import React from 'react';
import PropTypes from 'prop-types';
import { FlexCenterStyle } from '@S/responsive/display';
import * as S from './styles';

function HandwritingRules() {
  return (
    <S.StyledHandwritingRules>
      학과 이름은 1) 띄어쓰기 없이 2) 정식 명칭으로 3) 세부 전공 구분 없이 작성해주세요!
      <br />
      <br />
      ex. 정치외교학부 정치학/외교학 전공 > 정치외교학부
      <br />
      디자인학부 공예/디자인 > 디자인학부
      <br />
      (수)의예과/의학과 > (수)의학과
      <br />
      물리천문학부 물리학/천문학 전공 > 물리천문학부
      <br />
      소비자아동학부 소비자학/아동가족학 전공 > 소비자아동학부
      <br />
      약학과/제약학과 > 약학과
      <br />
      작곡과 작곡/이론 전공 > 작곡과
      <br />
      기악과 피아노/현악/관악 전공 > 기악과
    </S.StyledHandwritingRules>
  );
}
export default HandwritingRules;

HandwritingRules.propTypes = {

};
