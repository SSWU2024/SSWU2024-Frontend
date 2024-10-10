import { css } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';
import { PageLayoutProps } from './types/commonTypes';

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div css={pageLayoutContainer}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;

const pageLayoutContainer = css`
  position: relative;
`;
