import { css } from '@emotion/react';
import { DISPLAY } from '../../../mobile/constants/DISPLAY';
import { colors, fonts } from '../../../styles/theme';
import PageLayout from '../../Common/PageLayout';

const DisplayPage = () => {
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

  return (
    <PageLayout>
      <section css={displayCss}>
        <div css={studioCss}>
          <div css={textCss}>
            <h1 css={titleText}>가온전시실</h1>
            <p css={subText}>
              디자인씽킹스튜디오, 시각디자인스튜디오, 정보경험디자인스튜디오,
              공간연출디자인스튜디오
            </p>
          </div>
          <ul css={imgList}>
            <li css={col1Css}>
              {GAON1.map((item) => {
                const { imgId, imgPath } = item;
                return (
                  <img key={imgId} src={imgPath} alt="가온전시실 이미지" />
                );
              })}
            </li>
            <li css={col2Css}>
              {GAON2.map((item) => {
                const { imgId, imgPath } = item;
                return (
                  <img key={imgId} src={imgPath} alt="가온전시실 이미지" />
                );
              })}
            </li>
            <li css={col3Css}>
              {GAON3.map((item) => {
                const { imgId, imgPath } = item;
                return (
                  <img key={imgId} src={imgPath} alt="가온전시실 이미지" />
                );
              })}
            </li>
          </ul>
        </div>

        <div css={studioCss}>
          <div css={textCss}>
            <h1 css={titleText}>파이룸</h1>
            <p css={subText}>모션그래픽스스튜디오, 공간디자인스튜디오</p>
          </div>
          <ul css={imgList}>
            <li css={col1Css}>
              {PYROOM1.map((item) => {
                const { imgId, imgPath } = item;
                return <img key={imgId} src={imgPath} alt="파이룸 이미지" />;
              })}
            </li>
            <li css={col2Css}>
              {PYROOM2.map((item) => {
                const { imgId, imgPath } = item;
                return <img key={imgId} src={imgPath} alt="파이룸 이미지" />;
              })}
            </li>
            <li css={col3Css}>
              {PYROOM3.map((item) => {
                const { imgId, imgPath } = item;
                return <img key={imgId} src={imgPath} alt="파이룸 이미지" />;
              })}
            </li>
          </ul>
        </div>
      </section>
    </PageLayout>
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
