import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useUser } from '@U/hooks/useAuth';
import { actions } from '@/redux/mission/state';

const useLightGame = ({ i, user }) => {
  const dispatch = useDispatch();
  const currentLightArray = useSelector(state => state.mission.light);
  if (currentLightArray[i] === 1) {
    return false;
  }
  const newArray = [...currentLightArray];
  newArray[i] = 1;
  dispatch(actions.setFirestoreMission(user, newArray));
  return true;
};
export default useLightGame;
