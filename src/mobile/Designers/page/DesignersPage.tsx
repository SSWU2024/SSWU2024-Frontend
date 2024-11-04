import { css } from '@emotion/react';
import { useEffect } from 'react';
import { colors, fonts } from '../../../styles/theme';
import PageLayout from '../../Common/PageLayout';
import { ImgBg3Mobile } from '../../assets/image';
import DesignerList from '../components/DesignerList';

const DesignersPage = () => {
  useEffect(() => {
    scrollTo({ top: 0, left: 0, behavior: 'instant' });
  });
  return (
    <PageLayout>
      <div css={designersCss(ImgBg3Mobile)}>
        <p css={text}>Designers</p>
        <DesignerList />
      </div>
    </PageLayout>
  );
};

export default DesignersPage;

const designersCss = (url: string) => css`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  min-height: 100dvh;

  padding: 5.8rem 1.6rem 5.6rem;

  background-position: top 5.8rem right 0;
  background-size: contain;
  background-image: url(${url});
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const text = css`
  padding: 3.2rem 0 4.8rem;

  color: ${colors.gray900};

  ${fonts.mobile_title_reg_32};
`;
