import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import DisplayModal from '../../../components/DisplayModal';
import useGetDisplay from '../../../libs/hooks/useGetDisplay';
import { imageType } from '../../../mobile/Display/types/imageType';
import PageLayout from '../../Common/PageLayout';
import { ImgBg2Web } from '../../assets/image';
import DisplayImages from '../components/DisplayImages';
import DisplayInfo from '../components/DisplayInfo';
import { STUDIO_LIST } from '../constants/studioList';

const DisplayPages = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const { display, isLoading } = useGetDisplay();
  const displays = !isLoading && display.data;

  const [isOpen, setIsOpen] = useState(false);
  const [selectImg, setSelectedImg] = useState(0);
  const [studioImageList, setStudioImageList] = useState<Array<imageType>>();

  const changeClickedImgId = (imgId: number) => {
    setSelectedImg(imgId);
  };

  /** 이미지 클릭 시 모달 oepn */
  const onClickImage = (imgId: number, images: Array<imageType>) => {
    setStudioImageList(images);
    changeClickedImgId(imgId);
    setIsOpen(true);
  };

  /** 모달 내 x 버튼 클릭 시 모달 close (props) */
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <PageLayout>
      <section css={displaysContainer(ImgBg2Web)}>
        {isOpen && (
          <DisplayModal
            imgId={selectImg}
            studioImageList={studioImageList}
            changeClickedImgId={changeClickedImgId}
            closeModal={closeModal}
          />
        )}

        {!isLoading &&
          displays.map(
            (display: {
              displayId: number;
              displayNm: string;
              images: Array<imageType>;
            }) => {
              const { displayId, displayNm, images } = display;
              const studioList =
                displayId === 1 ? STUDIO_LIST[0] : STUDIO_LIST[1];

              return (
                <article key={displayId} css={displayContainer}>
                  <DisplayInfo name={displayNm} studioList={studioList} />
                  <DisplayImages images={images} onClickImage={onClickImage} />
                </article>
              );
            },
          )}
      </section>
    </PageLayout>
  );
};

export default DisplayPages;

const displaysContainer = (imgUrl: string) => css`
  display: flex;
  gap: calc(100vh / 10.125);
  justify-content: center;
  flex-direction: column;

  padding: calc(100vh / 10.125) calc(100% / 24) calc(100vh / 5.7857);
  margin-top: 5.2rem;

  background-position: top 5.2rem right 0;
  background-size: contain;
  background-image: url(${imgUrl});
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const displayContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
