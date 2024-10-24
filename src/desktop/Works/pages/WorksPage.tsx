import { css } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';
import { ImgBg2Web } from '../../assets/image';
import PageLayout from '../../Common/PageLayout';
import Studios from '../components/Studios';

const WorksPage = () => {
  return (
    <PageLayout>
      <section css={worksPageContainer}>
        <img src={ImgBg2Web} css={bg} />

        <p css={title}>Works</p>
        <Studios />
      </section>
    </PageLayout>
  );
};

export default WorksPage;

const worksPageContainer = css`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 100%;
  min-height: calc(100vh - 10.4rem);

  padding: calc(100vh / 8.1) calc(100% / 24) calc(100vh / 8.4375);
  margin-top: 5.2rem;
`;

const bg = css`
  position: absolute;
  top: 5.2rem;
  left: 0;
  z-index: -1;

  min-height: calc(100vh - 10.4rem);

  width: 100%;
  height: 100%;
`;

const title = css`
  margin-bottom: calc(100vh / 11.25);

  color: ${colors.gray900};
  ${fonts.desktop_title_reg_54};
`;
