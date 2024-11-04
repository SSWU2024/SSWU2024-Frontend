import { css } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Router from './Router';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);

    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      // cleanup
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div css={wrapperCss}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Router width={width} />
      </QueryClientProvider>
    </div>
  );
};

export default App;

const wrapperCss = css`
  min-height: calc(var(--vh, 1vh) * 100);
`;
