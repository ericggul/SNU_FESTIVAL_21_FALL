import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '@/redux/mission/state';
import { useUser } from '@U/hooks/useAuth';

const useMission = () => {
  const mission = useSelector(state => state.mission);
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
