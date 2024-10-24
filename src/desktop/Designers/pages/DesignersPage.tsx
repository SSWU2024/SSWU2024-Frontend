import { css } from '@emotion/react';
import { useEffect } from 'react';
import { colors, fonts } from '../../../styles/theme';
import PageLayout from '../../Common/PageLayout';
import { ImgBg3Web } from '../../assets/image';
import TotalDesigners from '../components/TotalDesigners';

const DesignersPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <PageLayout>
      <section css={designersContainer(ImgBg3Web)}>
        <p css={title}>Designers</p>
        <TotalDesigners />
      </section>
    </PageLayout>
  );
};

export default DesignersPage;

const designersContainer = (imgUrl: string) => css`
  padding: calc(100vh / 8.1) calc(100% / 24) calc(100vh / 5.7857);
  margin-top: 5.2rem;

  background-position: top 5.2rem right 0;
  background-size: contain;
  background-image: url(${imgUrl});
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const title = css`
  margin-bottom: calc(100vh / 10.125);

  color: ${colors.gray900};
  ${fonts.desktop_title_reg_54};
`;
