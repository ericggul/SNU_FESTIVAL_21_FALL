import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { HeaderContent } from '@F/layout/Header';
import FestivalSection from '@C/introduction/festival-section/FestivalSection';
import StaffSection from '@C/introduction/staff-section/StaffSection';
import ArchiveSection from '@C/introduction/ArchiveSection';

import { useUser } from '@U/hooks/useAuth';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';

import * as S from './styles';

function Introduction({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  const { user, isAuthorized } = useUser();

  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);

  return (
    <S.StyledIntroduction>
      <HeaderContent hasBoxShadow>축하사 소개</HeaderContent>
      <S.Body>
        <FestivalSection isMobile={isMobile} />
        <StaffSection isMobile={isMobile} theme={theme} />
        <ArchiveSection isMobile={isMobile} theme={theme} />
      </S.Body>
      {/* {isPlaying && (
        <S.Balloon src={PurpleBalloon} alt="" onClick={findTreasure} />
      )} */}
      {signInModalComponent}
      {/* {treasureModalComponent} */}
    </S.StyledIntroduction>
  );
}
export default withTheme(Introduction);

Introduction.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number.isRequired,
  }).isRequired,
};
