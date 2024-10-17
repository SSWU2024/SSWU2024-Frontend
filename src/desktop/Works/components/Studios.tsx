import { css } from '@emotion/react';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { STUDIO_DETAILS } from '../../../constants/studioDetail';
import { colors, fonts } from '../../../styles/theme';
import HoveredStudioImg from './HoveredStudioImg';
import HoveredStudioInfo from './HoveredStudioInfo';

const Studios = () => {
  const [hoveredStudio, setHoveredStudio] = useState('');

  return (
    <article
      css={totalStudioContainer}
      onMouseLeave={() => setHoveredStudio('')}
    >
      {STUDIO_DETAILS.map((detail) => {
        const { id, studio, advisor, description, imgsrc, url } = detail;
        const isHoveredStudio = studio === hoveredStudio;

        return (
          <React.Fragment key={id}>
            {isHoveredStudio && <HoveredStudioImg imgsrc={imgsrc} />}
            <article css={studioContainer}>
              <Link
                to={url}
                state={{ id, studio, advisor, description }}
                css={studioName(isHoveredStudio)}
                onMouseEnter={() => setHoveredStudio(studio)}
              >
                {studio}
              </Link>

              {isHoveredStudio && (
                <HoveredStudioInfo description={description} />
              )}
            </article>
          </React.Fragment>
        );
      })}
    </article>
  );
};

export default Studios;

const totalStudioContainer = css`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  row-gap: calc(100vh / 22.5);
`;

const studioContainer = css`
  display: flex;
  align-items: center;
  position: relative;
`;

const studioName = (isHoveredStudio: boolean) => css`
  min-width: 22.9rem;

  color: ${isHoveredStudio ? colors.pink300 : colors.gray900};
  ${isHoveredStudio ? fonts.desktop_title_semi_24 : fonts.desktop_title_reg_24};
`;
