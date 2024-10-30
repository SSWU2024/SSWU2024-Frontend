import { css } from '@emotion/react';
import {
  tabletInteraction,
  tabletMotionPoster,
} from '../../../constants/mainImgUrl';
import PageLayout from '../../Common/PageLayout';
import CommitteeInfo from '../components/CommitteeInfo';
import ExhibitionInfo from '../components/ExhibitionInfo';

const MainPage = () => {
  return (
    <PageLayout>
      <div css={mainContainer}>
        <img src={tabletMotionPoster} alt="메인_모션포스터" css={imgCss} />
        <img src={tabletInteraction} alt="메인_설명포스터" css={imgCss} />
      </div>
      <ExhibitionInfo />
      <CommitteeInfo />
    </PageLayout>
  );
};

export default MainPage;

const mainContainer = css`
  width: 100dvw;
  padding-top: 5.6rem;
`;

const imgCss = css`
  width: 100%;
  height: auto;
`;
