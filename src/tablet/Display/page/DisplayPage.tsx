import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import DisplayModal from '../../../components/DisplayModal';
import { imageType } from '../../../mobile/Display/types/imageType';
import { DISPLAY } from '../../../mobile/constants/DISPLAY';
import { colors, fonts } from '../../../styles/theme';
import PageLayout from '../../Common/PageLayout';
import { ImgBg2Tablet } from '../../assets/image';

const DisplayPage = () => {
  const [isOpen, setIsOpen] = useState(false); // 모달 open / close 관리

  const selectImg = useRef(0);
  const studio1ImageList = useRef<imageType[]>(); // studio 1 이미지 리스트
  const studio2ImageList = useRef<imageType[]>(); // studio 2 이미지 리스트

  useEffect(() => {
    studio1ImageList.current = DISPLAY[0].images;
    studio2ImageList.current = DISPLAY[1].images;
  }, []);

  const StudioImages1 =
    DISPLAY.find((item) => item.displayId === 1)?.images || [];

  const GAON1 = StudioImages1.slice(0, 3);
  const GAON2 = StudioImages1.slice(3, 5);
  const GAON3 = StudioImages1.slice(5);

  const StudioImages2 =
    DISPLAY.find((item) => item.displayId === 2)?.images || [];
  const PYROOM1 = StudioImages2.slice(0, 3);
  const PYROOM2 = StudioImages2.slice(3, 5);
  const PYROOM3 = StudioImages2.slice(5);

  /** 이미지 클릭 시 모달 oepn */
  const onClickImgage = (imgId: number) => {
    selectImg.current = imgId;
    setIsOpen(true);
    document.body.style.overflow = '';
  };

  /** 모달 내 x 버튼 클릭 시 모달 close (props) */
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'hidden';
  };

  return (
    <PageLayout>
      {isOpen && (
        <DisplayModal
          imgId={selectImg.current}
          studio1ImageList={studio1ImageList.current}
          studio2ImageList={studio2ImageList.current}
          closeModal={closeModal}
        />
      )}

      <section css={displayCss(ImgBg2Tablet)}>
        <div css={studioCss}>
          <div css={textCss}>
            <h1 css={titleText}>가온전시실</h1>
            <p css={subText}>
              디자인씽킹스튜디오, 시각디자인스튜디오,
              <br />
              정보경험디자인스튜디오, 공간연출디자인스튜디오
            </p>
          </div>
          <ul css={imgList}>
            <li css={col1Css}>
              {GAON1.map((item) => {
                const { imgId, imgPath } = item;
                return (
                  <img
                    key={imgId}
                    src={imgPath}
                    alt="가온전시실 이미지"
                    onClick={() => onClickImgage(imgId)}
                  />
                );
              })}
            </li>
            <li css={col2Css}>
              {GAON2.map((item) => {
                const { imgId, imgPath } = item;
                return (
                  <img
                    key={imgId}
                    src={imgPath}
                    alt="가온전시실 이미지"
                    onClick={() => onClickImgage(imgId)}
                  />
                );
              })}
            </li>
            <li css={col3Css}>
              {GAON3.map((item) => {
                const { imgId, imgPath } = item;
                return (
                  <img
                    key={imgId}
                    src={imgPath}
                    alt="가온전시실 이미지"
                    onClick={() => onClickImgage(imgId)}
                  />
                );
              })}
            </li>
          </ul>
        </div>

        <div css={studioCss}>
          <div css={textCss}>
            <h1 css={titleText}>파이룸</h1>
            <p css={subText}>모션그래픽스스튜디오, 공간디자인 스튜디오</p>
          </div>
          <ul css={imgList}>
            <li css={col1Css}>
              {PYROOM1.map((item) => {
                const { imgId, imgPath } = item;
                return (
                  <img
                    key={imgId}
                    src={imgPath}
                    alt="파이룸 이미지"
                    onClick={() => onClickImgage(imgId)}
                  />
                );
              })}
            </li>
            <li css={col2Css}>
              {PYROOM2.map((item) => {
                const { imgId, imgPath } = item;
                return (
                  <img
                    key={imgId}
                    src={imgPath}
                    alt="파이룸 이미지"
                    onClick={() => onClickImgage(imgId)}
                  />
                );
              })}
            </li>
            <li css={col3Css}>
              {PYROOM3.map((item) => {
                const { imgId, imgPath } = item;
                return (
                  <img
                    key={imgId}
                    src={imgPath}
                    alt="파이룸 이미지"
                    onClick={() => onClickImgage(imgId)}
                  />
                );
              })}
            </li>
          </ul>
        </div>
      </section>
    </PageLayout>
  );
};

export default DisplayPage;

const displayCss = (url: string) => css`
  display: flex;
  gap: 6rem;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding: 10.4rem 2.4rem 10rem;

  background-position: top 5.6rem left 0;
  background-size: contain;
  background-image: url(${url});
  background-repeat: no-repeat;
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
`;

const col1Css = css`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  width: 23.9%;

  img:nth-of-type(1) {
    min-height: 13.909rem;

    height: calc(100vh / 7.76);
    object-fit: cover;
  }

  img:nth-of-type(2) {
    min-height: 14.236rem;

    height: calc(100vh / 7.58);
    object-fit: cover;
  }

  img:nth-of-type(3) {
    min-height: 15.055rem;

    height: calc(100vh / 7.17);
    object-fit: cover;
  }
`;

const col2Css = css`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  width: 50%;

  img:first-of-type {
    min-height: 25.2rem;

    height: calc(100vh / 4.286);
    object-fit: cover;
  }

  img:last-of-type {
    min-height: 18.7rem;

    height: calc(100vh / 5.78);
    object-fit: cover;
  }
`;

const col3Css = css`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  width: 23.9%;

  img:nth-of-type(1) {
    min-height: 22.4rem;

    height: calc(100vh / 4.82);
    object-fit: cover;
  }

  img:nth-of-type(2) {
    min-height: 21.6rem;

    height: calc(100vh / 5);
    object-fit: cover;
  }
`;
