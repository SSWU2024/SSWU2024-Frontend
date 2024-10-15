import { css } from '@emotion/react';
import PageLayout from '../../Common/PageLayout';

import { WORK_DETAIL } from '../../../mobile/constants/WORK_DETAIL';
import DesignerList from '../components/DesignerList';
import WorkImage from '../components/WorkImage';
import WorkInfo from '../components/WorkInfo';

const WorkDetailPage = () => {
  const { workTitle, workBody, workEngBody, thumbnail, images, designers } =
    WORK_DETAIL;

  return (
    <PageLayout>
      <section css={WorkDetailContainer}>
        <img src={thumbnail} alt={`${workTitle}의 썸네일`} css={thumbnailImg} />
        <WorkInfo
          title={workTitle}
          description={workBody}
          engDescription={workEngBody}
          designers={designers}
        />
        <WorkImage images={images} />
        <DesignerList />
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
  height: 26.2rem;
  object-fit: cover;
`;
