import { css } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';

import { Link } from 'react-router-dom';
import { WorkType } from '../../../desktop/Studio/types/studioType';
import useGetStudioWorks from '../../../libs/hooks/useGetStudioWorks';

interface WorkListProps {
  id: number;
}

const WorkList = ({ id }: WorkListProps) => {
  const images = [
    {
      imgPath:
        'https://i.pinimg.com/236x/13/26/c1/1326c1f3ec2a54bfc0893a0c582360de.jpg',
      fileFormat: 'jpeg',
    },
    {
      imgPath:
        'https://i.pinimg.com/originals/a0/89/e7/a089e759d7e713b4eba7b6cda87b6c8a.gif',
      fileFormat: 'gif',
    },
  ];

  const { totalWorks, isLoading } = useGetStudioWorks(id);
  const { works } = !isLoading && totalWorks.data;

  return (
    <ul css={listContainer}>
      {!isLoading &&
        works.map((work: WorkType) => {
          // const { workId, workTitle, designers, images } = work;
          const { workId, workTitle, designers } = work;
          const { imgPath } = images.length === 2 ? images[1] : images[0];

          const designerList = designers
            .map((designer) => designer.name)
            .join(' ');

          return (
            <Link
              key={workId}
              css={listItem}
              to={`${workId}`}
              state={{ workId: workId }}
            >
              <div css={imgBox}>
                <img
                  css={imgCss}
                  src={imgPath}
                  alt={`${workTitle}의 썸네일 이미지`}
                />
              </div>
              <div css={textCss}>
                <h1 css={title}>{workTitle}</h1>
                <h2 css={name}>{designerList}</h2>
              </div>
            </Link>
          );
        })}
    </ul>
  );
};

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
