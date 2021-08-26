import React from 'react';
import oc from 'open-color';
import { css } from '@emotion/react';
import Link from 'next/link';

import ViewLayout from 'components/base/ViewLayout';
import IntroductionTag from 'components/introduction/IntroductionTag';

const HomeView = () => {
  return (
    <ViewLayout>
      <div
        css={css`
          margin-bottom: 1rem;
        `}
      >
        <h1>
          <p
            css={css`
              -webkit-text-fill-color: transparent;
              background: rgb(28, 126, 214);

              background: linear-gradient(
                342deg,
                rgba(208, 191, 255, 1) 0%,
                rgba(59, 91, 219, 1) 69%,
                rgba(59, 201, 219, 1) 110%
              );
              background-clip: text;
              font-weight: 900;
              font-size: 2.5rem;
            `}
          >
            새로운 학생회를 만나는 공간
          </p>
          <p
            css={css`
              font-weight: 800;
              font-size: 2.5rem;
              color: ${oc.gray[8]};
            `}
          >
            흐름.xyz
          </p>
        </h1>
      </div>
      <div
        css={css`
          display: inline-flex;
          flex-direction: column;
        `}
      >
        <Link href="/vote">
          <a>
            <div
              css={css`
                margin: 1rem 0;
                width: 100%;
                max-width: 600px;
                padding: 1.5rem;
                border-radius: 1rem;
                background: ${oc.yellow[1]};
                background: linear-gradient(
                  80deg,
                  ${oc.yellow[1]} 0%,
                  ${oc.yellow[2]} 100%
                );
              `}
            >
              <div
                css={css`
                  display: flex;
                  margin-bottom: 0.5rem;
                `}
              >
                <h1
                  css={css`
                    font-weight: 800;
                    color: ${oc.yellow[8]};
                  `}
                >
                  투표
                </h1>
                <IntroductionTag
                  color={oc.yellow[9]}
                  backgroundColor={oc.yellow[3]}
                >
                  beta
                </IntroductionTag>
              </div>
              <div
                css={css`
                  font-size: 1.5rem;
                  font-weight: 700;
                  color: #baa751;
                `}
              >
                <p
                  css={css`
                    color: #76620a;
                  `}
                >
                  더욱 간편하고 안전하게, 투표를 진행할 수 있어요.
                </p>
                <p>클릭 한번으로 투표를 만들고, 다양한 통계를 받아보세요.</p>
              </div>
            </div>
          </a>
        </Link>
        <div
          css={css`
            margin: 1rem 0;
            width: 100%;
            max-width: 600px;
            padding: 1.5rem;
            border-radius: 1rem;
            background: ${oc.orange[1]};
            background: linear-gradient(
              80deg,
              ${oc.orange[1]} 0%,
              ${oc.orange[2]} 100%
            );
          `}
        >
          <div
            css={css`
              display: flex;
              margin-bottom: 0.5rem;
            `}
          >
            <h1
              css={css`
                font-weight: 800;
                color: ${oc.orange[9]};
              `}
            >
              공지사항
            </h1>
            <IntroductionTag
              color={oc.orange[9]}
              backgroundColor={oc.orange[3]}
            >
              in-development 🚧
            </IntroductionTag>
          </div>
          <div
            css={css`
              font-size: 1.5rem;
              font-weight: 700;
              color: #d4954e;
            `}
          >
            <p
              css={css`
                color: #954f00;
              `}
            >
              놓치기 쉬운 카톡방 대신 흐름에서 편하게 보세요.
            </p>
            <p>공지사항을 분류하고, 일정에 등록할 수 있어요.</p>
          </div>
        </div>
        <div
          css={css`
            margin: 1rem 0;
            width: 100%;
            max-width: 600px;
            padding: 1.5rem;
            border-radius: 1rem;
            background: ${oc.violet[1]};
            background: linear-gradient(
              80deg,
              ${oc.violet[1]} 0%,
              ${oc.violet[2]} 100%
            );
          `}
        >
          <div
            css={css`
              display: flex;
              margin-bottom: 0.5rem;
            `}
          >
            <h1
              css={css`
                font-weight: 800;
                color: ${oc.violet[9]};
              `}
            >
              과톡
            </h1>
            <IntroductionTag
              color={oc.violet[9]}
              backgroundColor={oc.violet[2]}
            >
              in-development 🚧
            </IntroductionTag>
          </div>
          <div
            css={css`
              font-size: 1.5rem;
              font-weight: 700;
              color: #877ca9;
            `}
          >
            <p>지금 우리 학과에서 무슨 일이 일어나고 있나요?</p>
            <p
              css={css`
                color: #5435b3;
              `}
            >
              실시간으로 학우분들과 함께 대화를 나눌 수 있어요.
            </p>
          </div>
        </div>
        <div
          css={css`
            margin: 1rem 0;
            width: 100%;
            max-width: 600px;
            padding: 1.5rem;
            border-radius: 1rem;
            background: ${oc.green[1]};
          `}
        >
          <h2
            css={css`
              color: ${oc.green[9]};
            `}
          >
            함께 흐름을 만들고 싶으신가요?
          </h2>
          <p
            css={css`
              font-size: 1.25rem;
              font-weight: 700;
              color: ${oc.green[7]};
            `}
          >
            집행부 개발팀 확장 시기를 기다려주세요 :)
          </p>
        </div>
      </div>
    </ViewLayout>
  );
};

export default HomeView;
