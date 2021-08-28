import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { HeaderContent } from '@F/layout/Header';
import FestivalSection from '@C/introduction/festival-section/FestivalSection';
import StaffSection from '@C/introduction/staff-section/StaffSection';
import ArchiveSection from '@C/introduction/ArchiveSection';
// import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '@U/hooks/useAuth';
// import { getPasswordFromEmail } from '@U/functions/password';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
// import TreasureGuide from '@C/activity/mini/treasure-hunt/TreasureGuide';
// import { actions } from '@/redux/mini-game/state';
// import PurpleBalloon from '@I/activity/treasure-hunt/balloon-purple.png';
import * as S from './styles';

function Introduction({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  // const treasureHunt = useSelector(state => state.miniGame.treasureHunt);
  // const dispatch = useDispatch();
  // const isPlaying = useMemo(() => (
  //   treasureHunt !== null && !treasureHunt.includes(3)
  // ), []);

  const { user, isAuthorized } = useUser();
  // const password = useMemo(() => getPasswordFromEmail(user.email, 2, 3)[2], [user]);
  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);
  // const { modalComponent: treasureModalComponent, setIsModalOpen: setIsTreasureModalOpen } = useModal(TreasureGuide, { password, url: '/activity/mini/treasure-hunt' });

  // const findTreasure = () => {
  //   if (isAuthorized) {
  //     dispatch(actions.pushTreasureHunt(3));
  //     setIsTreasureModalOpen(true);
  //   } else {
  //     setIsSignInModalOpen(true);
  //   }
  // };

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
