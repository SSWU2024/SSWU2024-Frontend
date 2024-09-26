import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DesignerPage from './mobile/Designer/page/DesignerPage';
import DesignersPage from './mobile/Designers/page/DesignersPage';
import DisplaysPage from './mobile/Displays/page/DisplaysPage';
import MainPage from './mobile/Main/pages/MainPage';
import StudioPage from './mobile/Studio/page/StudioPage';
import WorkDetailPage from './mobile/WorkDetail/page/WorkDetailPage';
import WorksPage from './mobile/Works/page/WorksPage';

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/:currentUrl', element: <StudioPage /> },
  { path: '/:currentUrl/:workId', element: <WorkDetailPage /> },
  { path: '/works', element: <WorksPage /> },
  { path: '/designers', element: <DesignersPage /> },
  { path: '/designers/:name', element: <DesignerPage /> },
  { path: '/displays', element: <DisplaysPage /> },
]);

const MobileRouter = () => {
  return <RouterProvider router={router} />;
};

export default MobileRouter;
