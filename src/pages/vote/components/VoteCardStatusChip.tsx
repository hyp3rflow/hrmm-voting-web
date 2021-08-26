import React from 'react';
import { css } from '@emotion/react';
import oc from 'open-color';

export type VoteCardStatus = 'opened' | 'closed' | 'suspended' | 'voted';

interface VoteCardStatusChipProps {
  status: VoteCardStatus;
}

const VoteCardStatusChip = ({ status, ...props }: VoteCardStatusChipProps) => {
  const statusTitle = React.useMemo(() => {
    switch (status) {
      case 'opened':
        return '진행중';
      case 'closed':
        return '종료됨';
      case 'suspended':
        return '정지됨';
      case 'voted':
        return '투표함';
    }
  }, [status]);

  return (
    <div
      css={[
        css`
          padding: 6px 12px;
          height: fit-content;
          border-radius: 999px;
          display: flex;
          align-items: center;
          font-weight: 700;
          font-size: 0.925rem;
        `,
        status === 'opened'
          ? css`
              background-color: ${oc.green[1]};
              color: ${oc.green[7]};
            `
          : css`
              background-color: ${oc.red[1]};
              color: ${oc.red[7]};
            `,
      ]}
      {...props}
    >
      {statusTitle}
    </div>
  );
};

export default VoteCardStatusChip;
