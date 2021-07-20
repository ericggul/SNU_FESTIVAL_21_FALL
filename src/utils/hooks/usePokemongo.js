import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '@/redux/pokemongo/state';
import { useUser } from '@U/hooks/useAuth';

const usePokemongo = () => {
  const pokemongo = useSelector(state => state.pokemongo);
  console.log('inside usePokemongo', pokemongo);
  const { user, isAuthorized } = useUser();

  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthorized && !pokemongo.isLoaded) {
      dispatch(actions.fetchPokemongos(user));
    }
  }, [dispatch, pokemongo, user, isAuthorized]);

  return pokemongo;
};
export default usePokemongo;
