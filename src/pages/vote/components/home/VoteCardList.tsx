import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import oc from 'open-color';

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
      {votes.map(vote => {
        const alertMessage = (() => {
          if (vote.isVoted) return '이미 투표하셨습니다.';
          if (!vote.isOpened) return '종료된 투표에 접근할 수 없습니다.';
          if (vote.isSuspended) return '일시적으로 중단된 투표입니다.';
          return 'ALERT_MESSAGE';
        })();

        return vote.isOpened && !vote.isVoted && !vote.isSuspended ? (
          <Link key={vote.id} href={`/vote/${vote.id}`}>
            <VoteCard
              css={css`
                cursor: pointer;
              `}
              vote={vote}
              {...props}
            />
          </Link>
        ) : (
          <VoteCard
            css={css`
              background-color: ${oc.gray[0]};
              cursor: pointer;
            `}
            vote={vote}
            onClick={() => alert(alertMessage)}
            {...props}
          />
        );
      })}
    </div>
  );
};

export default VoteCardList;
