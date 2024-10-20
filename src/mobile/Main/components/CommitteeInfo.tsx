import { css } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';
import { ImgBg1Mobile } from '../../assets/image';
import { COMMITTEE } from '../constants/COMMITTEE';

const CommitteeInfo = () => {
  return (
    <section css={CommitteeInfoContainer}>
      <img css={bgImg} src={ImgBg1Mobile} alt="배경이미지" />
      <div css={contentSection}>
        <h1 css={title}>졸업전시준비위원회</h1>

        <ul css={committeeList}>
          {COMMITTEE.map((item) => {
            const { id, name, team } = item;
            return (
              <li css={listItem} key={id}>
                <h2>{team}</h2>
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

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
  display: grid;
  grid-template-columns: repeat(4, 7.3rem);
  grid-gap: 2rem calc(100% / 23.43);

  margin-top: 4rem;
`;

const listItem = css`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;

  h2 {
    color: ${colors.gray500};

    ${fonts.mobile_cap_reg_12};
  }

  p {
    color: ${colors.gray900};

    ${fonts.mobile_body_semi_14};
  }
`;
