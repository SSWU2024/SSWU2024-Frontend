import { css } from '@emotion/react';
import { IcDone } from '../assets';
import { imageType } from '../mobile/Display/types/imageType';
import ModalPortal from './ModalPortal';

interface modalProps {
  imgId: number;
  studio1ImageList?: imageType[] | undefined;
  studio2ImageList?: imageType[] | undefined;
  closeModal: () => void;
}

const DisplayModal = (props: modalProps) => {
  const { imgId, studio1ImageList, studio2ImageList, closeModal } = props;
  console.log(imgId);
  console.log(studio1ImageList);
  console.log(studio2ImageList);

  return (
    <ModalPortal>
      <div css={background}>
        <IcDone onClick={closeModal} />
        {/* 스와이퍼 넣기 */}
      </div>
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
