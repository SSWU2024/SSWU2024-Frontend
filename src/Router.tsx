import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
