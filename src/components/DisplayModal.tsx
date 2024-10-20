import { css } from '@emotion/react';
import { useEffect } from 'react';
import { IcDone, IcLeftArrow, IcRightArrow } from '../assets';
import { imageType } from '../mobile/Display/types/imageType';
import ModalPortal from './ModalPortal';

interface modalProps {
  imgId: number;
  studioImageList?: Array<imageType>;
  changeClickedImgId: (imgId: number) => void;
  closeModal: () => void;
}

const DisplayModal = ({
  imgId: clickedImgId,
  studioImageList,
  changeClickedImgId,
  closeModal,
}: modalProps) => {
  const { imgPath } =
    studioImageList?.filter((img) => img.imgId === clickedImgId)[0] || {};

  const handleClickBg = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleClickArrow = (arrow: string, imgId: number) => {
    if (studioImageList) {
      const isPrevBtnClicked = arrow === 'left';
      const firstImgId = studioImageList[0].imgId;
      const lastIdx = studioImageList.length - 1;
      const lastImgId = studioImageList[lastIdx].imgId;

      if (isPrevBtnClicked) {
        const changedImgId = imgId === firstImgId ? lastImgId : imgId - 1;
        changeClickedImgId(changedImgId);
      } else {
        const changedImgId = imgId === lastImgId ? firstImgId : imgId + 1;
        changeClickedImgId(changedImgId);
      }
    }
  };

  useEffect(() => {
    const scrollY = window.scrollY;

    document.body.style.cssText = `
      position: fixed; 
      top: -${scrollY}px;
      overflow-y: hidden;
      `;

    return () => {
      document.body.style.cssText = '';
      window.scrollTo({
        top: scrollY,
        behavior: 'instant',
      });
    };
  }, []);

  return (
    <ModalPortal>
      <section css={background} onClick={handleClickBg}>
        <div css={closeBtn} onClick={closeModal}>
          <IcDone />
        </div>

        <article css={imgContainer} onClick={handleClickBg}>
          <IcLeftArrow
            css={arrow('left')}
            onClick={() => handleClickArrow('left', clickedImgId)}
          />
          <img src={imgPath} alt="스튜디오 이미지" css={studioImg} />
          <IcRightArrow
            css={arrow('right')}
            onClick={() => handleClickArrow('right', clickedImgId)}
          />
        </article>
      </section>
    </ModalPortal>
  );
};

export default DisplayModal;

const background = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;

  width: 100dvw;
  height: 100dvh;

  /* gray900 opacity 80% */
  background-color: rgb(31 27 28 / 80%);
`;

const closeBtn = css`
  position: absolute;
  top: calc(100vh / 50.625);
  right: calc(100% / 90);
`;

const imgContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

const arrow = (direction: string) => css`
  ${direction === 'left'
    ? css`
        margin-right: calc(100% / 60);
      `
    : css`
        margin-left: calc(100% / 60);
      `}
`;

const studioImg = css`
  width: calc(100% / 1.1823);
  height: 100%;
`;
