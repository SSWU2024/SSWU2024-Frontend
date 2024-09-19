import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DesignersPage from './desktop/Designers/pages/DesignersPage';
import DisplayPages from './desktop/Displays/pages/DisplayPages';
import MainPage from './desktop/Main/pages/MainPage';
import Studios from './desktop/Studios/components/Studios';

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/studio', element: <Studios /> },
  { path: '/designer', element: <DesignersPage /> },
  { path: '/display', element: <DisplayPages /> },
]);

const DesktopRouter = () => {
  return <RouterProvider router={router} />;
};

export default DesktopRouter;
