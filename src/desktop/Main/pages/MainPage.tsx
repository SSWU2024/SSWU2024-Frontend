import { css } from '@emotion/react';
import { ImgMotionPoster } from '../../assets/image';
import PageLayout from '../../Common/PageLayout';
import InteractiveViews from '../components/InteractiveViews';
import PreparatoryCommittee from '../components/PreparatoryCommittee';

function MainPage() {
  return (
    <PageLayout>
      <img src={ImgMotionPoster} css={motionPoster} />
      <InteractiveViews />
      <PreparatoryCommittee />
    </PageLayout>
  );
}

export default MainPage;

const motionPoster = css`
  width: 100%;
  padding-top: 5.3rem;
`;
