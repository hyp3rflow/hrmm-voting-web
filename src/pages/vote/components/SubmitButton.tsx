import React from 'react';
import oc from 'open-color';
import { css } from '@emotion/react';

type SubmitButtonProps = React.ComponentPropsWithoutRef<'button'>;

const SubmitButton = React.forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ onClick, ...props }, ref) => {
    return (
      <button
        css={css`
          cursor: pointer;
          width: 100%;
          max-width: 600px;
          padding: 1.5rem;
          border-radius: 999px;
          color: ${oc.teal[9]};
          background-color: ${oc.teal[1]};

          &:hover {
            background-color: ${oc.teal[2]};
          }

          &:active {
            background-color: ${oc.teal[3]};
          }
        `}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        <h1
          css={css`
            font-weight: 800;
          `}
        >
          투표하기
        </h1>
      </button>
    );
  }
);

export default React.memo(SubmitButton);
