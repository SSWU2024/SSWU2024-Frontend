import { css } from '@emotion/react';
import { WorkInfoProps } from '../../../mobile/WorkDetail/types/WorkDetailType';
import { colors, fonts } from '../../../styles/theme';

const WorkInfo = (props: WorkInfoProps) => {
  const { title, description, engDescription, designers } = props;

  const designerList =
    designers && designers.map((designer) => designer.name).join(' ');

  return (
    <div css={workInfoContainer}>
      <div css={mainCss}>
        <h1>{title}</h1>
        <p>{designerList}</p>
      </div>
      <div css={descriptionCss}>
        <div>{description}</div>
        <div>{engDescription}</div>
      </div>
    </div>
  );
};

export default WorkInfo;

const workInfoContainer = css`
  display: flex;
  gap: 6rem;
  flex-direction: column;

  width: 100%;
  padding: 3.2rem 2.4rem 8rem;
`;

const mainCss = css`
  color: ${colors.gray900};

  h1:nth-of-type(1) {
    margin-bottom: 0.8rem;

    ${fonts.desktop_title_semi_24};
    white-space: pre-wrap;
  }

  p:nth-of-type(1) {
    ${fonts.desktop_body_reg_16};
  }
`;

const descriptionCss = css`
  display: flex;
  gap: 3.2rem;
  flex-direction: column;

  ${fonts.desktop_body_reg_16};

  white-space: pre-wrap;

  div:nth-of-type(1) {
    color: ${colors.gray900};
  }

  div:nth-of-type(2) {
    color: ${colors.gray500};
  }
`;
