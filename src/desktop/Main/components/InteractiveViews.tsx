import { css } from '@emotion/react';
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useState } from 'react';
import { colors, fonts } from '../../../styles/theme';
import { IcCircle } from '../../assets/icon';
import {
  ImgBubble,
  ImgLight,
  ImgMainPeople,
  ImgPosterWeb,
} from '../../assets/image';
import {
  DESCRIPTION,
  INFO_DETAIL,
  INFO_TITLE,
  MAIN_TITLE,
} from '../constants/displayInfo';

const InteractiveViews = () => {
  const [windowSize, setWindowSize] = useState(1440);

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();
  const scrollAntmation = useAnimation();
  const scrollInfoBgAnimation = useAnimation();
  const scrollInfoAnimation = useAnimation();
  const x = useTransform(scrollYProgress, [0, 0.3], ['100%', '0']);
  const y = useTransform(scrollYProgress, [0.2, 0.4], ['100%', '-50%']);
  const scale = useTransform(scrollYProgress, [0.3, 0.7], [1, 2]);
  const circleSize = useTransform(
    scrollYProgress,
    [0.25, 0.4],
    ['1.3rem', `${windowSize}px`],
  );
  // 좀 더 매끄럽게 수정하고 싶음
  const smoothCircleSize = useSpring(circleSize, {
    stiffness: 200,
    damping: 20,
    mass: 1,
  });

  // 처음 시작하는 투명도를 0.99로 하면 원이랑 투명도가 일치하는데, 이렇게 할 경우 스크롤 위치가 0.38일 때부터 적용되지 않고 처음부터 적용됨 ㅠ_ㅠ
  const bg = useTransform(
    scrollYProgress,
    [0.39, 0.4],
    ['rgba(38, 74, 194, 0)', 'rgba(38, 74, 194, 1)'],
  );

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (window.innerHeight / latest < 1.122) {
      scrollAntmation.start({ color: 'rgba(0,0,0,0)' });
    } else {
      scrollAntmation.start({ color: 'rgba(0,0,0,1)' });
    }
  });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    console.log(window.innerHeight / latest);
    if (window.innerHeight / latest < 0.348) {
      scrollInfoAnimation.start({ color: 'rgba(256,256,256,1)' });
    } else {
      scrollInfoAnimation.start({ color: 'rgba(38, 74, 194,0)' });
    }
  });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (window.innerHeight / latest < 0.353) {
      scrollInfoBgAnimation.start({ backgroundColor: 'rgba(38, 74, 194, 1)' });
    } else {
      scrollInfoBgAnimation.start({ backgroundColor: 'rgba(38, 74, 194, 0)' });
    }
  });

  useEffect(() => {
    scrollTo({ top: 0, behavior: 'instant' });
    setWindowSize(window.innerWidth);
  }, []);

  return (
    <>
      <section css={interactiveViewContainer}>
        <article css={individualsContainer}>
          {/* Text section */}
          <div className="text" css={individualsTitleContainer}>
            <motion.span
              css={individualsTitle}
              animate={scrollAntmation}
              initial={{ color: 'rgba(0,0,0,1)' }}
            >
              Moments of Individuals
            </motion.span>
            <motion.span
              css={individualsDesc}
              animate={scrollAntmation}
              initial={{ color: 'rgba(0,0,0,1)' }}
            >{`성신여대 디자인과 졸업생들은 각자의 삶 속에서 다양한 일상과 경험을 마주하며 자신만의 길을 걸어갑니다.\n각자의 개성과 비전이 교차하는 복잡한 관계 속에서 우리는 유기적 네트워크를 이루고, 그 안에서 의미와 가치를 재창조합니다.\n이는 우리 모두를 더 크고 의미 있는 흐름 속으로 이끌어 갑니다.`}</motion.span>
          </div>

          {/* Horizontal scroll section */}
          <motion.article
            className="peopleSlider"
            css={sliderBannerContainer}
            style={{ x }}
            initial={{ x: 0 }}
          >
            <div css={animationBox}>
              <motion.img src={ImgMainPeople} css={individualsPeopleImg} />
            </div>
          </motion.article>

          {/* Bubble animation */}
          <motion.img
            className="bubble"
            src={ImgBubble}
            css={bubble}
            style={{ y }}
            whileInView={{
              transition: { duration: 2 },
            }}
          />

          <div css={lightContainer}>
            <motion.img src={ImgLight} style={{ scale: scale }} />
            <motion.span
              css={icContainer}
              style={{
                width: smoothCircleSize,
                height: smoothCircleSize,
                position: 'absolute',
                inset: 0,
                margin: 'auto',
                backgroundColor: bg,
              }}
            >
              <IcCircle />
            </motion.span>
          </div>
        </article>
      </section>

      <motion.section
        css={displayInfoContainer}
        initial={{ backgroundColor: 'rgba(38, 74, 194, 0)' }}
        animate={scrollInfoBgAnimation}
      >
        <header>
          <motion.p
            css={mainTitle}
            initial={{ color: 'rgba(38, 74, 194,0)' }}
            animate={scrollInfoAnimation}
          >
            {MAIN_TITLE}
          </motion.p>
          <motion.p
            css={description}
            initial={{ color: 'rgba(38, 74, 194,0)' }}
            animate={scrollInfoAnimation}
          >
            {DESCRIPTION}
          </motion.p>
        </header>

        <article>
          <header>
            <p css={infoTitle}>{INFO_TITLE}</p>
          </header>

          <div css={infoDetailContainer}>
            {INFO_DETAIL.map((info) => {
              const { category, detail } = info;
              return (
                <div key={category} css={infoContainer}>
                  <p css={categoryInfo}>{category}</p>
                  <div css={dateContainer}>
                    {detail.map((date) => {
                      return (
                        <p key={date} css={dateInfo}>
                          {date}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </article>

        <article>
          <header>
            <p css={posterTitle}>Poster</p>
          </header>

          <img src={ImgPosterWeb} css={posterImg} />
        </article>
      </motion.section>
    </>
  );
};

export default InteractiveViews;

const interactiveViewContainer = css`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-top: calc(100vh / 6.75);
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

  opacity: 1;
  transition: opacity 2s ease;
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
  position: relative;
  overflow: hidden;

  width: 100%;
  height: calc(100vh / 2.2253);
`;

const bubble = css`
  position: absolute;
  top: calc(100vh / 1.62);
`;

const animationBox = css`
  display: flex;

  width: calc(100% / 0.5894);
  height: 100%;
`;

const individualsPeopleImg = css`
  width: calc(100% / 0.5894);
  height: 100%;
`;

const lightContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100vw;
  height: 100vh;
  padding: calc(100vh / 7.1681) calc(100% / 4.8) calc(100vh / 8.1)
    calc(100% / 3.5468);
`;

const icContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

const displayInfoContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 0 34.9rem calc(100vh / 5.7857);
  margin-top: 30.2rem;
`;

const mainTitle = css`
  width: 100%;
  margin-bottom: 4.8rem;

  color: ${colors.white};
  ${fonts.desktop_title_semi_60};

  text-align: center;
`;

const description = css`
  margin-bottom: 26.8rem;

  color: ${colors.white};

  ${fonts.desktop_body_reg_18_desc};
  text-align: center;

  white-space: break-spaces;
`;

const infoTitle = css`
  width: 100%;
  margin-bottom: 6rem;

  color: ${colors.white};

  ${fonts.desktop_title_semi_28};
  text-align: center;
`;

const infoDetailContainer = css`
  display: flex;
  gap: 4.4rem;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding: 0 12.9rem 0 15.6rem;
  margin-bottom: 18.7rem;
`;

const infoContainer = css`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2.22fr;
`;

const categoryInfo = css`
  color: ${colors.white};
  ${fonts.desktop_body_semi_18};
`;

const dateContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const dateInfo = css`
  color: ${colors.white};
  ${fonts.desktop_body_reg_18_desc};
`;

const posterTitle = css`
  width: 100%;
  margin-bottom: 6rem;

  color: ${colors.white};

  ${fonts.desktop_title_semi_40};
  text-align: center;
`;

const posterImg = css`
  width: 66rem;
  height: 93.4rem;
`;
