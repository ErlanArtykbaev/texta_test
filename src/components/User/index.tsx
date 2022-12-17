import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { makeSelectProfileInfo } from 'store/auth/selectors';
import { getProfileInfoRequest } from 'store/auth/actions';

const User = (): JSX.Element => {
  const dispatch = useDispatch();
  const router = useRouter();
  const profile = useSelector(makeSelectProfileInfo);


  useEffect(
    () => {
      if (!profile) {
        dispatch(getProfileInfoRequest());
      }
    },
    // Need to call this effect only once at render
    // eslint-disable-next-line
    [],
  );

  return (
    <div>user</div>
  );
};

export default User;
