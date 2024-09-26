import { css } from '@emotion/react';
import { fonts } from '../../../styles/theme';
import PageLayout from '../../Common/PageLayout';

function MainPage() {
  return (
    <PageLayout>
      <div css={mainContainer}>
        <p css={text}>메인페이지</p>
      </div>
    </PageLayout>
  );
}

export default MainPage;

const mainContainer = css`
  width: 100%;
  height: calc(100dvh - 10rem);
  padding-top: 5.8rem;
`;

// props 사용은 요렇게!
const text = css`
  ${fonts.mobile_title_reg_32};
`;
