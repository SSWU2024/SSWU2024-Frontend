import {
  ImgSymbolDesignThinking,
  ImgSymbolInformation,
  ImgSymbolMotion,
  ImgSymbolSpace,
  ImgSymbolSpaceDirection,
  ImgSymbolStudioA,
  ImgSymbolStudioB,
} from '../desktop/assets/image';

import {
  ImgSymbolMobile_DesignThinking,
  ImgSymbolMobile_Information,
  ImgSymbolMobile_Motion,
  ImgSymbolMobile_Space,
  ImgSymbolMobile_SpaceDirection,
  ImgSymbolMobile_VisualA,
  ImgSymbolMobile_VisualB,
} from '../mobile/assets/image';

export const STUDIO_DETAILS = [
  {
    id: 1,
    studio: '시각디자인스튜디오 A',
    advisor: '장혜진',
    description:
      '조형예술, 과학기술, 인문학 등의 폭 넓은 분야와 결합하는 종합적인 연구를 지향하며 이와 관련된 지식과 방법을 연구한다. 또한, 전방위적인 여성 디자이너로서 필요한 리더쉽과 인성 중심의 교육을 기본으로 실무형 여성 인재 양성을 학과의 교육목표로 한다.',
    imgsrc: ImgSymbolStudioA,
    mobileImgSrc: ImgSymbolMobile_VisualA,
    url: '/studio-a',
  },
  {
    id: 2,
    studio: '시각디자인스튜디오 B',
    advisor: '황상준',
    description:
      '개인과 사회 전반에 드러나는 다양한 주제를 도출하고 발전하여 효과적인 커뮤니케이션 방법을 찾는다. 디자인에 필요한 일련의 과정을 경험하면서 다학제적 프로젝트 진행 능력을 키우는 것을 교육목표로 한다.',
    imgsrc: ImgSymbolStudioB,
    mobileImgSrc: ImgSymbolMobile_VisualB,
    url: '/studio-b',
  },
  {
    id: 3,
    studio: '모션그래픽스스튜디오',
    advisor: '이명숙',
    description:
      '미디어 매체를 이용하여, 커뮤니케이션 이해를 토대로 비주얼 콘텐츠의 상상력을 최대한 키우고 스토리텔링, 정보, 동기 등의 상관관계를 바탕으로 시각적 표현능력을 구상하고 제작한다. 이미지, 일러스트레이션 및 영상에 애니메이션을 더하여 종합적으로 스토리에 생명력을 불어 넣음으로써 다양한 영상 플랫폼의 창작성과 아이덴티티를 드러낼 수 있도록 한다.',
    imgsrc: ImgSymbolMotion,
    mobileImgSrc: ImgSymbolMobile_Motion,
    url: '/motion-graphics',
  },
  {
    id: 4,
    studio: '디자인씽킹스튜디오',
    advisor: '피종삼',
    description:
      '적용 영역이 점차 넓어져 가는 디자인씽킹을 구성하는 리서치 도구들에 대한 적절한 실습으로 디자인씽킹 수행 능력을 배양하고 디자인 문제 해결에 관한 다양한 기법을 습득하여 향후 창의적인 디자이너가 되는 기반을 확립하는 것을 주 교육 목표로 한다.',
    imgsrc: ImgSymbolDesignThinking,
    mobileImgSrc: ImgSymbolMobile_DesignThinking,
    url: '/design-thinking',
  },
  {
    id: 5,
    studio: '정보경험디자인스튜디오',
    advisor: '전혜란',
    description:
      '사회 문화 전반에 관련된 다양한 이슈와 주제를 가지고 정보디자인을 매개로 효과적인 커뮤니케이션이 가능하게 한다. 실제 데이터를 기반한 리서치를 통해 프로젝트를 기획하고 구성하며, 사용자의 인지 부하와 정보의 효율적인 전달을 고려하여 프로젝트를 수행한다.',
    imgsrc: ImgSymbolInformation,
    mobileImgSrc: ImgSymbolMobile_Information,
    url: '/user-experience',
  },
  {
    id: 6,
    studio: '공간디자인스튜디오',
    advisor: '장기윤',
    description:
      '시대의 흐름에 따라 변화하는 디자인의 패러다임을 적극적으로 수용하여 공간디자인을 생산하는 것을 교육 목표로 한다. 디자인 전공 간의 영역이 허물어지고 더불어 미술대학 학과 간의 영역이 통합되어지는 시대적 흐름에 맞추어, 전통적 의미의 배타적 공간디자인 작품이 아닌 공간이 중심이 된 다양한 영역의 전문적 지식과 경험을 녹여낸다.',
    imgsrc: ImgSymbolSpace,
    mobileImgSrc: ImgSymbolMobile_Space,
    url: '/space',
  },
  {
    id: 7,
    studio: '공간연출디자인스튜디오',
    advisor: '이소영',
    description:
      '텍스트를 기본으로 공연(극)을 위한 공간을 연출한다. 일상의 공간을 극 공간으로 만들거나 관객과 배우가 만나는 극장이라는 특수 공간을 이해하고 공연 프로젝트를 위한 시공간을 기획, 디자인한다.',
    imgsrc: ImgSymbolSpaceDirection,
    mobileImgSrc: ImgSymbolMobile_SpaceDirection,
    url: '/space-direction',
  },
];
