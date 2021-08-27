import React from 'react';
import { css } from '@emotion/react';
import oc from 'open-color';
import Link from 'next/link';

import useUser from 'hooks/useUser';

import LoginButton from './LoginButton';

const GnbHeader = () => {
  const { data: user } = useUser();

  return (
    <div
      css={css`
        position: sticky;
        top: 0;

        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 24px;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
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
          </div>
        </Link>
        <div
          css={css`
            margin-left: 24px;
            font-size: 1.125rem;
            font-weight: 600;
          `}
        >
          <Link href="/vote">
            <a
              css={css`
                padding: 8px 16px;
                border-radius: 999px;
                transition: background-color 0.2s ease;
                &:hover {
                  background-color: ${oc.gray[2]};
                }
              `}
            >
              투표
            </a>
          </Link>
        </div>
      </div>
      <div>
        {user ? (
          `${user.userId}님`
        ) : (
          <Link href="/login">
            <LoginButton />
          </Link>
        )}
      </div>
    </div>
  );
};

export default GnbHeader;
