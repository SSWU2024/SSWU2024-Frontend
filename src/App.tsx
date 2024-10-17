import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import DesktopRouter from './DesktopRouter';
import MobileRouter from './MobileRouter';
import { GlobalStyles } from './styles/GlobalStyles';
import TabletRouter from './TabletRouter';

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

  const renderRouter = () => {
    if (width < 768) {
      return <MobileRouter />;
    } else if (width >= 768 && width < 1440) {
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
