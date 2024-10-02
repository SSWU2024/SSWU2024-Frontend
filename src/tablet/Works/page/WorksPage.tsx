import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { STUDIO_DETAILS } from '../../../constants/studioDetail';
import { colors, fonts } from '../../../styles/theme';
import PageLayout from '../../Common/PageLayout';
import { ImgBg2Tablet } from '../../assets/image';

const WorksPage = () => {
  return (
    <PageLayout>
      <section css={worksContainer(ImgBg2Tablet)}>
        <div>
          <h1 css={title}>Works</h1>
          <ul>
            {STUDIO_DETAILS.map((detail) => {
              const { id, studio, advisor, description, imgsrc, url } = detail;
              return (
                <Link
                  to={url}
                  state={{ studio, advisor, description, imgsrc }}
                  key={id}
                  css={detailContainer}
                >
                  <h1 css={studioTitle}>{detail.studio}</h1>
                  <span css={advisorCss}>지도교수 {detail.advisor}</span>
                </Link>
              );
            })}
          </ul>
        </div>
      </section>
    </PageLayout>
  );
};

export default WorksPage;

const worksContainer = (url: string) => css`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding: 5.6rem 2.4rem 10rem;

  background-position: top 5.6rem left 0;
  background-size: cover;
  background-image: url(${url});
  background-repeat: no-repeat;
`;

const title = css`
  padding: 5.2rem 0 4rem;

  color: ${colors.gray900};

  ${fonts.tablet_title_med_36};
`;

const detailContainer = css`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  width: 100%;
  padding: 2.4rem 0;

  cursor: pointer;
`;

const studioTitle = css`
  color: ${colors.gray900};

  ${fonts.desktop_body_reg_20};
`;

const advisorCss = css`
  color: ${colors.pink300};

  ${fonts.tablet_body_semi_16};
`;
