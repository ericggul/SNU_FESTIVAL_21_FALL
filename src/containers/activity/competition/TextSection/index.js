import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function TextSection() {
  return (
    <S.TextSection>

      <S.Title>샤대생의 상상은 현실이 된다</S.Title>
      <S.SubTitle>
        붉게 노을진 저녁하늘에 오리가 둥둥 떠다닌다면?
        <br />
        상상한 그 모든 것이 현실이 된다!
        <br />
        가장 센스 넘치는 작품을 여러분들의 손으로 직접 뽑아주세요!
        <br />
        5개의 작품에 투표 가능합니다.
        <br />
        과연 어떤 화려하고 근사한 상상이 우리의 눈 앞에 펼쳐질까요?
      </S.SubTitle>
      <S.Notice>
        1.
        {' '}
        로그인하고 투표해주세요.
        {' '}
        <br />
        2.
        {' '}
        <S.EmphText>최대 5개</S.EmphText>
        의 작품에 투표 가능합니다.
      </S.Notice>
      <S.Evaluation>
        * 사진을 누르면 해당 작품을 볼 수 있습니다.
      </S.Evaluation>
    </S.TextSection>
  );
}
export default TextSection;

TextSection.propTypes = {
};
