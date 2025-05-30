import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { colors, fonts } from '../../../styles/theme';
import { updateStudioUrl } from '../../../utils/updateStudioUrl';

interface imagesType {
  sort: number;
  imgPath: string;
  fileFormat: string;
}

interface workInfo {
  workId: number;
  workTitle: string;
  workEngTitle: string;
  studioNm: string;
  images: imagesType[];
}

interface worksProps {
  works: workInfo[];
}

const Works = (props: worksProps) => {
  const { works } = props;

  return (
    <section css={workListCss}>
      {works &&
        works.map((work) => {
          const { workId, workTitle, workEngTitle, studioNm, images } = work;
          const studioUrl = updateStudioUrl(studioNm);
          const url = workEngTitle.replace('?', '').trim().split(' ').join('-');

          return (
            <Link
              to={`${studioUrl}/${url}-${workId}`}
              key={workId}
              css={workContainer}
              state={{ workId }}
            >
              <img
                css={imgCss}
                src={images.length > 1 ? images[1].imgPath : images[0].imgPath}
                alt={`${workTitle} 썸네일`}
              />

              <div css={textContainer}>
                <h1 css={textCss('title')}>
                  {workTitle.replace(/\\n/g, '\n')}
                </h1>
                <h2 css={textCss('studio')}>{studioNm}</h2>
              </div>
            </Link>
          );
        })}
    </section>
  );
};

export default Works;

const workListCss = css`
  display: flex;

  width: 100%;

  @media (width < 768px) {
    gap: 1.2rem;
  }

  @media (768px <=width < 1440px) {
    gap: 2rem;

    padding-right: 39.2rem;
  }
`;

const workContainer = css`
  display: flex;
  flex-direction: column;

  @media (width < 768px) {
    gap: 1.2rem;

    width: 48.5%;

    max-width: 16.8rem;
  }

  @media (768px <=width < 1440px) {
    gap: 1.4rem;

    width: 48.5%;
    max-width: 30.6rem;
    min-width: 16.8rem;
  }
`;

const imgCss = css`
  width: 100%;

  object-fit: cover;
`;

const textContainer = css`
  display: flex;
  gap: 0.2rem;
  flex-direction: column;

  color: ${colors.gray900};
`;

const textCss = (variant: 'title' | 'studio') => css`
  white-space: pre-wrap;

  @media (width < 768px) {
    ${variant === 'title'
      ? fonts.mobile_body_semi_14
      : fonts.mobile_body_reg_14};
  }

  @media (768px <= width < 1440px) {
    ${variant === 'title'
      ? fonts.tablet_body_semi_16
      : fonts.mobile_body_reg_14};
  }
`;
