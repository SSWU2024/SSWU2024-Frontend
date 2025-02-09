import { lazy, Suspense } from 'react';

// Desktop
const DesktopDesignerPage = lazy(
  () => import('../desktop/Designer/pages/DesignerPage'),
);
const DesktopDesignersPage = lazy(
  () => import('../desktop/Designers/pages/DesignersPage'),
);
const DesktopDisplayPage = lazy(
  () => import('../desktop/Displays/pages/DisplayPages'),
);
const DesktopMainPage = lazy(() => import('../desktop/Main/pages/MainPage'));
const DesktopStudioPage = lazy(
  () => import('../desktop/Studio/pages/StudioPage'),
);
const DesktopWorkDetailPage = lazy(
  () => import('../desktop/WorkDetail/pages/WorkDetailPage'),
);
const DesktopWorksPage = lazy(() => import('../desktop/Works/pages/WorksPage'));

// Mobile
const MobileDesignerPage = lazy(
  () => import('../mobile/Designer/page/DesignerPage'),
);
const MobileDesignersPage = lazy(
  () => import('../mobile/Designers/page/DesignersPage'),
);
const MobileDisplayPage = lazy(
  () => import('../mobile/Display/page/DisplayPage'),
);
const MobileMainPage = lazy(() => import('../mobile/Main/pages/MainPage'));
const MobileStudioPage = lazy(() => import('../mobile/Studio/page/StudioPage'));
const MobileWorkDetailPage = lazy(
  () => import('../mobile/WorkDetail/page/WorkDetailPage'),
);
const MobileWorksPage = lazy(() => import('../mobile/Works/page/WorksPage'));

// Tablet
const TabletDesignerPage = lazy(
  () => import('../tablet/Designer/page/DesignerPage'),
);
const TabletDesignersPage = lazy(
  () => import('../tablet/Designers/page/DesignersPage'),
);
const TabletDisplayPage = lazy(
  () => import('../tablet/Display/page/DisplayPage'),
);
const TabletMainPage = lazy(() => import('../tablet/Main/page/MainPage'));
const TabletStudioPage = lazy(() => import('../tablet/Studio/page/StudioPage'));
const TabletWorkDetailPage = lazy(
  () => import('../tablet/WorkDetail/page/WorkDetailPage'),
);
const TabletWorksPage = lazy(() => import('../tablet/Works/page/WorksPage'));

const Loading = () => <div>Loading...</div>;

const renderPageElement = ({
  width,
  mobile,
  tablet,
  desktop,
}: {
  width: number;
  mobile: React.ReactNode;
  tablet: React.ReactNode;
  desktop: React.ReactNode;
}) => {
  return (
    <Suspense fallback={<Loading />}>
      {width < 768 ? mobile : width >= 768 && width < 1440 ? tablet : desktop}
    </Suspense>
  );
};

export const mainPageElement = (width: number) =>
  renderPageElement({
    width,
    mobile: <MobileMainPage />,
    tablet: <TabletMainPage />,
    desktop: <DesktopMainPage />,
  });

export const studioPageElement = (width: number) =>
  renderPageElement({
    width,
    mobile: <MobileStudioPage />,
    tablet: <TabletStudioPage />,
    desktop: <DesktopStudioPage />,
  });

export const worksPageElement = (width: number) =>
  renderPageElement({
    width,
    mobile: <MobileWorksPage />,
    tablet: <TabletWorksPage />,
    desktop: <DesktopWorksPage />,
  });

export const workDetailPageElement = (width: number) =>
  renderPageElement({
    width,
    mobile: <MobileWorkDetailPage />,
    tablet: <TabletWorkDetailPage />,
    desktop: <DesktopWorkDetailPage />,
  });

export const designersPageElement = (width: number) =>
  renderPageElement({
    width,
    mobile: <MobileDesignersPage />,
    tablet: <TabletDesignersPage />,
    desktop: <DesktopDesignersPage />,
  });

export const designerPageElement = (width: number) =>
  renderPageElement({
    width,
    mobile: <MobileDesignerPage />,
    tablet: <TabletDesignerPage />,
    desktop: <DesktopDesignerPage />,
  });

export const displayPageElement = (width: number) =>
  renderPageElement({
    width,
    mobile: <MobileDisplayPage />,
    tablet: <TabletDisplayPage />,
    desktop: <DesktopDisplayPage />,
  });
