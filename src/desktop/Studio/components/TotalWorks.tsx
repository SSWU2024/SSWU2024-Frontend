import { css } from '@emotion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { colors, fonts } from '../../../styles/theme';
import { WorkType } from '../types/studioType';

const TotalWorks = () => {
  // const TotalWorks = ({ id }: TotalWorksProps) => {
  // const { totalWorks, isLoading } = useGetStudioWorks(id);
  // const { works } = !isLoading && totalWorks.data;

  const works = [
    {
      workId: 1,
      workEngTitle: 'title-1',
      workTitle: '제목 1',
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
      workId: 2,
      workEngTitle: 'title-2',
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
      workId: 3,
      workEngTitle: 'title-3',
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
      workId: 4,
      workEngTitle: 'title-4',
      workTitle: '제목 4',
      images: [
        {
          imgPath:
            'https://i.pinimg.com/236x/13/26/c1/1326c1f3ec2a54bfc0893a0c582360de.jpg',
          fileFormat: 'jpeg',
        },
        {
          imgPath:
            'https://i.pinimg.com/originals/a0/89/e7/a089e759d7e713b4eba7b6cda87b6c8a.gif',
          fileFormat: 'gif',
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
      workId: 5,
      workEngTitle: 'title-5',
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
      workId: 6,
      workEngTitle: 'title-6',
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
  ];

  const [hoveredImg, setHoveredImg] = useState({
    hoveredSrc: '',
    hovredTitle: '',
  });

  const { hoveredSrc, hovredTitle } = hoveredImg;

  const handleHoverImg = (
    images: Array<{ imgPath: string; fileFormat: string }>,
    title: string,
  ) => {
    if (images.length > 1) {
      const { imgPath } = images[1];
      setHoveredImg({
        hoveredSrc: imgPath,
        hovredTitle: title,
      });
    } else {
      setHoveredImg({
        hoveredSrc: '',
        hovredTitle: title,
      });
    }
  };

  const handleLeaveImg = () => {
    setHoveredImg({
      hoveredSrc: '',
      hovredTitle: '',
    });
  };

  return (
    <article css={worksContainer}>
      {/* {!isLoading &&
        works.map((work: WorkType) => {
          const { workId, workTitle, images, designers, workEngTitle } = work;
          const { imgPath } = images[0];
          const isHoveredGif = hoveredSrc && workTitle === hovredTitle;
          const isHoveredImg = workTitle === hovredTitle;
          const url = workEngTitle.trim().split(' ').join('-');

          return (
            <article
              key={workTitle}
              css={workContainer}
              onMouseEnter={() => handleHoverImg(images, workTitle)}
              onMouseLeave={handleLeaveImg}
            >
              <Link to={url} state={{ workId: workId }}>
                <img src={isHoveredGif ? hoveredSrc : imgPath} css={workImg} />
                <p css={title(isHoveredImg)}>{workTitle}</p>
                <div css={designerNameContainer}>
                  {designers.map((designer) => {
                    const { name } = designer;
                    return (
                      <p key={name} css={designerName(isHoveredImg)}>
                        {name}
                      </p>
                    );
                  })}
                </div>
              </Link>
            </article>
          );
        })} */}
      {works.map((work: WorkType) => {
        const { workId, workTitle, images, designers, workEngTitle } = work;
        const { imgPath } = images[0];
        const isHoveredGif = hoveredSrc && workTitle === hovredTitle;
        const isHoveredImg = workTitle === hovredTitle;
        const url = workEngTitle.trim().split(' ').join('-');

        return (
          <article
            key={workTitle}
            css={workContainer}
            onMouseEnter={() => handleHoverImg(images, workTitle)}
            onMouseLeave={handleLeaveImg}
          >
            <Link to={url} state={{ workId: workId }}>
              <img src={isHoveredGif ? hoveredSrc : imgPath} css={workImg} />
              <p css={title(isHoveredImg)}>{workTitle}</p>
              <div css={designerNameContainer}>
                {designers.map((designer) => {
                  const { name } = designer;
                  return (
                    <p key={name} css={designerName(isHoveredImg)}>
                      {name}
                    </p>
                  );
                })}
              </div>
            </Link>
          </article>
        );
      })}
    </article>
  );
};

export default TotalWorks;

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
  min-width: 30.6rem;
  min-height: 30.6rem;

  width: 100%;
  aspect-ratio: 1 / 1;

  margin-bottom: calc(100vh / 67.5);

  object-fit: cover;
`;

const title = (isHoveredImg: boolean) => css`
  margin-bottom: calc(100vh / 202.5);

  color: ${isHoveredImg ? colors.pink300 : colors.gray900};
  ${fonts.desktop_body_semi_20};
`;

const designerNameContainer = css`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const designerName = (isHoveredImg: boolean) => css`
  color: ${isHoveredImg ? colors.pink300 : colors.gray900};
  ${fonts.desktop_body_reg_18};
`;
