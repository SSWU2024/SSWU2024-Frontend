import { css } from '@emotion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useGetStudioWorks from '../../../libs/hooks/useGetStudioWorks';
import { colors, fonts } from '../../../styles/theme';
import { TotalWorksProps, WorkType } from '../types/studioType';

const TotalWorks = ({ id }: TotalWorksProps) => {
  const { totalWorks, isLoading } = useGetStudioWorks(id);
  const { works } = !isLoading && totalWorks.data;

  const [hoveredImg, setHoveredImg] = useState({
    hoveredSrc: '',
    hovredTitle: '',
  });

  const { hoveredSrc, hovredTitle } = hoveredImg;

  const handleHoverImg = (
    images: Array<{ imgPath: string; fileFormat: string }>,
    title: string,
  ) => {
    if (images.length > 1) {
      const { imgPath } = images[1];
      setHoveredImg({
        hoveredSrc: imgPath,
        hovredTitle: title,
      });
    } else {
      setHoveredImg({
        hoveredSrc: '',
        hovredTitle: title,
      });
    }
  };

  const handleLeaveImg = () => {
    setHoveredImg({
      hoveredSrc: '',
      hovredTitle: '',
    });
  };

  return (
    <article css={worksContainer}>
      {!isLoading &&
        works.map((work: WorkType) => {
          const { workId, workTitle, images, designers, workEngTitle } = work;
          const { imgPath } = images[0];
          const isHoveredGif = hoveredSrc && workTitle === hovredTitle;
          const isHoveredImg = workTitle === hovredTitle;
          const url = workEngTitle.replace('?', '').trim().split(' ').join('-');

          return (
            <article
              key={workTitle}
              css={workContainer}
              onMouseEnter={() => handleHoverImg(images, workTitle)}
              onMouseLeave={handleLeaveImg}
            >
              <Link to={`${url}-${workId}`}>
                <img src={isHoveredGif ? hoveredSrc : imgPath} css={workImg} />
                <p css={title(isHoveredImg)}>
                  {workTitle.replace(/\\n/g, '\n')}
                </p>
                <div css={designerNameContainer}>
                  {designers.map((designer, idx) => {
                    const { name } = designer;
                    return (
                      <p key={name + idx} css={designerName(isHoveredImg)}>
                        {name}
                      </p>
                    );
                  })}
                </div>
              </Link>
            </article>
          );
        })}
    </article>
  );
};

export default TotalWorks;

const worksContainer = css`
  display: grid;
  gap: calc(100vh / 15.58) calc(100% / 41.25);
  grid-template-columns: repeat(4, 1fr);
`;

const workContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const workImg = css`
  min-width: 30.6rem;
  min-height: 30.6rem;

  width: 100%;
  aspect-ratio: 1 / 1;

  margin-bottom: calc(100vh / 67.5);

  object-fit: cover;
`;

const title = (isHoveredImg: boolean) => css`
  margin-bottom: calc(100vh / 202.5);

  color: ${isHoveredImg ? colors.pink300 : colors.gray900};

  ${fonts.desktop_body_semi_20};
  white-space: pre-wrap;
`;

const designerNameContainer = css`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const designerName = (isHoveredImg: boolean) => css`
  color: ${isHoveredImg ? colors.pink300 : colors.gray900};
  ${fonts.desktop_body_reg_18};
`;
