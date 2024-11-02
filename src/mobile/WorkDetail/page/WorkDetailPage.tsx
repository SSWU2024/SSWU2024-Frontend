import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import useGetWorkDesigners from '../../../libs/hooks/useGetWorkDesigners';
import useGetWorkDetail from '../../../libs/hooks/useGetWorkDetail';
import PageLayout from '../../Common/PageLayout';
import DesignerList from '../components/DesignerList';
import WorkImage from '../components/WorkImage';
import WorkInfo from '../components/WorkInfo';

const WorkDetailPage = () => {
  const { workId } = useParams();
  const currentWorkId = workId?.split('-')[workId?.split('-').length - 1];
  if (!currentWorkId) return;
  const { workDetail, isWorkDetailLoading } = useGetWorkDetail(
    parseInt(currentWorkId),
  );

  const { workDesigners, isWorkDesignersLoading } = useGetWorkDesigners(
    parseInt(currentWorkId),
  );

  const { workTitle, workBody, workEngBody, workBanner, images } =
    !isWorkDetailLoading && workDetail.data;
  const designers = !isWorkDesignersLoading && workDesigners.data;

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
          description={workBody.replace(/\\n/g, '\n')}
          engDescription={workEngBody.replace(/\\n/g, '\n')}
          designers={designers}
        />
        <WorkImage images={images} />
        <DesignerList
          designers={designers}
          currentWorkId={parseInt(currentWorkId)}
        />
      </section>
    </PageLayout>
  );
};

export default WorkDetailPage;

const WorkDetailContainer = css`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 5.8rem 0 10rem;
`;

const thumbnailImg = css`
  width: 100%;
`;
