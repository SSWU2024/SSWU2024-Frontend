import { css } from '@emotion/react';
import { fonts } from '../../../styles/theme';
import PageLayout from '../../Common/PageLayout';

const WorksPage = () => {
  return (
    <PageLayout>
      <div css={worksCss}>
        <p css={text}>Works</p>
      </div>
    </PageLayout>
  );
};

export default WorksPage;

const worksCss = css`
  width: 100%;
  height: calc(100dvh - 10rem);
  padding-top: 5.8rem;
`;

const text = css`
  ${fonts.mobile_title_reg_32};
`;
