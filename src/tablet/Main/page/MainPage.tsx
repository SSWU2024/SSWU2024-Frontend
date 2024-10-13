import { css } from '@emotion/react';
import { useEffect } from 'react';
import PageLayout from '../../Common/PageLayout';
import {
  ImgDescriptionTablet,
  ImgMotionPosterTablet,
} from '../../assets/image';
import CommitteeInfo from '../components/CommitteeInfo';
import ExhibitionInfo from '../components/ExhibitionInfo';

const MainPage = () => {
  useEffect(() => {
    scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <PageLayout>
      <div css={mainContainer}>
        <img src={ImgMotionPosterTablet} alt="메인_모션포스터" css={imgCss} />
        <img src={ImgDescriptionTablet} alt="메인_설명포스터" css={imgCss} />
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
