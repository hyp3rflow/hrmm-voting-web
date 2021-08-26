import React from 'react';

import PageLayout from 'components/base/PageLayout';
import GnbHeader from 'components/base/GnbHeader';
import VotingApi, { VoteItem } from 'api/VotingApi';

import VoteHomeView from './VoteHomeView';

const VoteHomeContainer = () => {
  const [votes, setVotes] = React.useState<VoteItem[]>([]);

  React.useEffect(() => {
    (async () => {
      const votingApi = new VotingApi();
      const response = await votingApi.votes();
      setVotes(response.data);
    })();
  }, []);

  return (
    <PageLayout topbar={<GnbHeader />}>
      <VoteHomeView votes={votes} />
    </PageLayout>
  );
};

export default VoteHomeContainer;
