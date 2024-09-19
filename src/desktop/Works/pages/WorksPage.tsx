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
  height: 100vh;
  padding: calc(100vh / 5.33) calc(100vh / 2.03) calc(100vh / 5.47)
    calc(100vh / 13.5);
`;

const bg = css`
  position: absolute;
  top: 5.2rem;
  left: 0;
  z-index: -1;

  height: calc(100vh - 5.2rem);
`;

const title = css`
  margin-bottom: calc(100vh / 11.25);

  color: ${colors.gray900};
  ${fonts.desktop_title_reg_54};
`;
