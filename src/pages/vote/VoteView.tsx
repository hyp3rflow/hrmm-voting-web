import React from 'react';
import { css } from '@emotion/react';
import oc from 'open-color';

import ViewLayout from 'components/base/ViewLayout';
import { CandidateItem, VoteItem } from 'api/VotingApi';

import CandidateCardList from './components/CandidateCardList';
import SubmitButton from './components/SubmitButton';

interface VoteViewProps {
  selectedCandidateId: number | undefined;
  setSelectedCandidateId: (candidateId: number) => void;
  onSubmit: () => void;
  vote: VoteItem | undefined;
  candidates: CandidateItem[];
}

const VoteView = ({
  vote,
  candidates,
  selectedCandidateId,
  setSelectedCandidateId,
  onSubmit,
}: VoteViewProps) => {
  const [startDate, endDate] = React.useMemo(() => {
    return [
      new Date(vote?.startTimestamp ?? ''),
      new Date(vote?.endTimestamp ?? ''),
    ];
  }, [vote]);

  if (vote == null) {
    return (
      <ViewLayout>
        <h1>No vote selected</h1>
      </ViewLayout>
    );
  }

  return (
    <ViewLayout>
      <h1
        css={css`
          font-size: 2.25rem;
          font-weight: 800;
        `}
      >
        현재 진행 중인 선거
      </h1>
      <div
        css={css`
          margin: 1rem 0;
          width: 100%;
          max-width: 600px;
          padding: 1.5rem;
          border-radius: 1rem;
          background: ${oc.yellow[1]};
          background: linear-gradient(
            80deg,
            ${oc.yellow[1]} 0%,
            ${oc.yellow[2]} 100%
          );
        `}
      >
        <div
          css={css`
            display: flex;
            margin-bottom: 0.5rem;
          `}
        >
          <h1
            css={css`
              font-weight: 800;
              color: ${oc.yellow[8]};
            `}
          >
            {vote.name}
          </h1>
        </div>
        <div
          css={css`
            font-size: 1.5rem;
            font-weight: 700;
            color: #baa751;
          `}
        >
          <p
            css={css`
              color: #76620a;
            `}
          >
            {vote.description}
          </p>
          <p>{startDate.toLocaleString()} 부터</p>
          <p>{endDate.toLocaleString()} 까지</p>
        </div>
      </div>
      <CandidateCardList
        onCandidateSelect={setSelectedCandidateId}
        selectedCandidateId={selectedCandidateId}
        candidates={candidates}
      />
      <SubmitButton
        css={css`
          margin-top: 1rem;
        `}
        onClick={onSubmit}
      />
    </ViewLayout>
  );
};

export default VoteView;
