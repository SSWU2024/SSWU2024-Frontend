import { css } from '@emotion/react';
import {
  ImgDescriptionMobile,
  ImgMotionPosterMobile,
} from '../../assets/image';
import PageLayout from '../../Common/PageLayout';

import ExhibitionInfo from '../components/ExhibitionInfo';
import PeopleInfo from '../components/PeopleInfo';

function MainPage() {
  return (
    <PageLayout>
      <div css={mainContainer}>
        <img src={ImgMotionPosterMobile} css={imgCss} alt="메인_모션포스터" />
        <img src={ImgDescriptionMobile} css={imgCss} alt="메인_설명포스터" />
      </div>
      <ExhibitionInfo />
      <PeopleInfo />
    </PageLayout>
  );
}

export default MainPage;

const mainContainer = css`
  width: 100dvw;
  padding-top: 5.8rem;
`;

const imgCss = css`
  width: 100%;
  height: auto;
`;
