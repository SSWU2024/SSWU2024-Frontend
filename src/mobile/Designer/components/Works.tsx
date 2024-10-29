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
          const url = workEngTitle.trim().split(' ').join('-');

          return (
            <Link
              to={`${studioUrl}/${url}`}
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
                <h1 css={textCss('title')}>{workTitle}</h1>
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
  }
`;

const workContainer = css`
  display: flex;
  flex-direction: column;

  @media (width < 768px) {
    gap: 1.2rem;

    width: 16.6rem;
    height: 21.8rem;
  }

  @media (768px <=width < 1440px) {
    gap: 1.4rem;

    width: 16.8rem;
    height: 22.2rem;
  }
`;

const imgCss = css`
  @media (width < 768px) {
    width: 16.6rem;
    height: 16.6rem;
  }

  @media (768px <=width < 1440px) {
    width: 16.8rem;
    height: 16.8rem;
  }

  object-fit: cover;
`;

const textContainer = css`
  display: flex;
  flex-direction: column;

  color: ${colors.gray900};
`;

const textCss = (variant: 'title' | 'studio') => css`
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
