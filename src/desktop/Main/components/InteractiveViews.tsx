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
  ImgMotionPoster,
  ImgPosterWeb,
} from '../../assets/image';
import {
  DESCRIPTION,
  INFO_DETAIL,
  INFO_TITLE,
  MAIN_TITLE,
} from '../constants/displayInfo';
import HorizontalImage from './HorizontalImage';

const InteractiveViews = () => {
  const [resize, setResize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const { width, height } = resize;
  const minHeight = 810;
  const maxHeight = 2190;
  const minValue = 100;
  const maxValue = 300;

  // 화면 높이에 따라 값이 비례해서 변하도록 선형 보간식 적용
  const scrollValue =
    maxValue -
    ((height - minHeight) / (maxHeight - minHeight)) * (maxValue - minValue);

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();
  const scrollInfoBgAnimation = useAnimation();
  const scrollInfoAnimation = useAnimation();

  const handleResize = () => {
    setResize({ width: window.innerWidth, height: window.innerHeight });
  };

  const y = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    [`${scrollValue}%`, `20%`],
  );
  const opacity = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.3, 0.4], [1, 1.8]);
  const circleSize = useTransform(
    scrollYProgress,
    [0.35, 0.45],
    ['1.3rem', `${width}px`],
  );

  const smoothCircleSize = useSpring(circleSize, {
    stiffness: 200,
    damping: 20,
    mass: 1,
  });

  const bg = useTransform(
    scrollYProgress,
    [0.449, 0.45],
    ['rgba(38, 74, 194, 0)', 'rgba(38, 74, 194, 1)'],
  );

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (height / latest < 0.47) {
      scrollInfoAnimation.start({ color: 'rgba(256,256,256,1)' });
    } else {
      scrollInfoAnimation.start({ color: 'rgba(38, 74, 194,0)' });
    }
  });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (height / latest < 0.47) {
      scrollInfoBgAnimation.start({ backgroundColor: 'rgba(38, 74, 194, 1)' });
    } else {
      scrollInfoBgAnimation.start({ backgroundColor: 'rgba(38, 74, 194, 0)' });
    }
  });

  useEffect(() => {
    scrollTo({ top: 0, behavior: 'instant' });
    window.addEventListener('resize', handleResize);

    return () => {
      // cleanup
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section css={interactiveViewContainer}>
        <img src={ImgMotionPoster} css={motionPoster} />
        <article css={individualsContainer}>
          <HorizontalImage />

          {/* Bubble animation */}
          <motion.img
            className="bubble"
            src={ImgBubble}
            css={bubble}
            style={{ y }}
          />
        </article>

        {/* 빛 + 파란색 원이 커지는 부분 */}
        <div css={lightContainer}>
          <motion.img src={ImgLight} style={{ scale }} />

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
      </section>

      {/* 졸업 전시 정보 관련 섹션 */}
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
            style={{ opacity }}
          >
            {MAIN_TITLE}
          </motion.p>
          <motion.p
            css={description}
            initial={{ color: 'rgba(38, 74, 194,0)' }}
            animate={scrollInfoAnimation}
            style={{ opacity }}
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

        <article css={posterContainer}>
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
`;

const motionPoster = css`
  width: 100%;
  padding-top: 5.3rem;
`;

const individualsContainer = css`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 200rem;
`;

const bubble = css`
  position: absolute;
  top: calc(100vh / 1.62);
`;

const lightContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100vw;
  height: 100vh;
  padding: 0 calc(100% / 4.8) calc(100vh / 8.1) calc(100% / 3.5468);
`;

const icContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: -1;
`;

const displayInfoContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  padding: 18rem calc(100% / 4.1261) calc(100vh / 5.7857);
`;

const mainTitle = css`
  width: 100%;
  margin-bottom: calc(100vh / 16.875);

  color: ${colors.white};
  ${fonts.desktop_title_semi_60};

  text-align: center;
`;

const description = css`
  margin-bottom: calc(100vh / 3.0224);

  color: ${colors.white};

  ${fonts.desktop_body_reg_18_desc};
  text-align: center;

  white-space: break-spaces;
`;

const infoTitle = css`
  width: 100%;
  margin-bottom: calc(100vh / 13.5);

  color: ${colors.white};

  ${fonts.desktop_title_semi_28};
  text-align: center;
`;

const infoDetailContainer = css`
  display: flex;
  gap: calc(100vh / 18.4091);
  justify-content: center;
  flex-direction: column;

  width: 100%;
  margin-bottom: calc(100vh / 4.3316);
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

const posterContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;

const posterTitle = css`
  width: 100%;
  margin-bottom: calc(100vh / 13.5);

  color: ${colors.white};

  ${fonts.desktop_title_semi_40};
  text-align: center;
`;

const posterImg = css`
  width: 66rem;
  height: 93.4rem;
`;
