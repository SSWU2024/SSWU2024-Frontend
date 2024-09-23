import { css } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';
import PageLayout from '../../Common/PageLayout';
import { ImgBg2Web } from '../../assets/image';

const DUMMY = {
  displays: [
    {
      name: '가온전시실',
      studioList: [
        '디자인씽킹스튜디오',
        '시각디자인스튜디오',
        '정보경험디자인스튜디오',
        '공간연출디자인스튜디오',
      ],
      images: [
        { imgPath: 'https://www.much.go.kr/images/sub/exhi1_img1.jpg' },
        { imgPath: 'https://www.much.go.kr/images/sub/exhi1_img1.jpg' },
        { imgPath: 'https://www.much.go.kr/images/sub/exhi1_img1.jpg' },
        { imgPath: 'https://www.much.go.kr/images/sub/exhi1_img1.jpg' },
        { imgPath: 'https://www.much.go.kr/images/sub/exhi1_img1.jpg' },
        { imgPath: 'https://www.much.go.kr/images/sub/exhi1_img1.jpg' },
        { imgPath: 'https://www.much.go.kr/images/sub/exhi1_img1.jpg' },
      ],
    },
    {
      name: '파이룸',
      studioList: ['모션그래픽스스튜디오', '공간디자인 스튜디오'],
      images: [
        {
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
        },
        {
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
        },
        {
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
        },
        {
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
        },
        {
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
        },
        {
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
        },
        {
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
        },
      ],
    },
  ],
};

const DisplayPages = () => {
  const { displays } = DUMMY;

  return (
    <PageLayout>
      <section css={displaysContainer}>
        <img src={ImgBg2Web} css={bg} />
        {displays.map((display) => {
          const { name, studioList, images } = display;

          return (
            <article key={name} css={displayContainer}>
              <p css={displayName}>{name}</p>
              <div css={studiosContainer}>
                {studioList?.map((studio, idx) => {
                  const lastStudio = idx === studioList.length - 1;
                  return (
                    <p key={studio} css={studioName}>
                      {studio}
                      {!lastStudio && ','}
                    </p>
                  );
                })}
              </div>

              <article css={imgContainer}>
                {images.map((image, idx) => {
                  const { imgPath } = image;
                  return <img key={idx} src={imgPath} />;
                })}
              </article>
            </article>
          );
        })}
      </section>
    </PageLayout>
  );
};

export default DisplayPages;

const displaysContainer = css`
  display: flex;
  gap: 8rem;
  justify-content: center;
  flex-direction: column;

  padding: 13.2rem 6rem 14rem;
`;

const bg = css`
  position: absolute;
  top: 5.2rem;
  left: 0;
  z-index: -1;

  height: calc(100vh - 5.2rem);
`;

const displayContainer = css`
  display: flex;
  gap: 4rem;
  justify-content: center;
  flex-direction: column;
`;

const displayName = css`
  margin-bottom: 0.8rem;

  color: ${colors.gray900};
  ${fonts.desktop_title_semi_28};
`;

const studiosContainer = css`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const studioName = css`
  color: ${colors.gray900};
  ${fonts.desktop_body_reg_20};
`;

const imgContainer = css`
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(3, 1fr);
`;
