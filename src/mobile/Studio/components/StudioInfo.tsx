import { css } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';

interface studioInfoProps {
  info: {
    studio: string;
    advisor: string;
    description: string;
    mobileImgSrc: string;
  };
}

function StudioInfoMobile(studioInfo: studioInfoProps) {
  const { studio, advisor, description, mobileImgSrc } = studioInfo.info;

  return (
    <section css={studioInfoContainer}>
      <div css={mainCss}>
        <div css={textCss}>
          <h1 css={studioCss}>{studio}</h1>
          <span css={advisorCss}>지도교수 {advisor}</span>
        </div>
        <img src={mobileImgSrc} css={imgCss} alt="스튜디오 대표 이미지" />
      </div>
      <p css={desCss}>{description}</p>
    </section>
  );
}

export default StudioInfoMobile;

const studioInfoContainer = css`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;

  width: 100%;
`;

const mainCss = css`
  display: flex;
  justify-content: space-between;
`;

const textCss = css`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  padding-top: 1.6rem;
`;

const studioCss = css`
  color: ${colors.gray900};

  ${fonts.mobile_title_semi_20};
`;

const advisorCss = css`
  color: ${colors.pink300};

  ${fonts.mobile_body_semi_14};
`;

const imgCss = css`
  width: 16.5rem;
  height: auto;
`;

const desCss = css`
  color: ${colors.gray900};

  ${fonts.mobile_body_reg_14};
`;
