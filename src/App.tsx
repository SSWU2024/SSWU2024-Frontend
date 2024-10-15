import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import DesktopRouter from './DesktopRouter';
import MobileRouter from './MobileRouter';
import { GlobalStyles } from './styles/GlobalStyles';
import TabletRouter from './TabletRouter';

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  const width = useRef(window.innerWidth);

  const handleResize = () => {
    width.current = window.innerWidth;
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      // cleanup
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderRouter = () => {
    if (width.current < 768) {
      return <MobileRouter />;
    } else if (width.current >= 768 && width.current < 1440) {
      return <TabletRouter />;
    } else {
      return <DesktopRouter />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      {renderRouter()}
    </QueryClientProvider>
  );
};

export default App;
