import React, { useEffect, useMemo } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { useUser } from '@U/hooks/useAuth';
import { getRandomElementFromArray } from '@U/functions/array';
import { EventBehavior } from '@U/initializer/googleAnalytics';
import * as S from './styles';

const phrases = [
  '오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.',
  '자신감 있는 표정을 지으면 자신감이 생긴다.',
  '평생 살 것처럼 꿈을 꾸어라. 그리고 내일 죽을 것처럼 오늘을 살아라.',
  '1퍼센트의 가능성, 그것이 나의 길이다.',
  '사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.',
  '사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다.',
  '자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다.',
  '인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라.',
  '인생에 뜻을 세우는데 있어 늦은 때라곤 없다.',
  '행운은 용기를 뒤따른다.',
  '사랑하라, 그리고 네가 하고 싶은 것을 하라!',
  '시간이 흘러도 사랑은 남는다.',
  '나는 세상의 빛이다.',
  '아직 살아있는 동안! 나는 꿈을 꿀 것이다!',
  '우리가 젊을 때, 기뻐하자.',
  'VERITAS LUX MEA.',
  '진리는 나의 빛.',
];

function PolaroidGuide({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const { user, isAuthorized } = useUser();

  useEffect(() => {
    EventBehavior('Mission', 'Click Polaroid Card', 'Click Polaroid Card');
  }, []);

  return (
    <S.StyledPolaroidGuide>
      <S.Polaroid>
        {/* <img src={isMobile ? MobilePolaroid} alt="폴라로이드" /> */}
        <div>
          <span>{isAuthorized ? user.email : '로그인이 필요합니다 :)'}</span>
          <span>{getRandomElementFromArray(phrases)}</span>
        </div>
      </S.Polaroid>
      <p>
        위 화면을 캡쳐 후
        <br />
        @snufestival 을 태그하고 스토리에
        <br />
        전체공개로 올리면 이벤트 참여 완료!
      </p>
    </S.StyledPolaroidGuide>
  );
}
export default withTheme(PolaroidGuide);

PolaroidGuide.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
