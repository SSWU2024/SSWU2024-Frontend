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
  gap: 8rem;
  flex-direction: column;

  padding: 20rem 0 23.6rem 6rem;
`;

const bg = css`
  position: absolute;
  top: 5.2rem;
  left: 0;
  z-index: -1;
`;

const title = css`
  color: ${colors.gray900};
  ${fonts.desktop_title_semi_24};
`;

const committeeContainer = css`
  display: grid;
  gap: 4.8rem 4.4rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const personContainer = css`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
`;

const committeeDepartment = css`
  color: ${colors.gray500};
  ${fonts.desktop_cap_reg_14};
`;

const committeeName = css`
  color: ${colors.gray900};
  ${fonts.desktop_body_semi_20};
`;
