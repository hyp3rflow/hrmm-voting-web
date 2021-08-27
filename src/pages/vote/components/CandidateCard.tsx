import React from 'react';
import oc from 'open-color';
import { css } from '@emotion/react';
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from 'react-icons/ri';

import { CandidateItem } from 'api/VotingApi';
import { ColorPalette } from 'utils/ColorUtils';

interface CandidateCardProps extends React.ComponentPropsWithoutRef<'div'> {
  candidate: CandidateItem;
  isChecked?: boolean;
}

const CandidateCard = React.forwardRef<HTMLDivElement, CandidateCardProps>(
  ({ isChecked, candidate, ...props }, ref) => {
    return (
      <div
        css={css`
          cursor: pointer;
          background-color: ${ColorPalette.WHITE};
          max-width: 600px;
          padding: 1.5rem;
          border-radius: 1rem;
        `}
        ref={ref}
        {...props}
      >
        <h1
          css={css`
            font-weight: 800;
            display: flex;
            align-items: center;
          `}
        >
          {candidate.name}
          <span
            css={css`
              margin-left: 1rem;
              display: flex;
              align-items: center;
            `}
          >
            {isChecked ? (
              <RiCheckboxCircleFill />
            ) : (
              <RiCheckboxBlankCircleLine />
            )}
          </span>
        </h1>
        {candidate.description && (
          <div
            css={css`
              margin-top: 1rem;
              font-weight: 700;
              font-size: 1.25rem;
              line-height: 1.4;
              white-space: pre-wrap;
              color: ${oc.gray[8]};

              p + p {
                margin-top: 0.75rem;
              }
            `}
          >
            {candidate.description.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    );
  }
);

export default CandidateCard;
