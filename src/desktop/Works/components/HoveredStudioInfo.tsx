import { css } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';
import { IcListRight } from '../../assets/icon';
import { HoveredStudioInfoProps } from '../types/worksType';

const HoveredStudioInfo = ({ description }: HoveredStudioInfoProps) => {
  return (
    <div css={hoveredContainer}>
      <IcListRight />
      <p css={studioDescription}>{description}</p>
    </div>
  );
};

export default HoveredStudioInfo;

const hoveredContainer = css`
  display: flex;

  margin-left: 1.2rem;
`;

const studioDescription = css`
  position: absolute;

  min-width: 64.4rem;

  width: calc(100% / 2.236);
  margin-left: 7.3rem;

  color: ${colors.gray900};

  ${fonts.desktop_body_reg_16};
  word-break: keep-all;
`;
