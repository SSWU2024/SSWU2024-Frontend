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

  @media (375px <= width <= 432px) {
    gap: 1rem;
  }

  @media (432px < width <= 552px) {
    gap: 1.2rem;
  }

  @media (552px < width <= 582px) {
    gap: 1rem;
  }

  @media (582px < width <=682px) {
    gap: 1.1rem;
  }

  @media (682px < width <=767px) {
    gap: 1.3rem;
  }

  @media (width >= 768px) {
    gap: 1.2rem;
  }

  flex-wrap: wrap;

  width: 100%;
`;

const listItem = css`
  @media (375px <= width <= 552px) {
    width: 48.5%;
    height: auto;
  }

  @media (552px<= width < 768px) {
    width: 32%;
  }

  @media (width> 768px) {
    width: 24%;
  }

  display: flex;
  gap: 1.2rem;
  flex-direction: column;

  padding-bottom: 3.2rem;
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
  ${fonts.mobile_body_semi_14};
`;

const name = css`
  ${fonts.mobile_body_reg_14};
`;
