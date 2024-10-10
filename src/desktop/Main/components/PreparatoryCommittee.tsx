import { css } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';
import { ImgBg1Web } from '../../assets/image';
import { COMMITTEE } from '../constants/committeeConst';

const PreparatoryCommittee = () => {
  return (
    <section css={PreparatoryCommitteeContainer}>
      <img src={ImgBg1Web} css={bg} />
      <span css={title}>졸업전시준비위원회</span>
      <article css={committeeContainer}>
        {COMMITTEE.map((committee, idx) => {
          const { department, name } = committee;
          return (
            <div key={name + idx} css={personContainer}>
              <p css={committeeDepartment}>{department}</p>
              <p css={committeeName}>{name}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default PreparatoryCommittee;

const PreparatoryCommitteeContainer = css`
  display: flex;
  gap: calc(100vh / 10.125);
  flex-direction: column;

  padding: calc(100vh / 4.05) calc(100% / 1.5912) calc(100vh / 3.6818)
    calc(100% / 24);
`;

const bg = css`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;

  width: 100%;
  height: calc(100vh - 10.4rem);
`;

const title = css`
  color: ${colors.gray900};
  ${fonts.desktop_title_semi_24};
`;

const committeeContainer = css`
  display: grid;
  gap: calc(100vh / 16.875) calc(100% / 32.7273);
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const personContainer = css`
  display: flex;
  gap: calc(100vh / 101.25);
  flex-direction: column;

  min-width: 8.5rem;
`;

const committeeDepartment = css`
  color: ${colors.gray500};
  ${fonts.desktop_cap_reg_14};
`;

const committeeName = css`
  color: ${colors.gray900};
  ${fonts.desktop_body_semi_20};
`;
