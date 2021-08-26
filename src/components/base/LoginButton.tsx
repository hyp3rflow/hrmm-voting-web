import React from 'react';
import { css } from '@emotion/react';
import oc from 'open-color';

type LoginButtonProps = React.ComponentPropsWithoutRef<'button'>;

const LoginButton = React.forwardRef<HTMLButtonElement, LoginButtonProps>(
  ({ ...props }, ref) => {
    return (
      <button
        css={css`
          padding: 10px 20px;
          border-radius: 999px;
          background-color: ${oc.blue[1]};
          color: ${oc.blue[7]};
          font-weight: bold;
          font-size: 1.125rem;
          :hover {
            background-color: ${oc.blue[2]};
          }
          :active {
            background-color: ${oc.blue[3]};
          }
        `}
        ref={ref}
        {...props}
      >
        로그인
      </button>
    );
  }
);

export default React.memo(LoginButton);
