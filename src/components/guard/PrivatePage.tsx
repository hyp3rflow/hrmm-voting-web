import { useRouter } from 'next/router';
import React from 'react';

import useUser from 'hooks/useUser';

const AuthorizeGuard: React.FC = ({ children }) => {
  const router = useRouter();
  const { error } = useUser({
    retry: false,
  });
  React.useEffect(() => {
    if (error) {
      if (error?.message?.includes('401')) {
        alert('로그인 정보를 찾을 수 없습니다. 로그인 화면으로 돌아갑니다.');
        router.replace('/login');
      } else {
        alert(
          '알 수 없는 에러로 로그인 정보를 찾을 수 없습니다. 메인 화면으로 돌아갑니다.'
        );
        router.replace('/');
      }
    }
  }, [router, error]);
  return error ? null : <>{children}</>;
};

const PrivatePage: React.FC = ({ children }) => {
  return <AuthorizeGuard>{children}</AuthorizeGuard>;
};

export default PrivatePage;
