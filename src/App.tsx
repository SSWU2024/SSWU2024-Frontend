import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Router from './Router';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      // cleanup
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router width={width} />
    </QueryClientProvider>
  );
};

export default App;
