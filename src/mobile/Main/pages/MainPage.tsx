import { css } from '@emotion/react';
import PageLayout from '../../Common/PageLayout';

import {
  mobileInteraction,
  MobileMotionPoster,
} from '../../../constants/mainImgUrl';
import CommitteeInfo from '../components/CommitteeInfo';
import ExhibitionInfo from '../components/ExhibitionInfo';

const MainPage = () => {
  return (
    <PageLayout>
      <div css={mainContainer}>
        <img src={MobileMotionPoster} css={imgCss} alt="메인_모션포스터" />
        <img src={mobileInteraction} css={imgCss} alt="메인_설명포스터" />
      </div>
      <ExhibitionInfo />
      <CommitteeInfo />
    </PageLayout>
  );
};

export default MainPage;

const mainContainer = css`
  width: 100dvw;
  padding-top: 5.8rem;
`;

const imgCss = css`
  width: 100%;
  height: auto;
`;
