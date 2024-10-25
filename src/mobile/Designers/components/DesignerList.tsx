import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { DESIGNERS } from '../../constants/DESIGNERS';

const DesignerList = () => {
  return (
    <ul css={listContainter}>
      {DESIGNERS.map((designer) => {
        const { designerId, engName, imgPath } = designer;
        const url = engName.trim().split(' ').join('-');

        return (
          <Link
            to={url}
            key={designerId}
            css={imgCss}
            state={{ designerId: designerId }}
          >
            <img src={imgPath} alt={`${engName}의 디자이너 이미지`} />
          </Link>
        );
      })}
    </ul>
  );
};

export default DesignerList;

const listContainter = css`
  display: flex;
  gap: 2.4rem 0.9rem;
  flex-wrap: wrap;

  width: 100%;
`;

const imgCss = css`
  /* 모바일 (3 컬럼) */
  @media (width < 445px) {
    flex: 0 0 calc(33.3333% - 0.6rem);
  }

  /* 모바일 (4 컬럼) */
  @media (445px<= width < 608px) {
    flex: 0 0 calc(25% - 0.7rem);
  }

  /* 모바일 (5 컬럼) */
  @media (608px<= width < 724px) {
    flex: 0 0 calc(20% - 0.75rem);
  }

  /* 모바일 (6 컬럼) */
  @media (724px<= width < 768px) {
    flex: 0 0 calc(16.6666% - 0.8rem);
  }

  /* 태블릿 (6 컬럼) */
  @media (768px <= width < 1440px) {
    flex: 0 0 calc(16.6666% - 0.8rem);
  }
`;
