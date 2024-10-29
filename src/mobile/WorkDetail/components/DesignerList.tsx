import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { colors, fonts } from '../../../styles/theme';
import { renderEngName } from '../../../utils/renderEngName';

export interface DesignerListProps {
  designers: Array<{
    designerId: number;
    name: string;
    engName: string;
    email: string;
    works: Array<{
      workId: number;
      workTitle: string;
      studioNm: string;
      images: Array<{ imgPath: string; fileFormat: string }>;
    }>;
  }>;
  currentWorkId: number;
}

const DesignerList = ({ designers, currentWorkId }: DesignerListProps) => {
  return (
    <div css={designerListContainer}>
      <h1 css={title}>Designed by</h1>
      {designers && (
        <ul css={designerList}>
          {designers.map((item) => {
            const { designerId, name, engName, email, works } = item;
            const url = engName.trim().split(' ').join('-');
            const newEngName = renderEngName(engName);

            const { images } =
              works.length === 2
                ? works.filter((work) => work.workId !== currentWorkId)[0]
                : works[0];

            // const { images, workId } =
            //   works.length === 2
            //     ? works.filter((work) => work.workId !== currentWorkId)[0]
            //     : works[0];

            const imgUrl =
              images.length === 2 ? images[1].imgPath : images[0].imgPath;

            return (
              <Link
                to={`/designers/${url}`}
                css={listCss}
                key={designerId}
                state={{ designerId: designerId }}
              >
                {/* <Link
                to={`/designers/${url}`}
                css={listCss}
                key={designerId}
                state={{ workId }}
              > */}
                <div css={textInfo}>
                  <div css={nameSection}>
                    <p>{name}</p>
                    <p>{newEngName}</p>
                  </div>
                  <p css={emailCss}>{email}</p>
                </div>
                <div css={imgBox}>
                  <img src={imgUrl} css={imgCss} />
                </div>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DesignerList;

const designerListContainer = css`
  display: flex;
  gap: 3.2rem;
  flex-direction: column;

  width: 100%;
  padding: 14rem 1.6rem 0;
`;

const title = css`
  color: ${colors.gray900};

  ${fonts.mobile_title_semi_20};
`;

const designerList = css`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

const listCss = css`
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;

  width: 100%;
`;

const textInfo = css`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
`;

const nameSection = css`
  display: flex;
  gap: 0.2rem;
  flex-direction: column;

  padding: 0.4rem 0;

  color: ${colors.gray900};

  p:nth-of-type(1) {
    ${fonts.mobile_body_semi_14};
  }

  p:nth-of-type(2) {
    ${fonts.mobile_body_reg_14};
  }
`;

const emailCss = css`
  color: ${colors.gray500};

  ${fonts.mobile_body_reg_14};
`;

const imgBox = css`
  position: relative;

  width: 50%;

  ::after {
    display: block;
    content: '';

    padding-bottom: 100%;
  }
`;

const imgCss = css`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;
