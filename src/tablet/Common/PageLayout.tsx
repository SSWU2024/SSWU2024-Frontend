import { css } from '@emotion/react';

import { useEffect } from 'react';
import Footer from '../../mobile/Common/Footer';
import Header from './Header';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;

  useEffect(() => {
    scrollTo({ top: 0, left: 0, behavior: 'instant' });
  });

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
`;
