import { lazy, Suspense, useMemo } from 'react';

const Loading = () => <div>Loading...</div>;

type Pagetype = {
  mobile: string;
  tablet: string;
  desktop: string;
};

const renderPageElement = ({
  width,
  page,
}: {
  width: number;
  page: Pagetype;
}) => {
  const MemoizedComponent = useMemo(() => {
    const { mobile, tablet, desktop } = page;

    if (width < 768)
      return lazy(() => import(/* @vite-ignore */ `../mobile/${mobile}`));
    if (width >= 768 && width < 1440)
      return lazy(() => import(/* @vite-ignore */ `../tablet/${tablet}`));
    return lazy(() => import(/* @vite-ignore */ `../desktop/${desktop}`));
  }, [width, page]);

  return (
    <Suspense fallback={<Loading />}>
      <MemoizedComponent />
    </Suspense>
  );
};

export const mainPageElement = (width: number) =>
  renderPageElement({
    width,
    page: {
      mobile: 'Main/pages/MainPage',
      tablet: 'Main/page/MainPage',
      desktop: 'Main/pages/MainPage',
    },
  });

export const studioPageElement = (width: number) =>
  renderPageElement({
    width,
    page: {
      mobile: 'Studio/page/StudioPage',
      tablet: 'Studio/page/StudioPage',
      desktop: 'Studio/pages/StudioPage',
    },
  });

export const worksPageElement = (width: number) =>
  renderPageElement({
    width,
    page: {
      mobile: 'Works/page/WorksPage',
      tablet: 'Works/page/WorksPage',
      desktop: 'Works/pages/WorksPage',
    },
  });

export const workDetailPageElement = (width: number) =>
  renderPageElement({
    width,
    page: {
      mobile: 'WorkDetail/page/WorkDetailPage',
      tablet: 'WorkDetail/page/WorkDetailPage',
      desktop: 'WorkDetail/pages/WorkDetailPage',
    },
  });

export const designersPageElement = (width: number) =>
  renderPageElement({
    width,
    page: {
      mobile: 'Designers/page/DesignersPage',
      tablet: 'Designers/page/DesignersPage',
      desktop: 'Designers/pages/DesignersPage',
    },
  });

export const designerPageElement = (width: number) =>
  renderPageElement({
    width,
    page: {
      mobile: 'Designer/page/DesignerPage',
      tablet: 'Designer/page/DesignerPage',
      desktop: 'Designer/pages/DesignerPage',
    },
  });

export const displayPageElement = (width: number) =>
  renderPageElement({
    width,
    page: {
      mobile: 'Display/page/DisplayPage',
      tablet: 'Display/page/DisplayPage',
      desktop: 'Displays/pages/DisplayPages',
    },
  });
