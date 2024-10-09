import { css } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';

import { DESIGNER_TOTAL_WORKS } from '../../constants/WORKS';

function WorkList() {
  const workList = DESIGNER_TOTAL_WORKS.data.works;

  return (
    <ul css={listContainer}>
      {workList.map((work) => {
        const { workId, workTitle, images, designers } = work;
        const imgSrc =
          images.length === 2 ? images[1].imgPath : images[0].imgPath;

        const designerList = designers
          .map((designer) => designer.name)
          .join(' ');

        return (
          <li key={workId} css={listItem} onClick={() => console.log(workId)}>
            <div css={imgBox}>
              <img css={imgCss} src={imgSrc} alt="" />
            </div>
            <div css={textCss}>
              <h1 css={title}>{workTitle}</h1>
              <h2 css={name}>{designerList}</h2>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default WorkList;

const listContainer = css`
  display: flex;

  /* 모바일 */
  @media (width < 768px) {
    column-gap: 1.2rem;
  }

  /* 태블릿 */
  @media (768px <= width < 1440px) {
    column-gap: 1.6rem;
  }

  row-gap: 3.2rem;

  flex-wrap: wrap;

  width: 100%;
`;

const listItem = css`
  /* 모바일 (2 컬럼) */
  @media (width <= 552px) {
    flex: 0 0 calc(50% - 0.6rem);
  }

  /* 모바일 (3 컬럼) */
  @media (552px<= width < 768px) {
    flex: 0 0 calc(33.3333% - 0.8rem);
  }

  /* 태블릿 (4 컬럼) */
  @media (768px <= width < 1440px) {
    flex: 0 0 calc(25% - 1.2rem);
  }

  display: flex;
  gap: 1.2rem;
  flex-direction: column;

  height: auto;
`;

const imgBox = css`
  position: relative;

  width: 100%;

  ::after {
    display: block;
    content: '';

    padding-bottom: 100%;
  }
`;

const imgCss = css`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const textCss = css`
  display: flex;
  gap: 0.2rem;
  flex-direction: column;

  color: ${colors.gray900};
`;

const title = css`
  /* 모바일 */
  @media (width < 768px) {
    ${fonts.mobile_body_semi_14};
  }

  /* 태블릿 */
  @media (768px <= width < 1440px) {
    ${fonts.tablet_body_semi_16};
  }
`;

const name = css`
  ${fonts.mobile_body_reg_14};
`;
