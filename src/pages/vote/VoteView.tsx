import React from 'react';

import ViewLayout from 'components/base/ViewLayout';
import { CandidateItem } from 'api/VotingApi';

interface VoteViewProps {
  candidates: CandidateItem[];
}

const VoteView = ({ candidates }: VoteViewProps) => {
  return (
    <ViewLayout>
      {candidates.map(candidate => {
        return (
          <div key={candidate.id}>
            {candidate.id}
            {candidate.name}
          </div>
        );
      })}
    </ViewLayout>
  );
};

export default VoteView;
