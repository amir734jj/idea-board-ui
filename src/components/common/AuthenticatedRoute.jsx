import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Spinner from './Spinner';

const AuthenticatedRoute = ({ component: C, ...props }) => {
  const loggedIn = useSelector((state) => state.account.loggedIn);
  const isLoading = useSelector((state) => state.account.fetching);

  if (loggedIn) {
    return <C {...props} />;
  } if (isLoading) {
    return <Spinner />;
  }
  return <Redirect to="/login" />;
};

export default AuthenticatedRoute;
