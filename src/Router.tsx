import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DesignerPostPage from './desktop/DesignerPost/pages/DesignerPostPage';
import DisplayPostPage from './desktop/DisplayPost/pages/DisplayPostPage';
import DisplayWorkPostPage from './desktop/DisplayWorkPost/pages/DisplayWorkPostPage';
import ImagePostPage from './desktop/ImagePost/pages/ImagePostPage';
import WorkPostPage from './desktop/WorkPost/pages/WorkPostPage';
import {
  designerPageElement,
  designersPageElement,
  mainPageElement,
  studioPageElement,
  workDetailPageElement,
  worksPageElement,
} from './utils/renderElements';

const Router = ({ width }: { width: number }) => {
  const router = createBrowserRouter([
    { path: '/', element: mainPageElement(width) },
    { path: '/:currentUrl', element: studioPageElement(width) },
    { path: '/:currentUrl/:workId', element: workDetailPageElement(width) },
    { path: '/works', element: worksPageElement(width) },
    { path: '/designers', element: designersPageElement(width) },
    { path: '/designers/:name', element: designerPageElement(width) },

    // { path: '/displays', element: <DisplayPages /> },
    { path: '/img-post', element: <ImagePostPage /> },
    { path: '/designer-post', element: <DesignerPostPage /> },
    { path: '/work-post', element: <WorkPostPage /> },
    { path: '/display-post', element: <DisplayPostPage /> },
    { path: '/display-work-post', element: <DisplayWorkPostPage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
