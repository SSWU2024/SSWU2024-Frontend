import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import DisplayModal from '../../../components/DisplayModal';
import { imageType } from '../../../mobile/Display/types/imageType';
import { DISPLAY } from '../../../mobile/constants/DISPLAY';
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
          imgPath: 'https://www.much.go.kr/images/sub/exhi1_img1.jpg',
        },
        {
          imgId: 2,
          imgPath: 'https://www.much.go.kr/images/sub/exhi1_img1.jpg',
        },
        {
          imgId: 3,
          imgPath: 'https://www.much.go.kr/images/sub/exhi1_img1.jpg',
        },
        {
          imgId: 4,
          imgPath: 'https://www.much.go.kr/images/sub/exhi1_img1.jpg',
        },
        {
          imgId: 5,
          imgPath: 'https://www.much.go.kr/images/sub/exhi1_img1.jpg',
        },
        {
          imgId: 6,
          imgPath: 'https://www.much.go.kr/images/sub/exhi1_img1.jpg',
        },
        {
          imgId: 7,
          imgPath: 'https://www.much.go.kr/images/sub/exhi1_img1.jpg',
        },
      ],
    },
    {
      name: '파이룸',
      studioList: ['모션그래픽스스튜디오', '공간디자인 스튜디오'],
      images: [
        {
          imgId: 1,
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
        },
        {
          imgId: 2,
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
        },
        {
          imgId: 3,
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
        },
        {
          imgId: 4,
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
        },
        {
          imgId: 5,
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
        },
        {
          imgId: 6,
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
        },
        {
          imgId: 7,
          imgPath:
            'https://www.gangnam.go.kr/upload/editor/2021/11/16/48c7d1aa-dcb4-4bb8-9951-e6a763b25141.jpg',
        },
      ],
    },
  ],
};

const DisplayPages = () => {
  const { displays } = DUMMY;

  const [isOpen, setIsOpen] = useState(false);

  const selectImg = useRef(0);
  const studio1ImageList = useRef<imageType[]>(); // studio 1 이미지 리스트
  const studio2ImageList = useRef<imageType[]>(); // studio 2 이미지 리스트

  useEffect(() => {
    studio1ImageList.current = DISPLAY[0].images;
    studio2ImageList.current = DISPLAY[1].images;
  }, []);

  /** 이미지 클릭 시 모달 oepn */
  const onClickImage = (imgId: number) => {
    selectImg.current = imgId;
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
            imgId={selectImg.current}
            studio1ImageList={studio1ImageList.current}
            studio2ImageList={studio2ImageList.current}
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

  padding: calc(100vh / 6.1364) calc(100% / 24) calc(100vh / 5.7857);
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
