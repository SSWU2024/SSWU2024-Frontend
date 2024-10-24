import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DesignerPage from './desktop/Designer/pages/DesignerPage';
import DesignersPage from './desktop/Designers/pages/DesignersPage';
import DisplayPages from './desktop/Displays/pages/DisplayPages';
import ImagePostPage from './desktop/ImagePost/pages/ImagePostPage';
import MainPage from './desktop/Main/pages/MainPage';
import StudioPage from './desktop/Studio/pages/StudioPage';
import WorkDetailPage from './desktop/WorkDetail/pages/WorkDetailPage';
import WorksPage from './desktop/Works/pages/WorksPage';

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/:currentUrl', element: <StudioPage /> },
  { path: '/:currentUrl/:workId', element: <WorkDetailPage /> },
  { path: '/works', element: <WorksPage /> },
  { path: '/designers', element: <DesignersPage /> },
  { path: '/designers/:name', element: <DesignerPage /> },
  { path: '/displays', element: <DisplayPages /> },
  { path: '/img-post', element: <ImagePostPage /> },
]);

const DesktopRouter = () => {
  return <RouterProvider router={router} />;
};

export default DesktopRouter;
