import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import TextSection from '@C/goods/TextSection';
import DisplaySection from '@C/goods/DisplaySection';
import ScrollTopButton from '@F/layout/ScrollTopButton';
import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '@U/hooks/useAuth';
import { getPasswordFromEmail } from '@U/functions/password';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
import TreasureGuide from '@C/activity/mini/treasure-hunt/TreasureGuide';
import { actions } from '@/redux/mini-game/state';
import withUser from '@U/hoc/withUser';
import Lumination2 from '@F/animation/Lumination/Lumination2';
import { Balloon } from '@C/activity/group/Group/styles';
import GreenBalloon from '@I/activity/treasure-hunt/balloon-green.png';
import * as S from './styles';

function Goods() {
  // TODO: 코드 중복
  const [showTreasure, setShowTreasure] = useState(false);
  const treasureHunt = useSelector(state => state.miniGame.treasureHunt);
  const dispatch = useDispatch();
  const isPlaying = useMemo(() => (
    treasureHunt !== null && !treasureHunt.includes(2)
  ), []);

  const { user, isAuthorized } = useUser();
  const password = useMemo(() => getPasswordFromEmail(user.email, 2, 3)[1], [user]);
  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);
  const { modalComponent: treasureModalComponent, setIsModalOpen: setIsTreasureModalOpen } = useModal(TreasureGuide, { password, url: '/introduction' });

  const findTreasure = () => {
    if (isAuthorized) {
      dispatch(actions.pushTreasureHunt(2));
      setIsTreasureModalOpen(true);
    } else {
      setIsSignInModalOpen(true);
    }
  };

  return (
    <S.StyledGoods>
      <HeaderContent>굿즈</HeaderContent>
      <Lumination2 width="100%" height="calc(100% + 1.5rem)" />
      <S.Body>
        <TextSection />
        <DisplaySection />
      </S.Body>
      {!isPlaying && (
        <ScrollTopButton />
      )}

      {isPlaying && (
        <S.FakeButton onClickCapture={(e) => { setShowTreasure(true); e.stopPropagation(); }}>
          <ScrollTopButton />
        </S.FakeButton>
      )}
      {showTreasure && isPlaying && (
        <Balloon src={GreenBalloon} alt="" top={20} duration={2} onClick={findTreasure} />
      )}
      {signInModalComponent}
      {treasureModalComponent}
    </S.StyledGoods>
  );
}
export default withUser(Goods);

Goods.propTypes = {

};
