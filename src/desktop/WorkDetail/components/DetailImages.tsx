import { css } from '@emotion/react';

interface DetailImagesProps {
  images: Array<{
    sort: number;
    imgPath: string;
  }>;
}

const DetailImages = ({ images }: DetailImagesProps) => {
  return (
    <article css={workImages}>
      {images.map((image) => {
        const { sort, imgPath } = image;
        return <img key={sort} src={imgPath} css={workImg} />;
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
