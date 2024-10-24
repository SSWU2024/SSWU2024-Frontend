import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';
import { colors, fonts } from '../../../styles/theme';
import PageLayout from '../../Common/PageLayout';
import { DISPLAY } from '../../constants/DISPLAY';
import { imageType } from '../types/imageType';

const DisplayPage = () => {
  const studio1ImageList = useRef<imageType[]>(); // studio 1 이미지 리스트
  const studio2ImageList = useRef<imageType[]>(); // studio 2 이미지 리스트

  useEffect(() => {
    studio1ImageList.current = DISPLAY[0].images;
    studio2ImageList.current = DISPLAY[1].images;
  }, []);

  const StudioImages1 =
    DISPLAY.find((item) => item.displayId === 1)?.images || [];

  const StudioImages2 =
    DISPLAY.find((item) => item.displayId === 2)?.images || [];

  return (
    <PageLayout>
      <section css={displayCss}>
        <div css={studioCss}>
          <div css={textCss}>
            <h1 css={titleText}>가온전시실</h1>
            <p css={subText}>
              디자인씽킹스튜디오, 시각디자인스튜디오,
              <br />
              정보경험디자인스튜디오, 공간연출디자인스튜디오
            </p>
          </div>
          <ul css={imgCss}>
            {StudioImages1.map((item) => {
              const { imgId, imgPath } = item;
              return <img key={imgId} src={imgPath} alt="가온전시실 이미지" />;
            })}
          </ul>
        </div>

        <div css={studioCss}>
          <div css={textCss}>
            <h1 css={titleText}>파이룸</h1>
            <p css={subText}>모션그래픽스스튜디오, 공간디자인스튜디오</p>
          </div>
          <ul css={imgCss}>
            {StudioImages2.map((item) => {
              const { imgId, imgPath } = item;
              return <img key={imgId} src={imgPath} alt="파이룸 이미지" />;
            })}
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
  padding: 9rem 1.6rem 10rem;
`;

const studioCss = css`
  display: flex;
  gap: 2.4rem;
  flex-direction: column;
`;

const textCss = css`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
`;

const titleText = css`
  color: ${colors.gray900};

  ${fonts.mobile_title_semi_20};
`;

const subText = css`
  color: ${colors.gray500};

  ${fonts.mobile_body_reg_14};
`;

const imgCss = css`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  width: 100%;
`;
