import React from 'react';
import { Navigate } from 'react-router-dom';
import { routes } from '../../../utils/constants/routes';

interface IProps {
  children: React.ReactElement;
}

export const CheckAuth = ({ children }: IProps) => {
  const token = localStorage.getItem('token');

  console.log(token);

  if (!token) {
    return <Navigate to={routes.AUTH} />;
  }
  return <>{children}</>;
};
