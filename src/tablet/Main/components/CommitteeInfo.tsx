import { css } from '@emotion/react';
import {
  COMMITTEE_COL1,
  COMMITTEE_COL2,
  COMMITTEE_COL3,
} from '../../../mobile/Main/constants/COMMITTEE';
import { colors, fonts } from '../../../styles/theme';
import { ImgBg1Tablet } from '../../assets/image';

function CommitteeInfo() {
  return (
    <section css={CommitteeInfoContainer}>
      <img css={bgImg} src={ImgBg1Tablet} alt="배경이미지" />
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
  padding: 20rem 0 35.7rem 3.2rem;
`;

const bgImg = css`
  position: absolute;
  z-index: -1;

  width: 100%;
  height: auto;
`;

const title = css`
  color: ${colors.gray900};

  ${fonts.desktop_title_semi_24};
`;

const committeeList = css`
  display: flex;
  gap: 4.9rem;
  flex-direction: column;

  margin-top: 10rem;
`;

const colCss = css`
  display: flex;
  gap: 0.8rem;
`;

const listItem = css`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  width: 12.1rem;

  h2:first-of-type {
    color: ${colors.gray500};

    ${fonts.desktop_cap_reg_14};
  }

  p:first-of-type {
    color: ${colors.gray900};

    ${fonts.tablet_body_semi_16};
  }
`;
