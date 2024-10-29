import { css } from '@emotion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { colors, fonts } from '../../../styles/theme';
import { ImgPeople1, ImgPeople2 } from '../../assets/image';
gsap.registerPlugin(ScrollTrigger); //플러그인 꼭 연결해줘야함 안하면 스크롤 트리거가 작동이 안됨

const HorizontalImage = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.appear',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#text',
          start: 'top 60%',
          end: '+=160%',
          toggleActions: 'restart pause none reverse',
          onLeave: () => {
            // 원래 상태로 돌아가는 애니메이션
            gsap.to('#text', {
              opacity: 0,
            });
          },
          onEnterBack: () => {
            // 다시 나타나는 애니메이션
            gsap.to('.appear', {
              opacity: 1,
            });
          },
        },
      },
    );
  });

  useGSAP(() => {
    gsap.to('.image', {
      scrollTrigger: {
        trigger: '#containerTop', // 부모 요소를 트리거로 설정
        start: 'top 10%', // 고정 시작
        end: `+=${100 / Math.ceil(window.innerHeight / 810)}%`,
        pin: true, // 고정 설정
        toggleActions: 'restart pause reverse reverse',
        scrub: 1,
      },
      ease: 'none',
      xPercent: -70,
    });
  }, []);

  return (
    <div css={container} id="containerTop">
      <section css={textSection} id="text" className="appear">
        <h1 css={text('title')}>Moments of Individuals</h1>
        <p css={text('sub')}>
          성신여대 디자인과 졸업생들은 각자의 삶 속에서 다양한 일상과 경험을
          마주하며 자신만의 길을 걸어갑니다.
          <br />
          각자의 개성과 비전이 교차하는 복잡한 관계 속에서 우리는 유기적
          네트워크를 이루고, 그 안에서 의미와 가치를 재창조합니다.
          <br />
          이는 우리 모두를 더 크고 의미 있는 흐름 속으로 이끌어 갑니다.
        </p>
      </section>

      <div css={imgSection} className="imgSection">
        <img src={ImgPeople1} className="image appear" css={imgCss} />
        <img src={ImgPeople2} className="image appear" css={imgCss} />
      </div>
    </div>
  );
};

export default HorizontalImage;

const container = css`
  width: 100vw;
  height: 100vh;
`;

const textSection = css`
  display: flex;
  gap: 3.6rem;
  align-items: center;
  flex-direction: column;

  padding: 12rem 0 4rem;

  color: ${colors.gray900};
`;

const text = (variant: 'title' | 'sub') => css`
  ${variant === 'title'
    ? fonts.desktop_title_semi_60
    : fonts.desktop_body_reg_18_desc};
  text-align: center;
`;

const imgSection = css`
  display: flex;
  flex: 1 0 100dvw;

  align-items: center;

  overflow-x: hidden;

  width: 100%;
`;

const imgCss = css`
  display: flex;

  width: 100%;
  height: auto;
`;
