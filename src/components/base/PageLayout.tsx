import React from 'react';
import { css } from '@emotion/react';
import { use100vh } from 'react-div-100vh';

import { ColorPalette } from 'utils/ColorUtils';

interface PageLayoutProps extends React.ComponentPropsWithoutRef<'div'> {
  topbar?: React.ReactNode;
}

const PageLayout = React.forwardRef<HTMLDivElement, PageLayoutProps>(
  ({ topbar, children, ...props }, ref) => {
    const height = use100vh();
    return (
      <div
        css={css`
          min-width: 100vw;
          min-height: ${height ? `${height}px` : '100vh'};
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;

          background-color: #000;
        `}
        ref={ref}
        {...props}
      >
        <div
          css={css`
            display: flex;
            position: relative;
            flex-direction: column;
            background-color: ${ColorPalette.BLACK};
            overflow-x: auto;
            width: 100%;
            height: 100%;
            min-height: ${height ? `${height}px` : '100vh'};
            padding-bottom: calc(env(safe-area-inset-bottom, 0));
          `}
          ref={ref}
          {...props}
        >
          {topbar}
          <div
            css={css`
              flex: 1;
              display: flex;
              flex-direction: column;
            `}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);

export default PageLayout;
