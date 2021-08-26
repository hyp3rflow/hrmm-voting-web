import React from 'react';
import { useRouter } from 'next/router';

import GnbHeader from 'components/base/GnbHeader';
import PageLayout from 'components/base/PageLayout';
import AuthApi from 'api/AuthApi';

import LoginView from './LoginView';

const LoginContainer = () => {
  const router = useRouter();
  const handleLoginButtonClick = React.useCallback(
    async (studentNumber: string, password: string) => {
      const authApi = new AuthApi();
      try {
        await authApi.login(studentNumber, password);
        await router.push('/');
      } catch (e) {
        alert('로그인에 실패했습니다.');
      }
    },
    [router]
  );

  return (
    <PageLayout topbar={<GnbHeader />}>
      <LoginView onLoginButtonClick={handleLoginButtonClick} />
    </PageLayout>
  );
};

export default LoginContainer;
