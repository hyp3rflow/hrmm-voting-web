import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import { getUserQueryKey } from 'queryKey';
import VotingApi from 'api/VotingApi';

const useUser = () => {
  const router = useRouter();

  return useQuery(
    getUserQueryKey(),
    async () => {
      if (window.localStorage.getItem('accessToken') == null) {
        return null;
      }
      const votingApi = new VotingApi();
      return (await votingApi.getUser()).data;
    },
    {
      onError: () => {
        alert('로그인 정보가 만료되었습니다. 다시 로그인해주세요.');
        router.push('/login');
      },
    }
  );
};

export default useUser;
