import React from 'react';
import { css } from '@emotion/react';
import oc from 'open-color';

import { VoteItem } from 'api/VotingApi';
import { ColorPalette } from 'utils/ColorUtils';

import VoteCardStatusChip, { VoteCardStatus } from './VoteCardStatusChip';

interface VoteCardProps extends React.ComponentPropsWithoutRef<'div'> {
  vote: VoteItem;
}

const VoteCard = React.forwardRef<HTMLDivElement, VoteCardProps>(
  ({ vote, ...props }) => {
    const {
      id,
      name,
      description,
      startTimestamp,
      endTimestamp,
      isSuspended,
      isOpened,
      isVoted,
    } = vote;

    const [startDate, endDate] = React.useMemo(() => {
      const _startDate = new Date(startTimestamp);
      const _endDate = new Date(endTimestamp);
      return [_startDate, _endDate];
    }, [startTimestamp, endTimestamp]);

    const status = React.useMemo((): VoteCardStatus => {
      if (isVoted) {
        return 'voted';
      }
      if (isSuspended) {
        return 'suspended';
      }
      if (isOpened) {
        return 'opened';
      }
      return 'closed';
    }, [isOpened, isSuspended, isVoted]);

    return (
      <div
        css={css`
          width: 100%;
          max-width: 600px;
          background-color: ${ColorPalette.WHITE};
          padding: 1.5rem;
          border-radius: 1rem;
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
          <h1
            css={css`
              font-weight: 800;
            `}
          >
            {name}
          </h1>
          <VoteCardStatusChip
            css={css`
              margin-left: 12px;
            `}
            status={status}
          />
        </div>
        <p
          css={css`
            font-weight: 700;
            color: ${oc.gray[7]};
            font-size: 1.25rem;
          `}
        >
          {description}
        </p>
        <div
          css={css`
            margin-top: 14px;
            color: ${oc.gray[5]};
            font-size: 1.125rem;
            font-weight: 700;
          `}
        >
          <p>{startDate.toLocaleString()} 부터</p>
          <p>{endDate.toLocaleString()} 까지</p>
        </div>
      </div>
    );
  }
);

export default React.memo(VoteCard);
