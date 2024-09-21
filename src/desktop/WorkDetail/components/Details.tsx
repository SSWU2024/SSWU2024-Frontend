import { css } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';

interface DetailsProps {
  workTitle: string;
  designers: Array<{ name: string }>;
  workBody: string;
  workEngBody: string;
}

const Details = ({
  workTitle,
  designers,
  workBody,
  workEngBody,
}: DetailsProps) => {
  return (
    <article css={workDetail}>
      <div css={workInfo}>
        <p css={title}>{workTitle}</p>
        <div css={designerContainer}>
          {designers.map((designer) => {
            const { name } = designer;
            return (
              <p key={name} css={designerName}>
                {name}
              </p>
            );
          })}
        </div>
      </div>
      <div css={workDescription}>
        <p css={krDesc}>{workBody}</p>
        <p css={engDesc}>{workEngBody}</p>
      </div>
    </article>
  );
};

export default Details;

const workDetail = css`
  display: flex;
  gap: calc(100% / 26.19);
  justify-content: center;

  margin: calc(100vh / 10.125) calc(100% / 14.4) calc(100vh / 7.79);
`;

const workInfo = css`
  display: flex;
  gap: calc(100vh / 101.25);
  flex-direction: column;

  min-width: 41.1rem;
`;

const title = css`
  color: ${colors.gray900};
  ${fonts.desktop_title_semi_28};
`;

const designerContainer = css`
  display: flex;
  gap: calc(100vh / 101.25);
  align-items: center;
`;

const designerName = css`
  color: ${colors.gray900};
  ${fonts.desktop_body_reg_20};
`;

const workDescription = css`
  display: flex;
  gap: calc(100vh / 33.75);
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
`;

const krDesc = css`
  color: ${colors.gray900};
  ${fonts.desktop_body_reg_16};

  white-space: pre-wrap;
`;

const engDesc = css`
  color: ${colors.gray500};
  ${fonts.desktop_body_lig_16};

  white-space: pre-wrap;
`;
