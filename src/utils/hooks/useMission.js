import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuth, { useUser } from '@U/hooks/useAuth';
import { actions } from '@/redux/mission/state';

const useMission = () => {
  const mission = useSelector(state => state.mission);

  useAuth();
  const { user, isAuthorized } = useUser();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthorized && !mission.isLoaded) {
      dispatch(actions.fetchMissions(user));
    }
  }, [dispatch, mission, user, isAuthorized]);
  return mission;
};
export default useMission;
