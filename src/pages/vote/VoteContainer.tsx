import React from 'react';

import GnbHeader from 'components/base/GnbHeader';
import PageLayout from 'components/base/PageLayout';
import VotingApi, { CandidateItem } from 'api/VotingApi';

import VoteView from './VoteView';

interface VoteContainerProps {
  voteId: number | null;
}

const VoteContainer = ({ voteId }: VoteContainerProps) => {
  const [candidates, setCandidates] = React.useState<CandidateItem[]>([]);

  React.useEffect(() => {
    if (voteId == null) return;
    const votingApi = new VotingApi();
    (async () => {
      const response = await votingApi.candidates(voteId);
      setCandidates(response.data);
    })();
  }, [voteId]);

  return (
    <PageLayout topbar={<GnbHeader />}>
      <VoteView candidates={candidates} />
    </PageLayout>
  );
};

export default VoteContainer;
