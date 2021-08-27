import React from 'react';
import { css } from '@emotion/react';

import { CandidateItem } from 'api/VotingApi';

import CandidateCard from './CandidateCard';

interface CandidateCardListProps {
  onCandidateSelect: (candidateId: number) => void;
  selectedCandidateId: number | undefined;
  candidates: CandidateItem[];
}

const CandidateCardList = React.forwardRef<
  HTMLDivElement,
  CandidateCardListProps
>(({ onCandidateSelect, selectedCandidateId, candidates, ...props }, ref) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        & > * + * {
          margin-top: 1rem;
        }
      `}
      ref={ref}
      {...props}
    >
      {candidates.map(candidate => {
        return (
          <CandidateCard
            key={candidate.id}
            onClick={() => onCandidateSelect(candidate.id)}
            isChecked={selectedCandidateId === candidate.id}
            candidate={candidate}
          />
        );
      })}
    </div>
  );
});

export default React.memo(CandidateCardList);
