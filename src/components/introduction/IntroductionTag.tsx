import React from 'react';
import { css } from '@emotion/react';

interface IntroductionTagProps extends React.ComponentPropsWithoutRef<'div'> {
  color: React.CSSProperties['color'];
  backgroundColor: React.CSSProperties['backgroundColor'];
}

const IntroductionTag = React.forwardRef<HTMLDivElement, IntroductionTagProps>(
  ({ color, backgroundColor, children, ...props }, ref) => {
    return (
      <div
        css={css`
          display: flex;
          align-items: center;
          height: fit-content;
          margin-left: 0.25rem;

          padding: 4px 10px;
          font-weight: 700;
          border-radius: 999px;
          color: ${color};
          background-color: ${backgroundColor};
        `}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default React.memo(IntroductionTag);
