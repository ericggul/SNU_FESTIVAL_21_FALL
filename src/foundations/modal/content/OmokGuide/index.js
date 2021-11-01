import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function OmokGuide({ setIsModalOpen, version }) {
  return (
    <S.StyledOmokGuide>
      <S.OmokBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        {version !== 'white'
          ? (
            <S.Description>
              본인과 상대방이 번갈아 가며 한 수씩 두어 가로, 세로, 대각선 중 한 방향으로 다섯 개의 같은 색 연속된 돌을 놓으면 승리
              <br />
              <br />
              예외)
              <br />
              *삼삼(막혀있지 않은 둘 이상의 연속된 3을 만드는 수) 금지
              <br />
              *육목(여섯 개 이상의 돌을 늘어놓는 수)으로는 이길 수 없음
              <br />
              단, 삼삼, 육목 동시에 오목이 만들어지는 경우는 제외
              <br />
              <br />

              1. 가위바위보를 통해 흑과 백을 정합니다. 흑이 먼저 시작합니다.
              <br />
              2. 줌의 주석 기능을 활용하여 돌을 놓습니다.
              <br />
              3. 한 턴 당 제한시간은 40초입니다.
            </S.Description>
          )
          : (
            <S.Description>
              매시 10분 단위마다 게임이 시작됩니다.
              <br />
              Ex. 12:00, 12:10, 12:20, 12:30…
              <br />
              축제가 진행되는 4일(화, 수, 목, 금)동안 매일
              <br />
              11시-17시까지 게임에 참가하실수 있습니다.
            </S.Description>
          )}

        <S.Button onClick={() => setIsModalOpen(false)}>확인</S.Button>
      </S.OmokBox>
    </S.StyledOmokGuide>
  );
}
export default OmokGuide;

OmokGuide.propTypes = {

};
