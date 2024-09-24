import { css } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';

interface DisplayInfoProps {
  name: string;
  studioList: Array<string>;
}

const DisplayInfo = ({ name, studioList }: DisplayInfoProps) => {
  return (
    <>
      <p css={displayName}>{name}</p>
      <div css={studiosContainer}>
        {studioList?.map((studio, idx) => {
          const lastStudio = idx === studioList.length - 1;
          return (
            <p key={studio} css={studioName}>
              {studio}
              {!lastStudio && ','}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default DisplayInfo;

const displayName = css`
  margin-bottom: calc(100vh / 101.25);

  color: ${colors.gray900};
  ${fonts.desktop_title_semi_28};
`;

const studiosContainer = css`
  display: flex;
  gap: calc(100% / 360);
  align-items: center;

  margin-bottom: calc(100vh / 20.25);
`;

const studioName = css`
  color: ${colors.gray900};
  ${fonts.desktop_body_reg_20};
`;
