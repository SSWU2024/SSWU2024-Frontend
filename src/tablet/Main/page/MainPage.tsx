import { css } from '@emotion/react';
import PageLayout from '../../Common/PageLayout';

function MainPage() {
  return (
    <PageLayout>
      <div css={mainContainer}>
        <p>메인페이지</p>
      </div>
    </PageLayout>
  );
}

export default MainPage;

const mainContainer = css`
  width: 100%;
  padding-top: 5.6rem;
`;
