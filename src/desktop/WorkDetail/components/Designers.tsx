import { css } from '@emotion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { colors, fonts } from '../../../styles/theme';
import { renderEngName } from '../../../utils/renderEngName';
import { updateStudioUrl } from '../../../utils/updateStudioUrl';
import { DesignersProps } from '../types/workDetailTypes';

const Designers = ({ designers, currentWorkId }: DesignersProps) => {
  const [hoveredImg, setHoveredImg] = useState({
    hoveredTitle: '',
    hoveredName: '',
  });

  const { hoveredName, hoveredTitle } = hoveredImg;

  const handleHoverImg = (workTitle: string, name: string) => {
    setHoveredImg({
      hoveredTitle: workTitle.replace(/\\n/g, '\n'),
      hoveredName: name,
    });
  };

  const handleLeaveImg = () => {
    setHoveredImg({
      hoveredTitle: '',
      hoveredName: '',
    });
  };

  return (
    <article css={designedByContainer}>
      <p css={designedByTitle}>Designed by</p>
      <div css={totalDesigners}>
        {designers.map((designer) => {
          const { name, engName, email, works } = designer;
          const { workId, workTitle, workEngTitle, studioNm, images } =
            works.length === 2
              ? works.filter((work) => work.workId !== currentWorkId)[0]
              : works[0];

          const imgPath = images.find(
            (image) => image.fileFormat !== 'gif',
          )?.imgPath;

          const isHoveredImg =
            hoveredTitle === workTitle && hoveredName === name;
          const studioUrl = updateStudioUrl(studioNm);
          const workUrl = workEngTitle.trim().split(' ').join('-');
          const url = `${studioUrl}/${workUrl}`;
          const newEngName = renderEngName(engName);

          return (
            <article key={workId + name} css={designerInfoContainer}>
              <Link to={`${url}-${workId}`}>
                <div css={designerInfo}>
                  <p css={designerKrName}>{name}</p>
                  <p css={designerEngName}>{newEngName}</p>
                  <p css={designerEmail}>{email}</p>
                </div>
                <img
                  src={imgPath}
                  css={designersWork(isHoveredImg)}
                  onMouseEnter={() => handleHoverImg(workTitle, name)}
                  onMouseLeave={handleLeaveImg}
                />
              </Link>

              {isHoveredImg && (
                <div css={hoveredInfo}>
                  <p css={hoveredWorkTitle}>{workTitle}</p>
                  <p css={hoveredStudioNm}>{studioNm}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </article>
  );
};

export default Designers;

const designedByContainer = css`
  display: flex;
  gap: calc(100vh / 20.25);
  flex-direction: column;

  margin: calc(100vh / 8.1) 0 calc(100vh / 5.79) calc(100% / 24);
`;

const designedByTitle = css`
  color: ${colors.gray900};
  ${fonts.desktop_title_semi_28};
`;

const totalDesigners = css`
  display: flex;
  gap: calc(100% / 45);
  align-items: center;
`;

const designerInfoContainer = css`
  display: flex;
  gap: calc(100vh / 50.6);
  justify-content: center;
  flex-direction: column;
  position: relative;

  min-width: 30.6rem;

  width: calc(100% / 4.7);
`;

const designerInfo = css`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-bottom: calc(100vh / 50.625);
`;

const designerKrName = css`
  margin-bottom: calc(100vh / 202.5);

  color: ${colors.gray900};
  ${fonts.desktop_body_semi_20};
`;

const designerEngName = css`
  margin-bottom: calc(100vh / 101.25);

  color: ${colors.gray900};
  ${fonts.desktop_body_reg_18};
`;

const designerEmail = css`
  color: ${colors.gray500};
  ${fonts.desktop_body_reg_16};
`;

const designersWork = (isHoveredImg: boolean) => css`
  min-height: 30.6rem;

  width: 100%;
  aspect-ratio: 1 / 1;

  object-fit: cover;

  ${isHoveredImg &&
  css`
    filter: brightness(0.5);
  `}
`;

const hoveredInfo = css`
  display: flex;
  gap: calc(100vh / 202.5);
  flex-direction: column;
  position: absolute;
  bottom: 1.6rem;
  left: 1.6rem;
`;

const hoveredWorkTitle = css`
  color: ${colors.white};

  white-space: pre-wrap;

  ${fonts.desktop_body_semi_20};
`;

const hoveredStudioNm = css`
  color: ${colors.white};
  ${fonts.desktop_body_reg_18};
`;
