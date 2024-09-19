import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { colors, fonts } from '../../../styles/theme';
import { ImgBg2Web } from '../../assets/image';
import PageLayout from '../../Common/PageLayout';

const DUMMY = {
  works: [
    {
      workTitle: '제목 1',
      images: [
        {
          imgPath: 'https://xen-api.linkareer.com/attachments/80334',
          fileFormat: 'jpeg',
        },
      ],
      designers: [
        {
          name: '서아름',
        },
        {
          name: '이도윤',
        },
      ],
    },
    {
      workTitle: '제목 2',
      images: [
        {
          imgPath:
            'https://mblogthumb-phinf.pstatic.net/20151231_18/kimtaeyon1_1451530246034U8P5X_PNG/%BF%A1%BA%F1%C3%F2%C2%A9_%282%29.png?type=w420',
          fileFormat: 'png',
        },
      ],
      designers: [
        {
          name: '이도리',
        },
      ],
    },
    {
      workTitle: '제목 3',
      images: [
        {
          imgPath:
            'https://blog.kakaocdn.net/dn/cYnypO/btrzcSaVpNa/VwDfLj2yOWZDKpAhZIlYJ1/img.jpg',
          fileFormat: 'jpeg',
        },
      ],
      designers: [
        {
          name: '루밍',
        },
      ],
    },
    {
      workTitle: '제목 4',
      images: [
        {
          imgPath:
            'https://i.pinimg.com/236x/13/26/c1/1326c1f3ec2a54bfc0893a0c582360de.jpg',
          fileFormat: 'jpeg',
        },
      ],
      designers: [
        {
          name: '서아름',
        },
        {
          name: '이도윤',
        },
      ],
    },
    {
      workTitle: '제목 5',
      images: [
        {
          imgPath:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-g0xvY7bk8G1iY6o3AfnJksWjZjRebCNzTg&s',
          fileFormat: 'jpg',
        },
      ],
      designers: [
        {
          name: '이도리',
        },
      ],
    },
    {
      workTitle: '제목 6',
      images: [
        {
          imgPath:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_eHPe1zDes6lLBCoyiKmH_NSchwwROudnA&s',
          fileFormat: 'jpeg',
        },
      ],
      designers: [
        {
          name: '루밍',
        },
      ],
    },
  ],
};

const StudioPage = () => {
  const navigate = useNavigate();
  const { currentUrl } = useParams();
  const { state } = useLocation();
  const { id, studio, advisor, description } = state || {};

  const { works } = DUMMY;

  // 빌드 에러 방지를 위한 코드 -> id는 추후 api 통신에 쓰일 예정
  console.log(id);

  useEffect(() => {
    if (!state) {
      // 추후 에러 페이지로 이동 예정
      navigate('/');
    }
  }, [state, currentUrl]);

  return (
    <PageLayout>
      <section css={studioPageContainer}>
        <img src={ImgBg2Web} css={bg} />

        <article css={studioInfo}>
          <div css={nameContainer}>
            <p css={studioName}>{studio}</p>
            <p css={advisorName}>{`지도교수 ${advisor}`}</p>
          </div>
          <p css={desc}>{description}</p>
        </article>

        <article css={worksContainer}>
          {works.map((work) => {
            const { workTitle, images, designers } = work;
            const { imgPath } = images[0];
            return (
              <article key={workTitle} css={workContainer}>
                <img src={imgPath} css={workImg} />
                <p css={title}>{workTitle}</p>
                <div css={designerNameContainer}>
                  {designers.map((designer) => {
                    const { name } = designer;
                    return (
                      <p key={name} css={designerName}>
                        {name}
                      </p>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </article>
      </section>
    </PageLayout>
  );
};

export default StudioPage;

const studioPageContainer = css`
  display: flex;
  gap: calc(100vh / 5.06);
  flex-direction: column;
  position: relative;

  width: 100%;
  padding: calc(100vh / 6.13) calc(100% / 24) 0;
  margin-bottom: calc(100vh / 4.21);
`;

const bg = css`
  position: absolute;
  top: 5.2rem;
  left: 0;
  z-index: -1;

  min-height: calc(100vh - 5.2rem);

  height: 100%;
`;

const studioInfo = css`
  display: flex;
  gap: calc(100% / 45);
`;

const nameContainer = css`
  display: flex;
  gap: calc(100vh / 135);
  justify-content: center;
  flex-direction: column;
`;

const studioName = css`
  min-width: 30.6rem;

  color: ${colors.gray900};
  ${fonts.desktop_title_semi_28};
`;

const advisorName = css`
  color: ${colors.pink300};
  ${fonts.desktop_body_semi_20};
`;

const desc = css`
  margin-right: calc(100% / 3.62);

  color: ${colors.gray900};
  ${fonts.desktop_body_reg_16};

  word-break: keep-all;
`;

const worksContainer = css`
  display: grid;
  gap: calc(100vh / 15.58) calc(100% / 41.25);
  grid-template-columns: repeat(4, 1fr);
`;

const workContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const workImg = css`
  width: 100%;
  height: 100%;
  margin-bottom: calc(100vh / 67.5);

  object-fit: cover;
`;

const title = css`
  margin-bottom: calc(100vh / 202.5);

  color: ${colors.gray900};
  ${fonts.desktop_body_semi_20};
`;

const designerNameContainer = css`
  display: flex;
  align-items: center;
`;

const designerName = css`
  color: ${colors.gray900};
  ${fonts.desktop_body_reg_18};
`;
