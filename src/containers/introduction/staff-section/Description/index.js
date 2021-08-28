import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import * as S from './styles';

function Description({ theme }) {
  return (
    <S.StyledDescription>
      <Fade bottom delay={100}>
        <div>
          서울대 축제의 지향점을 알고 계신가요?
          <br />
          서울대 축제는 ‘학생들이 직접 만들어가는 축제’ 를 지향하며
          { theme.windowWidth > 330 && <br /> }

          {'<'}
          축제하는사람들
          {'>'}

          은 이런 가치를 지닌 축제를 만드는 단체에요.
          <br />
          저희는 서울대 축제의 기획부터 실행까지 모두 맡고 있어요.
          <br />
          매번 약 30명의 축하사원들은 새로운 게임과 이벤트를 만들며
          { theme.windowWidth > 330 && <br /> }
          학우들이 자유롭게 즐길 수 있는 축제를 만들고 있습니다.
          <br />
          또한 즐거움을 넘어,
          { theme.windowWidth > 330 && <br /> }
          다양성과 진정성까지 담은 축제를 만들기 위해 노력해요!
        </div>
        <br />
        <div>
          COVID-19로 인해 즐길 거리가 없으셨을 여러분들을 위해
          { theme.windowWidth > 330 && <br /> }
          축하사가
          {' '}
          “온라인” 축제
          로 찾아왔어요.
          <br />
          축제를 완성시켜 줄 주인공은 바로 “여러분”!
          <br />
          축하사는 여러분을 기다립니다.
        </div>
      </Fade>
    </S.StyledDescription>
  );
}
export default withTheme(Description);

Description.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }),
};

Description.defaultProps = {
  theme: {
    windowWidth: 1000,
  },
};
