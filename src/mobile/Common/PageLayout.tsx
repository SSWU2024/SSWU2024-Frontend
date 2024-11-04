import { css } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;

  return (
    <div css={pageLayoutCss}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;

const pageLayoutCss = css`
  position: relative;

  width: 100%;
  min-height: 100dvh;
`;
