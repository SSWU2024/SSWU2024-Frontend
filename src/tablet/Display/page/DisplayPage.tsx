import { css } from '@emotion/react';
import { useState } from 'react';
import DisplayModal from '../../../components/DisplayModal';
import useGetDisplay from '../../../libs/hooks/useGetDisplay';
import { imageType } from '../../../mobile/Display/types/imageType';
import { colors, fonts } from '../../../styles/theme';
import PageLayout from '../../Common/PageLayout';

const DisplayPage = () => {
  const [isOpen, setIsOpen] = useState(false); // 모달 open / close 관리

  const [selectImg, setSelectedImg] = useState(0);
  const [studioImageList, setStudioImageList] = useState<Array<imageType>>();

  const { display, isLoading } = useGetDisplay();
  const studio1ImageList = !isLoading && display.data[0].images;
  const studio2ImageList = !isLoading && display.data[1].images;

  const GAON1 = studio1ImageList && studio1ImageList.slice(0, 3);
  const GAON2 = studio1ImageList && studio1ImageList.slice(3, 5);
  const GAON3 = studio1ImageList && studio1ImageList.slice(5);

  const PYROOM1 = studio2ImageList && studio2ImageList.slice(0, 3);
  const PYROOM2 = studio2ImageList && studio2ImageList.slice(3, 5);
  const PYROOM3 = studio2ImageList && studio2ImageList.slice(5);

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
    <>
      {!isLoading && (
        <PageLayout>
          {isOpen && (
            <DisplayModal
              imgId={selectImg}
              studioImageList={studioImageList}
              changeClickedImgId={changeClickedImgId}
              closeModal={closeModal}
            />
          )}

          <section css={displayCss}>
            <div css={studioCss}>
              <div css={textCss}>
                <h1 css={titleText}>가온전시실</h1>
                <p css={subText}>
                  디자인씽킹스튜디오, 시각디자인스튜디오,
                  정보경험디자인스튜디오, 공간디자인스튜디오
                </p>
              </div>
              <ul css={imgList}>
                <li css={col1Css}>
                  {GAON1.map((item: imageType) => {
                    const { imgId, imgPath } = item;
                    return (
                      <img
                        key={imgId}
                        src={imgPath}
                        alt="가온전시실 이미지"
                        onClick={() => onClickImage(imgId, studio1ImageList)}
                      />
                    );
                  })}
                </li>
                <li css={col2Css}>
                  {GAON2.map((item: imageType) => {
                    const { imgId, imgPath } = item;
                    return (
                      <img
                        key={imgId}
                        src={imgPath}
                        alt="가온전시실 이미지"
                        onClick={() => onClickImage(imgId, studio1ImageList)}
                      />
                    );
                  })}
                </li>
                <li css={col3Css}>
                  {GAON3.map((item: imageType) => {
                    const { imgId, imgPath } = item;
                    return (
                      <img
                        key={imgId}
                        src={imgPath}
                        alt="가온전시실 이미지"
                        onClick={() => onClickImage(imgId, studio1ImageList)}
                      />
                    );
                  })}
                </li>
              </ul>
            </div>

            <div css={studioCss}>
              <div css={textCss}>
                <h1 css={titleText}>파이룸</h1>
                <p css={subText}>
                  모션그래픽스스튜디오, 공간연출디자인스튜디오
                </p>
              </div>
              <ul css={imgList}>
                <li css={col1Css}>
                  {PYROOM1.map((item: imageType) => {
                    const { imgId, imgPath } = item;
                    return (
                      <img
                        key={imgId}
                        src={imgPath}
                        alt="파이룸 이미지"
                        onClick={() => onClickImage(imgId, studio2ImageList)}
                      />
                    );
                  })}
                </li>
                <li css={col2Css}>
                  {PYROOM2.map((item: imageType) => {
                    const { imgId, imgPath } = item;
                    return (
                      <img
                        key={imgId}
                        src={imgPath}
                        alt="파이룸 이미지"
                        onClick={() => onClickImage(imgId, studio2ImageList)}
                      />
                    );
                  })}
                </li>
                <li css={col3Css}>
                  {PYROOM3.map((item: imageType) => {
                    const { imgId, imgPath } = item;
                    return (
                      <img
                        key={imgId}
                        src={imgPath}
                        alt="파이룸 이미지"
                        onClick={() => onClickImage(imgId, studio2ImageList)}
                      />
                    );
                  })}
                </li>
              </ul>
            </div>
          </section>
        </PageLayout>
      )}
    </>
  );
};

export default DisplayPage;

const displayCss = css`
  display: flex;
  gap: 6rem;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding: 10.4rem 2.4rem 10rem;
`;

const studioCss = css`
  display: flex;
  gap: 3.2rem;
  flex-direction: column;
`;

const textCss = css`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
`;

const titleText = css`
  color: ${colors.gray900};

  ${fonts.desktop_title_semi_24};
`;

const subText = css`
  color: ${colors.gray500};

  ${fonts.desktop_body_reg_16};
`;

const imgList = css`
  display: flex;
  gap: 0.8rem;

  width: 100%;
  min-height: 44.8rem;
`;

const col1Css = css`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  width: calc(100% / 4);

  img:nth-of-type(1) {
    min-height: 13.909rem;

    height: calc(70vh / 3.15);
    object-fit: cover;
  }

  img:nth-of-type(2) {
    min-height: 14.236rem;

    height: calc(70vh / 3.15);
    object-fit: cover;
  }

  img:nth-of-type(3) {
    min-height: 15.055rem;

    height: calc(70vh / 2.98);
    object-fit: cover;
  }
`;

const col2Css = css`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  width: calc(100% / 2);

  img:first-of-type {
    min-height: 25.2rem;

    height: calc(70vh / 1.77);
    object-fit: cover;
  }

  img:last-of-type {
    min-height: 18.7rem;

    height: calc(70vh / 2.39);
    object-fit: cover;
  }
`;

const col3Css = css`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  width: calc(100% / 4);

  img:nth-of-type(1) {
    min-height: 22.4rem;

    height: calc(70vh / 2);
    object-fit: cover;
  }

  img:nth-of-type(2) {
    min-height: 21.6rem;

    height: calc(70vh / 2.07);
    object-fit: cover;
  }
`;
