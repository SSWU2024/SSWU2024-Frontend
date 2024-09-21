import { css } from '@emotion/react';
import { useState } from 'react';
import { colors, fonts } from '../../../styles/theme';
import PageLayout from '../../Common/PageLayout';

const DUMMY = {
  workTitle: '디지털 일러스트',
  workBody:
    '부정적인 감정이 들었을 때, 부정적인 상황이 생겼을 때 여러분들은 어떤 해결 방법을 가지고 있나요?\n저는 부정적인 감정과 상황을 완전히 해결하려고 하기보다는 일단은 덮어두고 그 감정과 상황을 회피하려는 성향이 있습니다.\n그리고 뭔가 긍정적인 감정과 상황으로 덮으려고 합니다.\n부정적인 감정과 상황을 긍정적인 감정과 상황으로 덮는 것을 엽서와 엽서를 덮는 필름에 시각화하여 표현하였습니다.',
  workEngBody: `What kind of solution do you have when you feel negative emotions or when a negative situation occurs?\nRather than trying to solve negative emotions and situations completely, I tend to avoid them by hiding.  And I'm trying to cover it up with some positive emotions and situations.\nIt visualized negative emotions and situations covered with positive emotions and situations on film covering postcards and postcards.`,
  thumbnail:
    'https://mblogthumb-phinf.pstatic.net/20151231_18/kimtaeyon1_1451530246034U8P5X_PNG/%BF%A1%BA%F1%C3%F2%C2%A9_%282%29.png?type=w420',
  images: [
    {
      sort: 1,
      imgPath: 'https://cdn2.colley.kr/item_383431_1_0_title_0.jpeg',
    },
    {
      sort: 2,
      imgPath:
        'https://i.pinimg.com/originals/99/7a/9b/997a9b2cd93277769ca9b3d109bceed7.jpg',
    },
    {
      sort: 3,
      imgPath: 'https://cdn2.colley.kr/item_127602_1_4_title_4.jpeg',
    },
    {
      sort: 4,
      imgPath:
        'https://muko.kr/files/attach/images/2022/11/22/81725dc1572f2c88c1b2787db750735f.jpg',
    },
    {
      sort: 5,
      imgPath:
        'https://i.pinimg.com/236x/2b/7b/dc/2b7bdc1b28064e8496bcc4e907cc87e3.jpg',
    },
  ],
  designers: [
    {
      name: '양종욱',
      engName: 'Jonguk Yang',
      email: 'didwhddnr123@naver.com',
      workTitle: '서비스 디자인',
      studioNm: '디자인씽킹스튜디오',
      images: [
        {
          imgPath: 'https://xen-api.linkareer.com/attachments/80334',
          fileFormat: 'jpeg',
        },
        {
          imgPath:
            'https://i.pinimg.com/originals/a0/89/e7/a089e759d7e713b4eba7b6cda87b6c8a.gif',
          fileFormat: 'gif',
        },
      ],
    },
    {
      name: '김지훈',
      engName: 'Jihun Kim',
      email: 'jihun.kim@gmail.com',
      workTitle: '서비스 디자인',
      studioNm: '디자인씽킹스튜디오',
      images: [
        {
          imgPath:
            'https://i.pinimg.com/236x/13/26/c1/1326c1f3ec2a54bfc0893a0c582360de.jpg',
          fileFormat: 'jpeg',
        },
      ],
    },
    {
      name: '서아름',
      engName: 'Areum Seo',
      email: 'arooming123@gmail.com',
      workTitle: '서비스 디자인',
      studioNm: '디자인씽킹스튜디오',
      images: [
        {
          imgPath:
            'https://i.pinimg.com/236x/13/26/c1/1326c1f3ec2a54bfc0893a0c582360de.jpg',
          fileFormat: 'jpeg',
        },
      ],
    },
  ],
};

const WorkDetailPage = () => {
  const { workTitle, workBody, workEngBody, thumbnail, images, designers } =
    DUMMY;

  const [hoveredImg, setHoveredImg] = useState({
    hoveredTitle: '',
    hoveredName: '',
  });

  const { hoveredName, hoveredTitle } = hoveredImg;

  const handleHoverImg = (workTitle: string, name: string) => {
    setHoveredImg({
      hoveredTitle: workTitle,
      hoveredName: name,
    });
  };

  const handleLeaveImg = () => {
    setHoveredImg({
      hoveredTitle: '',
      hoveredName: '',
    });
  };

  return (
    <PageLayout>
      <section css={workDetailContainer}>
        <img src={thumbnail} css={workThumbnail} />
        <article css={workDetail}>
          <div css={workInfo}>
            <p css={title}>{workTitle}</p>
            <div css={designerContainer}>
              {designers.map((designer) => {
                const { name } = designer;
                return (
                  <p key={name} css={designerName}>
                    {name}
                  </p>
                );
              })}
            </div>
          </div>
          <div css={workDescription}>
            <p css={krDesc}>{workBody}</p>
            <p css={engDesc}>{workEngBody}</p>
          </div>
        </article>

        <article css={workImages}>
          {images.map((image) => {
            const { sort, imgPath } = image;
            return <img key={sort} src={imgPath} css={workImg} />;
          })}
        </article>

        <article css={designedByContainer}>
          <p css={designedByTitle}>Designed by</p>
          <div css={totalDesigners}>
            {designers.map((designer) => {
              const { name, engName, email, workTitle, studioNm, images } =
                designer;
              const { imgPath, fileFormat } =
                images.length > 1 ? images[1] : images[0];
              const isStaticImg = fileFormat !== 'gif';
              const isHoveredImg =
                hoveredTitle === workTitle && hoveredName === name;

              return (
                <article key={name} css={designerInfoContainer}>
                  <div css={designerInfo}>
                    <p css={designerKrName}>{name}</p>
                    <p css={designerEngName}>{engName}</p>
                    <p css={designerEmail}>{email}</p>
                  </div>
                  <img
                    src={imgPath}
                    css={designersWork(isHoveredImg)}
                    onMouseEnter={() =>
                      isStaticImg && handleHoverImg(workTitle, name)
                    }
                    onMouseLeave={handleLeaveImg}
                  ></img>

                  {isHoveredImg && (
                    <div css={hoveredInfo}>
                      <p css={hoveredWorkTitle}>{workTitle}</p>
                      <p css={hoveredStudioNm}>{studioNm}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </article>
      </section>
    </PageLayout>
  );
};

export default WorkDetailPage;

const workDetailContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const workThumbnail = css`
  width: 100%;
  height: calc(100vh / 1.65);
`;

const workDetail = css`
  display: flex;
  gap: calc(100% / 26.19);
  justify-content: center;

  margin: calc(100vh / 10.125) calc(100% / 14.4) calc(100vh / 7.79);
`;

const workInfo = css`
  display: flex;
  gap: calc(100vh / 101.25);
  flex-direction: column;

  min-width: 41.1rem;
`;

const title = css`
  color: ${colors.gray900};
  ${fonts.desktop_title_semi_28};
`;

const designerContainer = css`
  display: flex;
  gap: calc(100vh / 101.25);
  align-items: center;
`;

const designerName = css`
  color: ${colors.gray900};
  ${fonts.desktop_body_reg_20};
`;

const workDescription = css`
  display: flex;
  gap: calc(100vh / 33.75);
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
`;

const krDesc = css`
  color: ${colors.gray900};
  ${fonts.desktop_body_reg_16};

  white-space: pre-wrap;
`;

const engDesc = css`
  color: ${colors.gray500};
  ${fonts.desktop_body_lig_16};

  white-space: pre-wrap;
`;

const workImages = css`
  padding: 0 calc(100% / 14.4);
`;

const workImg = css`
  width: 100%;

  object-fit: cover;
`;

const designedByContainer = css`
  display: flex;
  gap: calc(100vh / 20.25);
  flex-direction: column;

  margin: calc(100vh / 8.1) 0 calc(100vh / 5.79) calc(100% / 24);
`;

const designedByTitle = css`
  color: ${colors.gray900};
  ${fonts.desktop_title_semi_28};
`;

const totalDesigners = css`
  display: flex;
  gap: 3.2rem;
  align-items: center;
`;

const designerInfoContainer = css`
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const designerInfo = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const designerKrName = css`
  margin-bottom: 0.4rem;

  color: ${colors.gray900};
  ${fonts.desktop_body_semi_20};
`;

const designerEngName = css`
  margin-bottom: 0.8rem;

  color: ${colors.gray900};
  ${fonts.desktop_body_reg_18};
`;

const designerEmail = css`
  color: ${colors.gray500};
  ${fonts.desktop_body_reg_16};
`;

const designersWork = (isHoveredImg: boolean) => css`
  width: 30.6rem;
  aspect-ratio: 1/1;

  ${isHoveredImg &&
  css`
    filter: brightness(0.5);
  `}
`;

const hoveredInfo = css`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
  position: absolute;
  bottom: 1.6rem;
  left: 1.6rem;
`;

const hoveredWorkTitle = css`
  color: ${colors.white};
  ${fonts.desktop_body_semi_20};
`;

const hoveredStudioNm = css`
  color: ${colors.white};
  ${fonts.desktop_body_reg_18};
`;
