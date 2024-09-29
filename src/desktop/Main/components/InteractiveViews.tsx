import { css, keyframes } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';
import { ImgMainPeople } from '../../assets/image';

const InteractiveViews = () => {
  const renderSlideBannerItems = () => {
    return Array.from({ length: 10 }, (_, index) => (
      <img key={index} src={ImgMainPeople} css={individualsPeopleImg} />
    ));
  };

  return (
    <section css={interactiveViewContainer}>
      <article css={individualsContainer}>
        <div css={individualsTitleContainer}>
          <span css={individualsTitle}>Moments of Individuals</span>
          <span
            css={individualsDesc}
          >{`성신여대 디자인과 졸업생들은 각자의 삶 속에서 다양한 일상과 경험을 마주하며 자신만의 길을 걸어갑니다.\n각자의 개성과 비전이 교차하는 복잡한 관계 속에서 우리는 유기적 네트워크를 이루고, 그 안에서 의미와 가치를 재창조합니다.\n이는 우리 모두를 더 크고 의미 있는 흐름 속으로 이끌어 갑니다.`}</span>
        </div>

        <article css={sliderBannerContainer}>
          <div css={animationBox}>
            {renderSlideBannerItems()}
            {renderSlideBannerItems()}
          </div>
        </article>
      </article>
    </section>
  );
};

export default InteractiveViews;

const interactiveViewContainer = css`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: calc(100vh / 6.75) 0 calc(100vh / 5.7857);
  margin-top: 5.2rem;
`;

const individualsContainer = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const individualsTitleContainer = css`
  display: flex;
  gap: calc(100vh / 22.5);
  align-items: center;
  flex-direction: column;
`;

const individualsTitle = css`
  color: ${colors.gray900};
  ${fonts.desktop_title_semi_60};
`;

const individualsDesc = css`
  margin-bottom: calc(100vh / 11.4085);

  color: ${colors.gray900};

  ${fonts.desktop_body_reg_18_desc};
  text-align: center;

  white-space: pre-wrap;
`;

const sliderBannerContainer = css`
  overflow: hidden;

  width: 100%;
  height: calc(100vh / 2.2253);
`;

const infiniteSlide = keyframes`
    0% {
       transform: translateX(0);
     }
     100% {
       transform: translateX(-500%);
     }
 `;

const animationBox = css`
  display: flex;

  width: calc(100% / 0.5894);
  height: 100%;

  animation: ${infiniteSlide};
  animation-duration: 100s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const individualsPeopleImg = css`
  width: calc(100% / 0.5894);
  height: 100%;
`;
