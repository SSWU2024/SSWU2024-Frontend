import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DesignerPage from './tablet/Designer/page/DesignerPage';
import DesignersPage from './tablet/Designers/page/DesignersPage';
import DisplaysPage from './tablet/Displays/page/DisplaysPage';
import MainPage from './tablet/Main/page/MainPage';
import StudioPage from './tablet/Studio/page/StudioPage';
import WorkDetailPage from './tablet/WorkDetail/page/WorkDetailPage';
import WorksPage from './tablet/Works/page/WorksPage';

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/:currentUrl', element: <StudioPage /> },
  { path: '/:currentUrl/:workId', element: <WorkDetailPage /> },
  { path: '/works', element: <WorksPage /> },
  { path: '/designers', element: <DesignersPage /> },
  { path: '/designers/:name', element: <DesignerPage /> },
  { path: '/displays', element: <DisplaysPage /> },
]);

const TabletRouter = () => {
  return <RouterProvider router={router} />;
};

export default TabletRouter;
