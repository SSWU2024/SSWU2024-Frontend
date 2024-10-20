import { css } from '@emotion/react';
import { HoveredStudioImgProps } from '../types/worksType';

const HoveredStudioImg = ({ imgsrc }: HoveredStudioImgProps) => {
  return <img css={imgContainer} src={imgsrc} />;
};

export default HoveredStudioImg;

const imgContainer = css`
  position: absolute;
  right: calc(100% / 24);
  bottom: calc(100vh / 16.875);

  width: auto;
  height: calc(100vh / 2.2689);

  min-width: 30.6rem;
  min-height: 35.7rem;

  object-fit: contain;
`;
