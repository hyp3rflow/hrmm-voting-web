import React from 'react';
import { css } from '@emotion/react';

import { ColorPalette } from 'utils/ColorUtils';
import LoginButton from 'components/base/LoginButton';

import LoginInput from './LoginInput';

interface LoginCardProps {
  onLoginButtonClick(studentNumber: string, password: string): Promise<void>;
}

const LoginCard = ({ onLoginButtonClick }: LoginCardProps) => {
  const [studentNumber, setStudentNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleStudentNumberChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setStudentNumber(e.target.value);
    },
    []
  );
  const handlePasswordChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );
  const handleSubmitKeyDown = React.useCallback(
    async (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter') {
        await onLoginButtonClick(studentNumber, password);
      }
    },
    [onLoginButtonClick, studentNumber, password]
  );

  return (
    <div
      onKeyDown={handleSubmitKeyDown}
      css={css`
        width: 360px;
        display: flex;
        flex-direction: column;
        margin: 24px 0;
        padding: 36px;
        border-radius: 18px;
        background-color: ${ColorPalette.WHITE};
        box-shadow: rgb(20 20 20 / 2%) 2px 8px 12px 0px,
          rgb(20 20 20 / 2%) 0px 1px 3px 0px;

        * + * {
          margin-top: 18px;
        }
      `}
    >
      <h2>로그인</h2>
      <LoginInput
        value={studentNumber}
        onChange={handleStudentNumberChange}
        placeholder="학번"
      />
      <LoginInput
        value={password}
        onChange={handlePasswordChange}
        placeholder="비밀번호"
        type="password"
      />
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
        `}
      >
        <LoginButton
          onClick={() => onLoginButtonClick(studentNumber, password)}
        />
      </div>
    </div>
  );
};

export default LoginCard;
