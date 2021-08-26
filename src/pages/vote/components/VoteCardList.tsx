import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';

import { VoteItem } from 'api/VotingApi';

import VoteCard from './VoteCard';

interface VoteCardListProps {
  votes: VoteItem[];
}

const VoteCardList = ({ votes, ...props }: VoteCardListProps) => {
  return (
    <div
      css={css`
        & > *:not(:first-child) {
          margin-top: 24px;
        }
      `}
      {...props}
    >
      {votes.map(vote => (
        <Link key={vote.id} href={`/vote/${vote.id}`}>
          <VoteCard
            css={css`
              cursor: pointer;
            `}
            vote={vote}
          />
        </Link>
      ))}
    </div>
  );
};

export default VoteCardList;
