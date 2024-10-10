import { css } from '@emotion/react';
import { WorkImageProps } from '../../../mobile/WorkDetail/types/WorkDetailType';

function WorkImage(props: WorkImageProps) {
  const { images } = props;

  return (
    <div css={imageSection}>
      {images.map((item) => {
        const { imgPath } = item;

        return <img src={imgPath} key={imgPath} css={imageCss} />;
      })}
    </div>
  );
}

export default WorkImage;

const imageSection = css`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0 2.4rem;
`;

const imageCss = css`
  width: 100%;
`;
