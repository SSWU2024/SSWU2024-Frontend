import { css } from '@emotion/react';
import { useEffect } from 'react';
import PageLayout from '../../Common/PageLayout';
import Designers from '../components/Designers';
import DetailImages from '../components/DetailImages';
import Details from '../components/Details';

const WorkDetailPage = () => {
  // const { workId } = useLocation().state;
  // const { workDetail, isWorkDetailLoading } = useGetWorkDetail(workId);
  // const { workDesigners, isWorkDesignersLoading } = useGetWorkDesigners(workId);
  // const isLoading = isWorkDetailLoading || isWorkDesignersLoading;

  // 추후 서버에 데이터가 제대로 들어가면 아래 코드로 대체
  // const { workTitle, workBody, workEngBody, thumbnail, images } =
  //   !isWorkDetailLoading && workDetail.data;

  // const { workTitle, workBody, workEngBody } =
  //   !isWorkDetailLoading && workDetail.data;
  // const designers = !isWorkDesignersLoading && workDesigners.data;

  const workTitle = '디지털 일러스트';
  const workBody =
    '부정적인 감정이 들었을 때, 부정적인 상황이 생겼을 때 여러분들은 어떤 해결 방법을 가지고 있나요?\n저는 부정적인 감정과 상황을 완전히 해결하려고 하기보다는 일단은 덮어두고 그 감정과 상황을 회피하려는 성향이 있습니다.\n그리고 뭔가 긍정적인 감정과 상황으로 덮으려고 합니다.\n부정적인 감정과 상황을 긍정적인 감정과 상황으로 덮는 것을 엽서와 엽서를 덮는 필름에 시각화하여 표현하였습니다.';
  const workEngBody = `What kind of solution do you have when you feel negative emotions or when a negative situation occurs?\nRather than trying to solve negative emotions and situations completely, I tend to avoid them by hiding.  And I'm trying to cover it up with some positive emotions and situations.\nIt visualized negative emotions and situations covered with positive emotions and situations on film covering postcards and postcards.`;

  const designers = [
    {
      designerId: 1,
      name: '양종욱',
      engName: 'Jonguk Yang',
      email: 'didwhddnr123@naver.com',
      works: [
        {
          workId: 2,
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
    },
    {
      designerId: 2,
      name: '김지훈',
      engName: 'Jihun Kim',
      email: 'jihun.kim@gmail.com',
      works: [
        {
          workId: 3,
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
    },
  ];

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
    scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <PageLayout>
      {/* {!isLoading && (
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
      )} */}
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
