import { css } from '@emotion/react';
import React from 'react';

type LoginInputProps = React.ComponentPropsWithoutRef<'input'>;

const LoginInput = React.forwardRef<HTMLInputElement, LoginInputProps>(
  ({ ...props }, ref) => {
    return (
      <input
        css={css`
          font-size: 1rem;
          width: 100%;
          padding: 12px;
          font-size: 16px;
          box-shadow: rgb(0 0 0 / 4%) 0px 1px 3px 0px,
            rgb(0 0 0 / 8%) 0px 0px 0px 1px inset;
        `}
        ref={ref}
        {...props}
      />
    );
  }
);

export default React.memo(LoginInput);
