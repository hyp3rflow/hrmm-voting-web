import { useRouter } from 'next/router';
import React from 'react';

import VoteContainer from './VoteContainer';

const VotePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const voteId = React.useMemo(() => {
    if (id == null) return null;
    if (Array.isArray(id)) {
      return Number.parseInt(id[0]);
    }
    return Number.parseInt(id);
  }, [id]);

  return <VoteContainer voteId={voteId} />;
};

export default VotePage;
