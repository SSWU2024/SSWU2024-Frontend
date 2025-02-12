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
import { desktopMotionPoster } from '../../../constants/mainImgUrl';
import { colors, fonts } from '../../../styles/theme';
import { ImgCircle, ImgLight, ImgPosterWeb } from '../../assets/image';
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
  const [isLoading, setIsLoading] = useState(true);

  const { width, height } = resize;

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();
  const scrollInfoBgAnimation = useAnimation();
  const scrollInfoAnimation = useAnimation();

  const handleResize = () => {
    setResize({ width: window.innerWidth, height: window.innerHeight });
  };

  const opacity = useTransform(scrollYProgress, [0.47, 0.53], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.33, 0.4], [1, 1.8]);

  const circleSize = useTransform(
    scrollYProgress,
    [0.35, 0.45],
    ['2rem', `${width + width / 3}px`],
  );

  const smoothCircleSize = useSpring(circleSize, {
    stiffness: 200,
    damping: 20,
    mass: 1,
  });

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
      <section css={imgContiner}>
        <img
          src={desktopMotionPoster}
          css={motionPoster}
          onLoad={() => setIsLoading(false)}
        />
        {isLoading ? <div css={blankWindow} /> : null}
      </section>

      <section css={interactiveViewContainer}>
        <article css={individualsContainer(height)}>
          <HorizontalImage />
        </article>
        {/* 빛 + 파란색 원이 커지는 부분 */}
        <motion.div css={lightContainer}>
          <motion.img src={ImgLight} style={{ scale }} css={imgCss} />

          <motion.span
            css={icContainer}
            style={{
              width: smoothCircleSize,
              height: smoothCircleSize,
              position: 'absolute',
              marginLeft: `-${Number(smoothCircleSize) / 2}px`,
              marginTop: `-${Number(smoothCircleSize) / 2}px`,
              borderRadius: '50%',
              transformOrigin: 'center',
            }}
          >
            <img src={ImgCircle} />
          </motion.span>
        </motion.div>
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

const imgContiner = css`
  width: 100dvw;
  height: 100dvh;
`;

const blankWindow = css`
  width: 100dvw;
  height: 100dvh;
`;

const interactiveViewContainer = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: 100%;
`;

const motionPoster = css`
  width: 100%;
  padding-top: 5.3rem;
`;

const individualsContainer = (h: number) => css`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: ${h <= 1080
    ? '190rem'
    : h < 1440
      ? '200rem'
      : h < 2160
        ? '230rem'
        : '280rem'};
`;

const imgCss = css`
  width: 100%;
  padding-right: 2rem;
`;

const lightContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100vw;
  height: 100vh;
  padding: 0 calc(100% / 4.5) calc(100vh / 8.1);
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
  padding: 0 calc(100% / 4.1261) calc(100vh / 5.7857);
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
