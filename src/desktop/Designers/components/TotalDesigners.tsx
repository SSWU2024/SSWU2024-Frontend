import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import useGetDesigners from '../../../libs/hooks/useGetDesigners';
import { designerType } from '../type/designersType';

const TotalDesigners = () => {
  const { designers, isLoading } = useGetDesigners();
  const designersArr = !isLoading && designers.data;

  return (
    <article css={totalDesigners}>
      {!isLoading &&
        designersArr.map((designer: designerType) => {
          const { designerId, engName, imgPath } = designer;
          const url = engName.split(' ').join('-');

          return (
            <Link key={designerId} to={url} state={{ designerId: designerId }}>
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
  gap: calc(100vh / 20.25) calc(100% / 41.18);
  grid-template-columns: repeat(6, 1fr);
`;

const designerImg = css`
  width: 100%;
`;
