import { useCallback, useEffect, useMemo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { auth } from '@U/initializer/firebase';
import { actions } from '@/redux/user/state';
import { actions as missionActions } from '@/redux/mission/state';
import { actions as miniGameActions } from '@/redux/mini-game/state';
import { actions as performanceActions } from '@/redux/performance/state';
import firebase from 'firebase/app';
import { toast } from 'react-toastify';

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        dispatch(actions.setValue('email', currentUser.email));
        dispatch(actions.setValue('uid', currentUser.uid));
      } else {
        dispatch(actions.setValue('email', null));
        dispatch(actions.setValue('uid', null));
      }
      dispatch(actions.setLoading(false));
    });
  }, [dispatch]);

  const signIn = useCallback(async () => {
    await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    const provider = new firebase.auth.GoogleAuthProvider();

    dispatch(actions.setLoading(true));
    try {
      await auth.signInWithRedirect(provider);
    } catch {
      toast('인터넷이 불안정합니다. 다시 시도해주세요.');
    }
  }, [dispatch]);

  const signOut = useCallback(async () => {
    dispatch(actions.setLoading(true));
    dispatch(actions.reset());

    try {
      await auth.signOut();
    } finally {
      dispatch(miniGameActions.reset());
      dispatch(missionActions.reset());
      dispatch(performanceActions.reset());
      dispatch(actions.setLoading(false));
    }
  }, [dispatch]);

  return { signIn, signOut };
};
export default useAuth;

export const useUser = () => {
  const user = useSelector(state => ({
    uid: state.user.uid,
    email: state.user.email,
    isLoading: state.user.isLoading,
  }), shallowEqual);
  const isAuthorized = useMemo(() => !!(user.uid && !user.isLoading), [user]);

  return { user, isAuthorized };
};
