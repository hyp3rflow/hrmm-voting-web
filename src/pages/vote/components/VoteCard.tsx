import React from 'react';
import { css } from '@emotion/react';
import oc from 'open-color';

import { VoteItem } from 'api/VotingApi';
import { ColorPalette } from 'utils/ColorUtils';

import VoteCardStatusChip, { VoteCardStatus } from './VoteCardStatusChip';

interface VoteCardProps {
  vote: VoteItem;
}

const VoteCard = ({ vote, ...props }: VoteCardProps) => {
  const {
    id,
    name,
    description,
    startTimestamp,
    endTimestamp,
    isSuspended,
    isOpened,
  } = vote;

  const [startDate, endDate] = React.useMemo(() => {
    const _startDate = new Date(startTimestamp);
    const _endDate = new Date(endTimestamp);
    return [_startDate, _endDate];
  }, [startTimestamp, endTimestamp]);

  const status = React.useMemo((): VoteCardStatus => {
    if (isSuspended) {
      return 'suspended';
    }
    if (isOpened) {
      return 'opened';
    }
    return 'closed';
  }, [isOpened, isSuspended]);

  return (
    <div
      css={css`
        width: 100%;
        max-width: 360px;
        background-color: ${ColorPalette.WHITE};
        padding: 18px;
        border-radius: 18px;
        box-shadow: rgb(20 20 20 / 2%) 2px 8px 12px 0px,
          rgb(20 20 20 / 2%) 0px 1px 3px 0px;
      `}
      {...props}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <h2>{name}</h2>
        <VoteCardStatusChip
          css={css`
            margin-left: 12px;
          `}
          status={status}
        />
      </div>
      <p>{description}</p>
      <div
        css={css`
          margin-top: 14px;
          color: ${oc.gray[6]};
          font-size: 0.825rem;
        `}
      >
        <p>{startDate.toLocaleString()} 부터</p>
        <p>{endDate.toLocaleString()} 까지</p>
      </div>
    </div>
  );
};

export default VoteCard;
