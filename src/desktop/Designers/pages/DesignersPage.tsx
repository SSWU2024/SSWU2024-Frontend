import { css } from '@emotion/react';
import { useEffect } from 'react';
import { colors, fonts } from '../../../styles/theme';
import PageLayout from '../../Common/PageLayout';
import { ImgBg3Web } from '../../assets/image';
import TotalDesigners from '../components/TotalDesigners';

const DesignersPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <PageLayout>
      <img src={ImgBg3Web} css={bg} />
      <section css={designersContainer}>
        <p css={title}>Designers</p>
        <TotalDesigners />
      </section>
    </PageLayout>
  );
};

export default DesignersPage;

const bg = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  width: 100%;
  height: calc(100vh - 5.2rem);
`;

const designersContainer = css`
  padding: 5.2rem 6.2rem 0 6rem;
  margin: 5.2rem 0 14rem;
`;

const title = css`
  margin-bottom: calc(100vh / 10.125);

  color: ${colors.gray900};
  ${fonts.desktop_title_reg_54};
`;
