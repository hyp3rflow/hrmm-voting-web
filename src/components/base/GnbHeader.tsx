import React from 'react';
import { css } from '@emotion/react';
import oc from 'open-color';
import Link from 'next/link';

import LoginButton from './LoginButton';

const GnbHeader = () => {
  return (
    <div
      css={css`
        position: sticky;
        top: 0;

        display: flex;
        justify-content: space-between;
        margin: 24px;
      `}
    >
      <Link href="/">
        <div
          css={css`
            display: flex;
            cursor: pointer;
          `}
        >
          <h2
            css={css`
              font-weight: 900;
            `}
          >
            hrmm.xyz
          </h2>
          <div
            css={css`
              font-weight: 600;
            `}
          >
            voting
          </div>
        </div>
      </Link>
      <div>
        <Link href="/login">
          <LoginButton />
        </Link>
      </div>
    </div>
  );
};

export default GnbHeader;
