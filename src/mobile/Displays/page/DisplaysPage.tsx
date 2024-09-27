import { css } from '@emotion/react';
import { fonts } from '../../../styles/theme';
import PageLayout from '../../Common/PageLayout';

const DisplaysPage = () => {
  return (
    <PageLayout>
      <div css={displayCss}>
        <p css={text}>Display</p>
      </div>
    </PageLayout>
  );
};

export default DisplaysPage;

const displayCss = css`
  width: 100%;
  height: calc(100dvh - 10rem);
  padding-top: 5.8rem;
`;

const text = css`
  ${fonts.mobile_title_reg_32};
`;
