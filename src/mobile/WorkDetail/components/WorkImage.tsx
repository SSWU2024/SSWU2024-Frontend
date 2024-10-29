import { css } from '@emotion/react';
import { WorkImageProps } from '../types/WorkDetailType';

const WorkImage = ({ images }: WorkImageProps) => {
  return (
    <div css={imageSection}>
      {images &&
        images.map((item) => {
          const { imgPath } = item;

          return <img src={imgPath} key={imgPath} css={imageCss} />;
        })}
    </div>
  );
};

export default WorkImage;

const imageSection = css`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0 1.6rem;
`;

const imageCss = css`
  width: 100%;
`;
