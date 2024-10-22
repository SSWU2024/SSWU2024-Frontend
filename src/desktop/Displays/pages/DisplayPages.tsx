import { css } from '@emotion/react';
import { useState } from 'react';
import DisplayModal from '../../../components/DisplayModal';
import { imageType } from '../../../mobile/Display/types/imageType';
import PageLayout from '../../Common/PageLayout';
import { ImgBg2Web } from '../../assets/image';
import DisplayImages from '../components/DisplayImages';
import DisplayInfo from '../components/DisplayInfo';

const DUMMY = {
  displays: [
    {
      name: '가온전시실',
      studioList: [
        '디자인씽킹스튜디오',
        '시각디자인스튜디오',
        '정보경험디자인스튜디오',
        '공간연출디자인스튜디오',
      ],
      images: [
        {
          imgId: 1,
          imgNm: 'display_image_1',
          sort: 1,
          imgPath: 'https://www.much.go.kr/images/sub/exhi1_img1.jpg',
          fileFormat: 'jpg',
        },
        {
          imgId: 2,
          imgNm: 'display_image_2',
          sort: 2,
          imgPath: 'https://xen-api.linkareer.com/attachments/80336',
          fileFormat: 'jpg',
        },
        {
          imgId: 3,
          imgNm: 'display_image_3',
          sort: 3,
          imgPath:
            'https://i.pinimg.com/236x/53/c8/a3/53c8a3f0f62fda9647fd389be212806e.jpg',
          fileFormat: 'jpg',
        },
        {
          imgId: 4,
          imgNm: 'display_image_4',
          sort: 4,
          imgPath:
            'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTNfMTEw/MDAxNTg2NzA0NTIzNTcy.DA2OKAbczYZwIPU8k2NfCgZHsBD8zLCMrqUnhDfQSo4g.42s5mkA7Pf-nAUUFcX-97sYEFsVjmCZxiO5FCW4Mi4Yg.JPEG.mjcty715/IMG_4348.jpg?type=w800',
          fileFormat: 'jpg',
        },
        {
          imgId: 5,
          imgNm: 'display_image_5',
          sort: 5,
          imgPath:
            'https://i.pinimg.com/236x/53/c8/a3/53c8a3f0f62fda9647fd389be212806e.jpg',
          fileFormat: 'jpg',
        },
        {
          imgId: 6,
          imgNm: 'display_image_6',
          sort: 6,
          imgPath: 'https://www.much.go.kr/images/sub/exhi1_img1.jpg',
          fileFormat: 'jpg',
        },
        {
          imgId: 7,
          imgNm: 'display_image_7',
          sort: 7,
          imgPath: 'https://xen-api.linkareer.com/attachments/80336',
          fileFormat: 'jpg',
        },
      ],
    },
    {
      name: '파이룸',
      studioList: ['모션그래픽스스튜디오', '공간디자인스튜디오'],
      images: [
        {
          imgId: 1,
          imgNm: 'display_image_1',
          sort: 1,
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
          fileFormat: 'jpg',
        },
        {
          imgId: 2,
          imgNm: 'display_image_2',
          sort: 2,
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
          fileFormat: 'jpg',
        },
        {
          imgId: 3,
          imgNm: 'display_image_3',
          sort: 3,
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
          fileFormat: 'jpg',
        },
        {
          imgId: 4,
          imgNm: 'display_image_4',
          sort: 4,
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
          fileFormat: 'jpg',
        },
        {
          imgId: 5,
          imgNm: 'display_image_5',
          sort: 5,
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
          fileFormat: 'jpg',
        },
        {
          imgId: 6,
          imgNm: 'display_image_6',
          sort: 6,
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
          fileFormat: 'jpg',
        },
        {
          imgId: 7,
          imgNm: 'display_image_7',
          sort: 7,
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
          fileFormat: 'jpg',
        },
      ],
    },
  ],
};

const DisplayPages = () => {
  const { displays } = DUMMY;

  const [isOpen, setIsOpen] = useState(false);
  const [selectImg, setSelectedImg] = useState(0);
  const [studioImageList, setStudioImageList] = useState<Array<imageType>>();

  const changeClickedImgId = (imgId: number) => {
    setSelectedImg(imgId);
  };

  /** 이미지 클릭 시 모달 oepn */
  const onClickImage = (imgId: number, images: Array<imageType>) => {
    setStudioImageList(images);
    changeClickedImgId(imgId);
    setIsOpen(true);
  };

  /** 모달 내 x 버튼 클릭 시 모달 close (props) */
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <PageLayout>
      <section css={displaysContainer}>
        <img src={ImgBg2Web} css={bg} />
        {isOpen && (
          <DisplayModal
            imgId={selectImg}
            studioImageList={studioImageList}
            changeClickedImgId={changeClickedImgId}
            closeModal={closeModal}
          />
        )}

        {displays.map((display) => {
          const { name, studioList, images } = display;

          return (
            <article key={name} css={displayContainer}>
              <DisplayInfo name={name} studioList={studioList} />
              <DisplayImages images={images} onClickImage={onClickImage} />
            </article>
          );
        })}
      </section>
    </PageLayout>
  );
};

export default DisplayPages;

const displaysContainer = css`
  display: flex;
  gap: calc(100vh / 10.125);
  justify-content: center;
  flex-direction: column;

  padding: calc(100vh / 10.125) calc(100% / 24) calc(100vh / 5.7857);
  margin-top: 5.2rem;
`;

const bg = css`
  position: absolute;
  top: 5.2rem;
  left: 0;
  z-index: -1;

  height: calc(100vh - 5.2rem);
`;

const displayContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
