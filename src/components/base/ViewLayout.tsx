import React from 'react';
import { css } from '@emotion/react';

interface ViewLayoutProps {
  children: React.ReactNode;
}

const ViewLayout = ({ children, ...props }: ViewLayoutProps) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        padding: 24px;

        flex: 1;
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default ViewLayout;
