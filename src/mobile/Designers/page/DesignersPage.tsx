import { css } from '@emotion/react';
import { fonts } from '../../../styles/theme';
import PageLayout from '../../Common/PageLayout';

const DesignersPage = () => {
  return (
    <PageLayout>
      <div css={designersCss}>
        <p css={text}>Designers</p>
      </div>
    </PageLayout>
  );
};

export default DesignersPage;

const designersCss = css`
  width: 100%;
  height: calc(100dvh - 10rem);
  padding-top: 5.8rem;
`;

const text = css`
  ${fonts.mobile_title_reg_32};
`;
