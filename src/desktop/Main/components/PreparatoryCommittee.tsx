import { css } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';
import { ImgBg1Web } from '../../assets/image';

const COMMITTEE = [
  {
    department: '졸준위원장',
    name: '황지수',
  },
  {
    department: '행정팀',
    name: '남수빈',
  },
  {
    department: '행정팀',
    name: '차예린',
  },
  {
    department: '',
    name: '',
  },
  {
    department: '디자인팀장',
    name: '신수빈',
  },
  {
    department: '디자인팀',
    name: '김민지',
  },
  {
    department: '디자인팀',
    name: '윤아현',
  },
  {
    department: '디자인팀',
    name: '황태경',
  },

  {
    department: '홍보콘텐츠팀장',
    name: '한소연',
  },
  {
    department: '홍보콘텐츠팀',
    name: '유해나',
  },
  {
    department: '홍보콘텐츠팀',
    name: '정유진',
  },
  {
    department: '',
    name: '',
  },
];

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
  top: 5.2rem;
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
