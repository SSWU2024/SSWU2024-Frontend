import { css } from '@emotion/react';
import PageLayout from '../../Common/PageLayout';

import { useLocation } from 'react-router-dom';
import useGetWorkDesigners from '../../../libs/hooks/useGetWorkDesigners';
import useGetWorkDetail from '../../../libs/hooks/useGetWorkDetail';
import DesignerList from '../components/DesignerList';
import WorkImage from '../components/WorkImage';
import WorkInfo from '../components/WorkInfo';

const WorkDetailPage = () => {
  const { workId } = useLocation().state;
  const { workDetail, isWorkDetailLoading } = useGetWorkDetail(workId);
  const { workDesigners, isWorkDesignersLoading } = useGetWorkDesigners(workId);

  // const { workTitle, workBody, workEngBody, thumbnail, images } =
  //   !isWorkDetailLoading && workDetail.data;
  // const designers = !isWorkDesignersLoading && workDesigners.data;

  // 삭제 필요
  const { workTitle, workBody, workEngBody } =
    !isWorkDetailLoading && workDetail.data;
  const designers = !isWorkDesignersLoading && workDesigners.data;
  const thumbnail =
    'https://png.pngtree.com/thumb_back/fh260/background/20220509/pngtree-road-to-night-city-image_1337790.jpg';
  const images = [
    {
      sort: 1,
      imgPath: 'https://cdn2.colley.kr/item_383431_1_0_title_0.jpeg',
    },
    {
      sort: 2,
      imgPath:
        'https://i.pinimg.com/originals/99/7a/9b/997a9b2cd93277769ca9b3d109bceed7.jpg',
    },
    {
      sort: 3,
      imgPath: 'https://cdn2.colley.kr/item_127602_1_4_title_4.jpeg',
    },
    {
      sort: 4,
      imgPath:
        'https://muko.kr/files/attach/images/2022/11/22/81725dc1572f2c88c1b2787db750735f.jpg',
    },
    {
      sort: 5,
      imgPath:
        'https://i.pinimg.com/236x/2b/7b/dc/2b7bdc1b28064e8496bcc4e907cc87e3.jpg',
    },
  ];

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
        <DesignerList
          designers={designers}
          isWorkDesignersLoading={isWorkDesignersLoading}
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
  padding: 5.6rem 0 10rem;
`;

const thumbnailImg = css`
  width: 100%;
`;
