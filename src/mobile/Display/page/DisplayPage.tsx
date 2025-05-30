import { css } from '@emotion/react';
import { useEffect } from 'react';
import useGetDisplay from '../../../libs/hooks/useGetDisplay';
import { colors, fonts } from '../../../styles/theme';
import PageLayout from '../../Common/PageLayout';
import { imageType } from '../types/imageType';

const DisplayPage = () => {
  useEffect(() => {
    scrollTo({ top: 0, behavior: 'instant' });
  });

  const { display, isLoading } = useGetDisplay();

  const studio1Images = !isLoading && display.data[0].images;
  const studio2Images = !isLoading && display.data[1].images;

  return (
    <>
      {!isLoading && (
        <PageLayout>
          <section css={displayCss}>
            <div css={studioCss}>
              <div css={textCss}>
                <h1 css={titleText}>가온전시실</h1>
                <p css={subText}>
                  디자인씽킹스튜디오, 시각디자인스튜디오,
                  <br />
                  정보경험디자인스튜디오, 공간디자인스튜디오
                </p>
              </div>
              <ul css={imgCss}>
                {studio1Images.map((item: imageType) => {
                  const { imgId, imgPath } = item;
                  return (
                    <img key={imgId} src={imgPath} alt="가온전시실 이미지" />
                  );
                })}
              </ul>
            </div>

            <div css={studioCss}>
              <div css={textCss}>
                <h1 css={titleText}>파이룸</h1>
                <p css={subText}>
                  모션그래픽스스튜디오, 공간연출디자인스튜디오
                </p>
              </div>
              <ul css={imgCss}>
                {studio2Images.map((item: imageType) => {
                  const { imgId, imgPath } = item;
                  return <img key={imgId} src={imgPath} alt="파이룸 이미지" />;
                })}
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
  padding: 3.2rem 1.6rem 10rem;
  margin-top: 5.8rem;
  min-height: 100dvh;
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
