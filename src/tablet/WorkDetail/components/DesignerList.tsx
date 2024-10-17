import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { WORK_DETAIL_DESIGNER } from '../../../mobile/constants/WORK_DETAIL_DESIGNER';
import { colors, fonts } from '../../../styles/theme';

const DesignerList = () => {
  return (
    <div css={designerListContainer}>
      <h1 css={title}>Designed By</h1>
      <ul css={designerList}>
        {WORK_DETAIL_DESIGNER.map((item) => {
          const { designerId, name, engName, email, works } = item;
          const url = engName.trim().split(' ').join('-');

          const { images } = works;
          const { imgPath } = images.length === 2 ? images[1] : images[0];
          return (
            <Link to={`/designers/${url}`} css={listCss} key={designerId}>
              <div css={textInfo}>
                <p>{name}</p>
                <p>{engName}</p>
                <p>{email}</p>
              </div>
              <div css={imgBox}>
                <img src={imgPath} css={imgCss} />
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default DesignerList;

const designerListContainer = css`
  display: flex;
  gap: 4.8rem;
  flex-direction: column;

  width: 100%;
  padding: 20rem 2.4rem 0;
`;

const title = css`
  color: ${colors.gray900};

  ${fonts.mobile_title_semi_20};
`;

const designerList = css`
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
`;

const listCss = css`
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;

  width: calc(100dvw / 2.19);
`;

const textInfo = css`
  p:nth-of-type(1) {
    color: ${colors.gray900};

    ${fonts.tablet_body_semi_16};
  }

  p:nth-of-type(2) {
    margin-top: 0.2rem;

    color: ${colors.gray900};

    ${fonts.desktop_cap_reg_14};
  }

  p:nth-of-type(3) {
    margin-top: 0.8rem;

    color: ${colors.gray500};

    ${fonts.desktop_cap_reg_14};
  }
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
