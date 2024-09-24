import { css } from '@emotion/react';

interface DisplayImagesProps {
  images: Array<{ imgPath: string }>;
}

const DisplayImages = ({ images }: DisplayImagesProps) => {
  const firstColomnImages = images.slice(0, 3);
  const secondColumnImages = images.slice(3, 5);
  const thirdColumnImages = images.slice(5, 7);

  return (
    <>
      <article css={imgContainer}>
        <div css={firstImagesContainer}>
          {firstColomnImages.map((image, idx) => {
            const { imgPath } = image;
            return <img key={idx} src={imgPath} css={img} />;
          })}
        </div>

        <div css={secondImagesContainer}>
          {secondColumnImages.map((image, idx) => {
            const { imgPath } = image;
            return <img key={idx} src={imgPath} css={img} />;
          })}
        </div>

        <div css={thirdImagesContainer}>
          {thirdColumnImages.map((image, idx) => {
            const { imgPath } = image;
            return <img key={idx} src={imgPath} css={img} />;
          })}
        </div>
      </article>
    </>
  );
};

export default DisplayImages;

const imgContainer = css`
  display: flex;
  gap: calc(100% / 180);
`;

const firstImagesContainer = css`
  display: flex;
  gap: calc(100vh / 101.25);
  flex-direction: column;

  width: calc(100% / 4);

  img:nth-of-type(1) {
    min-height: 25.5rem;

    height: calc(100vh / 3.18);
  }

  img:nth-of-type(2) {
    min-height: 26.1rem;

    height: calc(100vh / 3.1034);
  }

  img:nth-of-type(3) {
    min-height: 27.6rem;

    height: calc(100vh / 2.9348);
  }
`;

const secondImagesContainer = css`
  display: flex;
  gap: calc(100vh / 101.25);
  flex-direction: column;
  min-width: 64.4rem;

  width: calc(100% / 2.05);

  img:nth-of-type(1) {
    min-height: 46rem;

    height: calc(100vh / 1.7609);
  }

  img:nth-of-type(2) {
    min-height: 34rem;

    height: calc(100vh / 2.38);
  }
`;

const thirdImagesContainer = css`
  display: flex;
  gap: calc(100vh / 101.25);
  flex-direction: column;

  width: calc(100% / 4);

  img:nth-of-type(1) {
    min-height: 41rem;

    height: calc(100vh / 1.9756);
  }

  img:nth-of-type(2) {
    min-height: 39rem;

    height: calc(100vh / 2.0769);
  }
`;

const img = css`
  width: 100%;
  object-fit: cover;
`;
