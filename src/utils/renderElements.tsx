import DesktopDesignerPage from '../desktop/Designer/pages/DesignerPage';
import DesktopDesignersPage from '../desktop/Designers/pages/DesignersPage';
import DesktopMainPage from '../desktop/Main/pages/MainPage';
import DesktopStudioPage from '../desktop/Studio/pages/StudioPage';
import DesktopWorkDetailPage from '../desktop/WorkDetail/pages/WorkDetailPage';
import DesktopWorksPage from '../desktop/Works/pages/WorksPage';

import MobileDesignerPage from '../mobile/Designer/page/DesignerPage';
import MobileDesignersPage from '../mobile/Designers/page/DesignersPage';
import MobileMainPage from '../mobile/Main/pages/MainPage';
import MobileStudioPage from '../mobile/Studio/page/StudioPage';
import MobileWorkDetailPage from '../mobile/WorkDetail/page/WorkDetailPage';
import MobileWorksPage from '../mobile/Works/page/WorksPage';

import TabletDesignerPage from '../tablet/Designer/page/DesignerPage';
import TabletDesignersPage from '../tablet/Designers/page/DesignersPage';
import TabletMainPage from '../tablet/Main/page/MainPage';
import TabletStudioPage from '../tablet/Studio/page/StudioPage';
import TabletWorkDetailPage from '../tablet/WorkDetail/page/WorkDetailPage';
import TabletWorksPage from '../tablet/Works/page/WorksPage';

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
  if (width < 768) return mobile;
  else if (width >= 768 && width < 1440) return tablet;
  else return desktop;
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
