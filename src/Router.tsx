import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DesignerPostPage from './desktop/DesignerPost/pages/DesignerPostPage';
import DisplayPostPage from './desktop/DisplayPost/pages/DisplayPostPage';
import DisplayWorkPostPage from './desktop/DisplayWorkPost/pages/DisplayWorkPostPage';
import ImagePostPage from './desktop/ImagePost/pages/ImagePostPage';

import DesktopDesignerPage from './desktop/Designer/pages/DesignerPage';
import DesktopDesignersPage from './desktop/Designers/pages/DesignersPage';
import DesktopMainPage from './desktop/Main/pages/MainPage';
import DesktopStudioPage from './desktop/Studio/pages/StudioPage';
import DesktopWorkDetailPage from './desktop/WorkDetail/pages/WorkDetailPage';
import WorkPostPage from './desktop/WorkPost/pages/WorkPostPage';
import DesktopWorksPage from './desktop/Works/pages/WorksPage';

import MobileDesignerPage from './mobile/Designer/page/DesignerPage';
import MobileDesignersPage from './mobile/Designers/page/DesignersPage';
import MobileMainPage from './mobile/Main/pages/MainPage';
import MobileStudioPage from './mobile/Studio/page/StudioPage';
import MobileWorkDetailPage from './mobile/WorkDetail/page/WorkDetailPage';
import MobileWorksPage from './mobile/Works/page/WorksPage';

import TabletDesignerPage from './tablet/Designer/page/DesignerPage';
import TabletDesignersPage from './tablet/Designers/page/DesignersPage';
import TabletMainPage from './tablet/Main/page/MainPage';
import TabletStudioPage from './tablet/Studio/page/StudioPage';
import TabletWorkDetailPage from './tablet/WorkDetail/page/WorkDetailPage';
import TabletWorksPage from './tablet/Works/page/WorksPage';

const Router = ({ width }: { width: number }) => {
  const renderPageElement = ({
    mobile,
    tablet,
    desktop,
  }: {
    mobile: React.ReactNode;
    tablet: React.ReactNode;
    desktop: React.ReactNode;
  }) => {
    if (width < 768) return mobile;
    else if (width >= 768 && width < 1440) return tablet;
    else return desktop;
  };

  const mainPageElement = renderPageElement({
    mobile: <MobileMainPage />,
    tablet: <TabletMainPage />,
    desktop: <DesktopMainPage />,
  });

  const studioPageElement = renderPageElement({
    mobile: <MobileStudioPage />,
    tablet: <TabletStudioPage />,
    desktop: <DesktopStudioPage />,
  });

  const worksPageElement = renderPageElement({
    mobile: <MobileWorksPage />,
    tablet: <TabletWorksPage />,
    desktop: <DesktopWorksPage />,
  });

  const workDetailPageElement = renderPageElement({
    mobile: <MobileWorkDetailPage />,
    tablet: <TabletWorkDetailPage />,
    desktop: <DesktopWorkDetailPage />,
  });

  const designersPageElement = renderPageElement({
    mobile: <MobileDesignersPage />,
    tablet: <TabletDesignersPage />,
    desktop: <DesktopDesignersPage />,
  });

  const designerPageElement = renderPageElement({
    mobile: <MobileDesignerPage />,
    tablet: <TabletDesignerPage />,
    desktop: <DesktopDesignerPage />,
  });

  const router = createBrowserRouter([
    { path: '/', element: mainPageElement },
    { path: '/:currentUrl', element: studioPageElement },
    { path: '/:currentUrl/:workId', element: workDetailPageElement },
    { path: '/works', element: worksPageElement },
    { path: '/designers', element: designersPageElement },
    { path: '/designers/:name', element: designerPageElement },

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
