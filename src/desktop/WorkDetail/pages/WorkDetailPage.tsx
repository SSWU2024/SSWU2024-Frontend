import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useGetWorkDesigners from '../../../libs/hooks/useGetWorkDesigners';
import useGetWorkDetail from '../../../libs/hooks/useGetWorkDetail';
import PageLayout from '../../Common/PageLayout';
import Designers from '../components/Designers';
import DetailImages from '../components/DetailImages';
import Details from '../components/Details';

const WorkDetailPage = () => {
  const { workId } = useLocation().state;
  const { workDetail, isWorkDetailLoading } = useGetWorkDetail(workId);
  const { workDesigners, isWorkDesignersLoading } = useGetWorkDesigners(workId);
  const isLoading = isWorkDetailLoading || isWorkDesignersLoading;

  // 추후 서버에 데이터가 제대로 들어가면 아래 코드로 대체
  // const { workTitle, workBody, workEngBody, thumbnail, images } =
  //   !isWorkDetailLoading && workDetail.data;

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

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <PageLayout>
      {!isLoading && (
        <section css={workDetailContainer}>
          <img src={thumbnail} css={workThumbnail} />
          <Details
            workTitle={workTitle}
            designers={designers}
            workBody={workBody}
            workEngBody={workEngBody}
          />
          <DetailImages images={images} />
          <Designers designers={designers} />
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
