export const updateStudioUrl = (studioNm: string) => {
  switch (studioNm) {
    case '시각디자인스튜디오 A':
      return '/studio-a';

    case '시각디자인스튜디오 B':
      return '/studio-b';

    case '디자인씽킹스튜디오':
      return '/design-thinking';

    case '정보경험디자인스튜디오':
      return '/user-experience';

    case '모션그래픽스스튜디오':
      return '/motion-graphics';

    case '공간디자인스튜디오':
      return '/space';

    case '공간연출디자인스튜디오':
      return '/space-direction';

    default:
      return '/';
  }
};
