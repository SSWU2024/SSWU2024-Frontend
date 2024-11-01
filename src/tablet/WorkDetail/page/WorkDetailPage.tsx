import { css } from '@emotion/react';
import PageLayout from '../../Common/PageLayout';

import { useLocation } from 'react-router-dom';
import useGetWorkDesigners from '../../../libs/hooks/useGetWorkDesigners';
import useGetWorkDetail from '../../../libs/hooks/useGetWorkDetail';
import { setImages } from '../../../utils/setImages';
import DesignerList from '../components/DesignerList';
import WorkImage from '../components/WorkImage';
import WorkInfo from '../components/WorkInfo';

const WorkDetailPage = () => {
  const { workId } = useLocation().state;
  const { workDetail, isWorkDetailLoading } = useGetWorkDetail(workId);

  const { workDesigners, isWorkDesignersLoading } = useGetWorkDesigners(workId);

  const { workTitle, workBody, workEngBody, workBanner, images } =
    !isWorkDetailLoading && workDetail.data;
  const designers = !isWorkDesignersLoading && workDesigners.data;

  const sortImgArr = images && setImages(images);

  return (
    <PageLayout>
      <section css={WorkDetailContainer}>
        <img
          src={workBanner}
          alt={`${workTitle}의 썸네일`}
          css={thumbnailImg}
        />
        <WorkInfo
          title={workTitle}
          description={workBody}
          engDescription={workEngBody}
          designers={designers}
        />
        <WorkImage images={sortImgArr} />
        <DesignerList designers={designers} currentWorkId={workId} />
      </section>
    </PageLayout>
  );
};

export default WorkDetailPage;

const WorkDetailContainer = css`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 5.6rem 0 10rem;
`;

const thumbnailImg = css`
  width: 100%;
`;
