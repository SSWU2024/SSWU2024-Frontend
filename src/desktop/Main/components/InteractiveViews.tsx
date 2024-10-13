import { css } from '@emotion/react';
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useEffect } from 'react';
import { colors, fonts } from '../../../styles/theme';
import { ImgBubble, ImgLight, ImgMainPeople } from '../../assets/image';

const InteractiveViews = () => {
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 0.3], ['100%', '0']);
  const y = useTransform(scrollYProgress, [0.3, 0.7], ['100%', '-50%']);
  const scale = useTransform(scrollYProgress, [0.3, 0.7], [1, 2]);
  const bg = useTransform(
    scrollY,
    [0.3, 0.7],
    ['rgba(38, 74, 194, 0)', 'rgba(38, 74, 194, 1)'],
  );

  const opacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const width = useTransform(scrollYProgress, [0.3, 0.7], ['1.3rem', '100vw']);
  const height = useTransform(scrollYProgress, [0.3, 0.7], ['1.3rem', '100vh']);
  const borderRadius = useTransform(
    scrollYProgress,
    [0.3, 0.7],
    ['150%', '0%'],
  );

  const scrollAntmation = useAnimation();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (window.innerHeight / latest < 1.1248) {
      scrollAntmation.start({ color: 'rgba(0,0,0,0)' });
    } else {
      scrollAntmation.start({ color: 'rgba(0,0,0,1)' });
    }
  });

  useEffect(() => {
    scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
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
          <motion.img src={ImgLight} css={light} style={{ scale: scale }} />
          <motion.span
            css={blueCircle}
            style={{
              opacity,
              width,
              height,
              borderRadius,
              backgroundColor: bg,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              margin: 'auto',
            }}
          />
        </div>
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
  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: relative;

  width: 100vw;
  height: 100vh;
  padding: calc(100vh / 7.1681) calc(100% / 4.8) calc(100vh / 8.1)
    calc(100% / 3.5468);
`;

const light = css`
  z-index: 10;
`;

const blueCircle = css`
  z-index: -1;

  width: calc(100% / 107.8652);
  height: calc(100vh / 61.2708);
`;
