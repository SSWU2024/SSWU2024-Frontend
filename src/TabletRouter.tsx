import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DesignerPage from './tablet/Designer/page/DesignerPage';
import DesignersPage from './tablet/Designers/page/DesignersPage';

import DesignerPostPage from './desktop/DesignerPost/pages/DesignerPostPage';
import DisplayPostPage from './desktop/DisplayPost/pages/DisplayPostPage';
import ImagePostPage from './desktop/ImagePost/pages/ImagePostPage';
import WorkPostPage from './desktop/WorkPost/pages/WorkPostPage';
import DisplayPage from './tablet/Display/page/DisplayPage';
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
  { path: '/displays', element: <DisplayPage /> },
  { path: '/img-post', element: <ImagePostPage /> },
  { path: '/designer-post', element: <DesignerPostPage /> },
  { path: '/work-post', element: <WorkPostPage /> },
  { path: '/display-post', element: <DisplayPostPage /> },
]);

const TabletRouter = () => {
  return <RouterProvider router={router} />;
};

export default TabletRouter;
