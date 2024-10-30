import { css } from '@emotion/react';
import DesignerList from '../../../mobile/Designers/components/DesignerList';
import { colors, fonts } from '../../../styles/theme';
import PageLayout from '../../Common/PageLayout';
import { ImgBg3Tablet } from '../../assets/image';

const DesignersPage = () => {
  return (
    <PageLayout>
      <div css={designersCss(ImgBg3Tablet)}>
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

  @media (768px <= width < 1025px) {
    padding: 5.6rem 2.4rem 10rem;
  }

  @media (1025px <= width < 1440px) {
    padding: 5.6rem 4rem 10rem;
  }

  background-position: top 5.6rem right 0;
  background-size: contain;
  background-image: url(${url});
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const text = css`
  padding: 5.4rem 0 6rem;

  color: ${colors.gray900};

  ${fonts.tablet_title_med_36};
`;
