import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useGetWorkDesigners from '../../../libs/hooks/useGetWorkDesigners';
import useGetWorkDetail from '../../../libs/hooks/useGetWorkDetail';
import PageLayout from '../../Common/PageLayout';
import Designers from '../components/Designers';
import DetailImages from '../components/DetailImages';
import Details from '../components/Details';

const DUMMY = {
  workTitle: '디지털 일러스트',
  workBody:
    '부정적인 감정이 들었을 때, 부정적인 상황이 생겼을 때 여러분들은 어떤 해결 방법을 가지고 있나요?\n저는 부정적인 감정과 상황을 완전히 해결하려고 하기보다는 일단은 덮어두고 그 감정과 상황을 회피하려는 성향이 있습니다.\n그리고 뭔가 긍정적인 감정과 상황으로 덮으려고 합니다.\n부정적인 감정과 상황을 긍정적인 감정과 상황으로 덮는 것을 엽서와 엽서를 덮는 필름에 시각화하여 표현하였습니다.',
  workEngBody: `What kind of solution do you have when you feel negative emotions or when a negative situation occurs?\nRather than trying to solve negative emotions and situations completely, I tend to avoid them by hiding.  And I'm trying to cover it up with some positive emotions and situations.\nIt visualized negative emotions and situations covered with positive emotions and situations on film covering postcards and postcards.`,
  thumbnail:
    'https://mblogthumb-phinf.pstatic.net/20151231_18/kimtaeyon1_1451530246034U8P5X_PNG/%BF%A1%BA%F1%C3%F2%C2%A9_%282%29.png?type=w420',
  images: [
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
  ],
  designers: [
    {
      name: '양종욱',
      engName: 'Jonguk Yang',
      email: 'didwhddnr123@naver.com',
      workTitle: '서비스 디자인',
      studioNm: '디자인씽킹스튜디오',
      images: [
        {
          imgPath: 'https://xen-api.linkareer.com/attachments/80334',
          fileFormat: 'jpeg',
        },
        {
          imgPath:
            'https://i.pinimg.com/originals/a0/89/e7/a089e759d7e713b4eba7b6cda87b6c8a.gif',
          fileFormat: 'gif',
        },
      ],
    },
    {
      name: '김지훈',
      engName: 'Jihun Kim',
      email: 'jihun.kim@gmail.com',
      workTitle: '서비스 디자인',
      studioNm: '디자인씽킹스튜디오',
      images: [
        {
          imgPath:
            'https://i.pinimg.com/236x/13/26/c1/1326c1f3ec2a54bfc0893a0c582360de.jpg',
          fileFormat: 'jpeg',
        },
      ],
    },
    {
      name: '서아름',
      engName: 'Areum Seo',
      email: 'arooming123@gmail.com',
      workTitle: '서비스 디자인',
      studioNm: '디자인씽킹스튜디오',
      images: [
        {
          imgPath:
            'https://i.pinimg.com/236x/13/26/c1/1326c1f3ec2a54bfc0893a0c582360de.jpg',
          fileFormat: 'jpeg',
        },
      ],
    },
  ],
};

const WorkDetailPage = () => {
  const { workId } = useLocation().state;
  const { workDetail, isWorkDetailLoading } = useGetWorkDetail(workId);
  const { workDesigners, isWorkDesignersLoading } = useGetWorkDesigners(workId);
  const isLoading = isWorkDetailLoading || isWorkDesignersLoading;

  const { workTitle, workBody, workEngBody, thumbnail, images } =
    !isWorkDetailLoading && workDetail.data;
  const designers = !isWorkDesignersLoading && workDesigners.data;

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
  height: calc(100vh / 1.65);
`;
