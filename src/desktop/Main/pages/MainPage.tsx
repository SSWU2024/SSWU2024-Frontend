import { css } from '@emotion/react';
import { ImgMotionTest } from '../../assets/image';
import PageLayout from '../../Common/PageLayout';
import InteractiveViews from '../components/InteractiveViews';
import PreparatoryCommittee from '../components/PreparatoryCommittee';

function MainPage() {
  return (
    <PageLayout>
      <img src={ImgMotionTest} css={test} />
      <InteractiveViews />
      <PreparatoryCommittee />
    </PageLayout>
  );
}

export default MainPage;

const test = css`
  width: 100%;
  height: calc(100vh / 1.0686);
`;
