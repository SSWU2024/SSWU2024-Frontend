import { css } from '@emotion/react';
import React from 'react';
import { WorkImageProps } from '../../../mobile/WorkDetail/types/WorkDetailType';

const WorkImage = ({ images }: WorkImageProps) => {
  return (
    <div css={imageSection}>
      {images &&
        images.map((image) => {
          const { sort, imgPath, fileFormat } = image;

          const isVideo = fileFormat === 'video';
          const splitedUrl = imgPath.split('/');
          const specialId = splitedUrl[splitedUrl.length - 2];
          const lastUrl = splitedUrl.pop();
          const isYoutubeUrl = splitedUrl?.includes('watch');
          const videoId =
            isVideo &&
            (isYoutubeUrl
              ? lastUrl?.split('?')[1].split('=')[1]
              : lastUrl?.split('?')[0]);
          const videoSrc = isYoutubeUrl
            ? `https://www.youtube.com/embed/${videoId}`
            : specialId.length === 10
              ? `https://player.vimeo.com/video/${specialId}?h=${videoId}`
              : `https://player.vimeo.com/video/${videoId}`;

          return (
            <React.Fragment key={sort + imgPath}>
              {isVideo ? (
                <div css={videoContainer}>
                  <iframe css={workVideo} src={videoSrc} />
                </div>
              ) : (
                <img src={imgPath} css={imageCss} />
              )}
            </React.Fragment>
          );
        })}
    </div>
  );
};

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

const videoContainer = css`
  position: relative;

  /* 16:9 비율 */
  padding-top: 56.25%;
`;

const workVideo = css`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  border: none;
`;
