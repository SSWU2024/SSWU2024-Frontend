import { css } from '@emotion/react';
import React from 'react';
import { DetailImagesProps } from '../types/workDetailTypes';

const DetailImages = ({ images }: DetailImagesProps) => {
  return (
    <article css={workImages}>
      {images.map((image) => {
        const { sort, imgPath, fileFormat } = image;
        const isVideo = fileFormat === 'video';
        const splitedUrl = imgPath.split('/').pop();
        const isYoutubeUrl = splitedUrl?.includes('watch');
        const videoId =
          isVideo &&
          (isYoutubeUrl
            ? splitedUrl?.split('?')[1].split('=')[1]
            : splitedUrl?.split('?')[0]);

        return (
          <React.Fragment key={sort + imgPath}>
            {isVideo ? (
              <div css={videoContainer}>
                <iframe
                  css={workVideo}
                  src={
                    isYoutubeUrl
                      ? `https://www.youtube.com/embed/${videoId}`
                      : `https://player.vimeo.com/video/${videoId}`
                  }
                />
              </div>
            ) : (
              <img src={imgPath} css={workImg} />
            )}
          </React.Fragment>
        );
      })}
    </article>
  );
};

export default DetailImages;

const workImages = css`
  padding: 0 calc(100% / 14.4);
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

const workImg = css`
  width: 100%;

  object-fit: cover;
`;
