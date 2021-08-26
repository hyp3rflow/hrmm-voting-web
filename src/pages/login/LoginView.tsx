import React from 'react';
import { css } from '@emotion/react';

import ViewLayout from 'components/base/ViewLayout';

import LoginCard from './components/LoginCard';

interface LoginViewProps {
  onLoginButtonClick(studentNumber: string, password: string): Promise<void>;
}

const LoginView = ({ onLoginButtonClick }: LoginViewProps) => {
  return (
    <ViewLayout
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <LoginCard onLoginButtonClick={onLoginButtonClick} />
    </ViewLayout>
  );
};

export default LoginView;
