import { css } from '@emotion/react';
import { DetailImagesProps } from '../types/workDetailTypes';

const DetailImages = ({ images }: DetailImagesProps) => {
  return (
    <article css={workImages}>
      {images.map((image) => {
        const { sort, imgPath } = image;
        return <img key={sort + imgPath} src={imgPath} css={workImg} />;
      })}
    </article>
  );
};

export default DetailImages;

const workImages = css`
  padding: 0 calc(100% / 14.4);
`;

const workImg = css`
  width: 100%;

  object-fit: cover;
`;
