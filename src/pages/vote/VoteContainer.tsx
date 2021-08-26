import React from 'react';
import { useRouter } from 'next/router';

import GnbHeader from 'components/base/GnbHeader';
import PageLayout from 'components/base/PageLayout';
import VotingApi, { CandidateItem } from 'api/VotingApi';

import VoteView from './VoteView';

interface VoteContainerProps {
  voteId: number | null;
}

const VoteContainer = ({ voteId }: VoteContainerProps) => {
  const router = useRouter();
  const [candidates, setCandidates] = React.useState<CandidateItem[]>([]);

  React.useEffect(() => {
    if (voteId == null) return;
    const votingApi = new VotingApi();
    (async () => {
      try {
        const response = await votingApi.candidates(voteId);
        setCandidates(response.data);
      } catch (e) {
        alert(
          '선거 정보를 불러오는 데에 실패했습니다. 메인 페이지로 이동합니다.'
        );
        await router.push('/');
      }
    })();
  }, [voteId, router]);

  return (
    <PageLayout topbar={<GnbHeader />}>
      <VoteView candidates={candidates} />
    </PageLayout>
  );
};

export default VoteContainer;
