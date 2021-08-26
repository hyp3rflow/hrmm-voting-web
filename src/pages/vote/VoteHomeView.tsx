import React from 'react';
import { css } from '@emotion/react';

import ViewLayout from 'components/base/ViewLayout';
import { VoteItem } from 'api/VotingApi';

import VoteCardList from './components/VoteCardList';

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
          margin-bottom: 24px;
        `}
      >
        <h1>선거 목록</h1>
        <p>{activeVoteCount}개의 선거가 진행 중입니다.</p>
      </div>
      <VoteCardList votes={votes} />
    </ViewLayout>
  );
};

export default VoteHomeView;
