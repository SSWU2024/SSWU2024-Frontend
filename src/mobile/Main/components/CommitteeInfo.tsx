import { css } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';
import { ImgBg1Mobile } from '../../assets/image';
import {
  COMMITTEE_COL1,
  COMMITTEE_COL2,
  COMMITTEE_COL3,
} from '../constants/COMMITTEE';

function CommitteeInfo() {
  return (
    <section css={CommitteeInfoContainer}>
      <img css={bgImg} src={ImgBg1Mobile} alt="배경이미지" />
      <div css={contentSection}>
        <h1 css={title}>졸업전시준비위원회</h1>
        <div css={committeeList}>
          <ul css={colCss}>
            {COMMITTEE_COL1.map((item) => {
              const { team, name } = item;
              return (
                <li css={listItem} key={name}>
                  <h2>{team}</h2>
                  <p>{name}</p>
                </li>
              );
            })}
          </ul>

          <ul css={colCss}>
            {COMMITTEE_COL2.map((item) => {
              const { team, name } = item;
              return (
                <li css={listItem} key={name}>
                  <h2>{team}</h2>
                  <p>{name}</p>
                </li>
              );
            })}
          </ul>

          <ul css={colCss}>
            {COMMITTEE_COL3.map((item) => {
              const { team, name } = item;
              return (
                <li css={listItem} key={name}>
                  <h2>{team}</h2>
                  <p>{name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CommitteeInfo;

const CommitteeInfoContainer = css`
  position: relative;
  overflow: hidden;

  width: 100dvw;
`;

const contentSection = css`
  padding: 10rem 0 26.8rem 1.6rem;
`;

const bgImg = css`
  position: absolute;
  z-index: -1;

  width: 100%;
  height: auto;
`;

const title = css`
  color: ${colors.gray900};

  ${fonts.desktop_body_semi_18};
`;

const committeeList = css`
  display: flex;
  gap: 2rem;
  flex-direction: column;

  margin-top: 4rem;
`;

const colCss = css`
  display: flex;
  gap: 1.6rem;
`;

const listItem = css`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;

  width: 7.3rem;

  h2:first-of-type {
    color: ${colors.gray500};

    ${fonts.mobile_cap_reg_12};
  }

  p:first-of-type {
    color: ${colors.gray900};

    ${fonts.mobile_body_semi_14};
  }
`;
