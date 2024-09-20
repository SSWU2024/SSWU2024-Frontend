import { css } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';
import { StudioInfoProps } from '../types/studioType';

const StudioInfo = ({ info }: StudioInfoProps) => {
  const { studio, advisor, description } = info;
  return (
    <article css={studioInfo}>
      <div css={nameContainer}>
        <p css={studioName}>{studio}</p>
        <p css={advisorName}>{`지도교수 ${advisor}`}</p>
      </div>
      <p css={desc}>{description}</p>
    </article>
  );
};

export default StudioInfo;

const studioInfo = css`
  display: flex;
  gap: calc(100% / 45);
`;

const nameContainer = css`
  display: flex;
  gap: calc(100vh / 135);
  justify-content: center;
  flex-direction: column;
`;

const studioName = css`
  min-width: 30.6rem;

  color: ${colors.gray900};
  ${fonts.desktop_title_semi_28};
`;

const advisorName = css`
  color: ${colors.pink300};
  ${fonts.desktop_body_semi_20};
`;

const desc = css`
  margin-right: calc(100% / 3.62);

  color: ${colors.gray900};
  ${fonts.desktop_body_reg_16};

  word-break: keep-all;
`;
