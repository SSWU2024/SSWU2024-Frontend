export const DESIGNER_DETAIL = {
  code: 'SUCCESS',
  message: '성공',
  data: {
    designerId: 1,
    name: '양종욱',
    engName: 'Jonguk Yang',
    major: 'Computer Science',
    email: 'didwhddnr123@naver.com',
    instagram: '@jong_uks',
    behance: 'https://juclass.co.kr',
    works: [
      {
        workId: 1,
        workTitle: '디지털 일러스트',
        workEngTitle: 'Digital Illustration',
        studioNm: '시각디자인스튜디오 A',
        images: [
          {
            imgPath: 'https://i.postimg.cc/K4674wWK/IMG-0105.jpg',
            fileFormat: 'jpg',
          },
          {
            imgPath: 'https://i.postimg.cc/tYDMPXGS/sample-GIF03.gif',
            fileFormat: 'gif',
          },
        ],
      },
      {
        workId: 6,
        workTitle: '서비스 디자인',
        workEngTitle: 'Service Design',
        studioNm: '모션그래픽스스튜디오',
        images: [
          {
            imgPath: 'https://i.postimg.cc/K4674wWK/IMG-0105.jpg',
            fileFormat: 'jpg',
          },
        ],
      },
    ],
  },
};
