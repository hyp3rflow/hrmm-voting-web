import React from 'react';
import { css } from '@emotion/react';
import oc from 'open-color';

import ViewLayout from 'components/base/ViewLayout';
import { VoteItem } from 'api/VotingApi';

import VoteCardList from './components/home/VoteCardList';

interface VoteHomeViewProps {
  votes: VoteItem[];
}

const VoteHomeView = ({ votes }: VoteHomeViewProps) => {
  const activeVoteCount = React.useMemo(() => {
    return votes.filter(vote => vote.isOpened).length;
  }, [votes]);

  return (
    <ViewLayout>
      <div
        css={css`
          margin: 1rem 0;
          margin-bottom: 24px;
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
            투표 목록
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
            {activeVoteCount > 0
              ? `${activeVoteCount}개의 투표에 참여할 수 있습니다.`
              : '참여할 수 있는 투표가 없습니다.'}
          </p>
        </div>
      </div>
      <VoteCardList votes={votes} />
    </ViewLayout>
  );
};

export default VoteHomeView;
