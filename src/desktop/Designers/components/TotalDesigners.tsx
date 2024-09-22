import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const DUMMY = {
  designers: [
    {
      designerId: 1,
      engName: 'Chung Yujin',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 2,
      engName: 'Rye Haena',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 3,
      engName: 'Han Soyeon',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 4,
      engName: 'Seo Areum',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 5,
      engName: 'Lee Doyun',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 6,
      engName: 'Yang Jonguk',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 7,
      engName: 'Hi Hi',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 8,
      engName: 'Test',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 9,
      engName: 'Lee Jungwoo',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 10,
      engName: 'Designer',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 11,
      engName: 'Kim Designer',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 12,
      engName: 'Choi Designer',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 13,
      engName: 'Kim Jimin',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 14,
      engName: 'Lee Jimin',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 15,
      engName: 'Kwon Eunbeen',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 16,
      engName: 'Hyeon YeJin',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 17,
      engName: 'Lee Dongseob',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 18,
      engName: 'Paik Jongwon',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 19,
      engName: 'Kim Donghwi',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 20,
      engName: 'Park Designer',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
    {
      designerId: 21,
      engName: 'Lee Designer',
      imgPath:
        'https://velog.velcdn.com/images/aroo_ming/post/8f14978d-527a-4f41-bd76-865b325ae7d8/image.png',
    },
  ],
};

const TotalDesigners = () => {
  const { designers } = DUMMY;

  return (
    <article css={totalDesigners}>
      {designers.map((designer) => {
        const { designerId, engName, imgPath } = designer;
        const url = engName.split(' ').join('-');

        return (
          <Link key={designerId} to={url}>
            <img src={imgPath} css={designerImg} />
          </Link>
        );
      })}
    </article>
  );
};

export default TotalDesigners;
const totalDesigners = css`
  display: grid;
  gap: 4rem 3.2rem;
  grid-template-columns: repeat(6, 1fr);
`;

const designerImg = css`
  width: 19.3rem;
  height: 39rem;
`;
