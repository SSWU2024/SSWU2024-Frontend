import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGetWorkDesigners from '../../../libs/hooks/useGetWorkDesigners';
import useGetWorkDetail from '../../../libs/hooks/useGetWorkDetail';
import { setImages } from '../../../utils/setImages';
import PageLayout from '../../Common/PageLayout';
import Designers from '../components/Designers';
import DetailImages from '../components/DetailImages';
import Details from '../components/Details';

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
  const isLoading = isWorkDetailLoading || isWorkDesignersLoading;

  const { workTitle, workBody, workEngBody, workBanner, images } =
    !isWorkDetailLoading && workDetail.data;
  const designers = !isWorkDesignersLoading && workDesigners.data;

  const sortImgArr = images && setImages(images);

  useEffect(() => {
    scrollTo({ top: 0, behavior: 'instant' });
  });

  return (
    <PageLayout>
      {!isLoading && (
        <section css={workDetailContainer}>
          <img src={workBanner} css={workThumbnail} />
          <Details
            workTitle={workTitle}
            designers={designers}
            workBody={workBody}
            workEngBody={workEngBody}
          />
          <DetailImages images={sortImgArr} />
          <Designers
            designers={designers}
            currentWorkId={parseInt(currentWorkId)}
          />
        </section>
      )}
    </PageLayout>
  );
};

export default WorkDetailPage;

const workDetailContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-top: 5.2rem;
`;

const workThumbnail = css`
  width: 100%;
`;
