import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { colors, fonts } from '../../../styles/theme';
import { ImgBg3Web } from '../../assets/image';
import PageLayout from '../../Common/PageLayout';

const DUMMY = {
  name: '양종욱',
  engName: 'Jonguk Yang',
  major: 'Computer Science',
  email: 'didwhddnr123@naver.com',
  instagram: '@jong_uks',
  behance: 'https://juclass.co.kr',
  works: [
    {
      url: 'title-1',
      workTitle: '디지털 일러스트',
      studioNm: '시각디자인스튜디오 A',
      images: [
        {
          imgPath: 'https://xen-api.linkareer.com/attachments/80334',
          fileFormat: 'jpg',
        },
        {
          imgPath:
            'https://i.pinimg.com/originals/a0/89/e7/a089e759d7e713b4eba7b6cda87b6c8a.gif',
          fileFormat: 'gif',
        },
      ],
    },
    {
      url: 'title-2',
      workTitle: '서비스 디자인',
      studioNm: '디자인씽킹스튜디오',
      images: [
        {
          imgPath:
            'https://i.pinimg.com/236x/13/26/c1/1326c1f3ec2a54bfc0893a0c582360de.jpg',
          fileFormat: 'jpg',
        },
      ],
    },
  ],
};

const DesignerPage = () => {
  const { name, engName, major, email, instagram, behance, works } = DUMMY;

  const updateStudioUrl = (studioNm: string) => {
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

  return (
    <PageLayout>
      <img src={ImgBg3Web} css={bg} />
      <section css={designerPageContainer}>
        <article css={basicInfo}>
          <p css={designerKrName}>{name}</p>
          <p css={designerEngName}>{engName}</p>
        </article>

        <span css={mainMajor}>{major}</span>

        <article css={additionalInfo}>
          <div css={contactContainer}>
            <div css={contact}>
              <p css={contactCategory}>E-MAIL</p>
              <p css={contactContents}>{email}</p>
            </div>
            {instagram && (
              <div css={contact}>
                <p css={contactCategory}>INSTAGRAM</p>
                <p css={contactContents}>{instagram}</p>
              </div>
            )}
            {behance && (
              <div css={contact}>
                <p css={contactCategory}>BEHANCE</p>
                <p css={contactContents}>{behance}</p>
              </div>
            )}
          </div>

          <div css={worksContainer}>
            {works.map((work) => {
              const { url, workTitle, studioNm, images } = work;
              const { imgPath } = images.length > 1 ? images[1] : images[0];
              const studioUrl = updateStudioUrl(studioNm);

              return (
                <Link to={`${studioUrl}/${url}`}>
                  <img src={imgPath} css={workImg} />
                  <div css={workInfoContainer}>
                    <p css={title}>{workTitle}</p>
                    <p css={studioName}>{studioNm}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </article>
      </section>
    </PageLayout>
  );
};

export default DesignerPage;

const bg = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  width: 100%;
  height: calc(100vh - 5.2rem);
`;

const designerPageContainer = css`
  padding: 8rem 6rem 0;
  margin: 5.2rem 0 2.6rem;
`;

const basicInfo = css`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 2.4rem;
`;

const designerKrName = css`
  color: ${colors.gray900};
  ${fonts.desktop_title_semi_28};
`;

const designerEngName = css`
  ${colors.gray900};
  ${fonts.desktop_body_reg_20};
`;

const mainMajor = css`
  color: ${colors.pink300};
  ${fonts.desktop_body_semi_20};
`;

const additionalInfo = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 11.8rem;
`;

const contactContainer = css`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-direction: column;
`;

const contact = css`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  flex-direction: column;
`;

const contactCategory = css`
  color: ${colors.gray300};
  ${fonts.desktop_body_semi_20};
`;

const contactContents = css`
  color: ${colors.gray900};
  ${fonts.desktop_body_reg_20};
`;

const worksContainer = css`
  display: flex;
  gap: 3.2rem;
  align-items: center;
`;

const workImg = css`
  width: 30.6rem;
  height: 30.6rem;
`;

const workInfoContainer = css`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;

  margin-top: 1.2rem;
`;

const title = css`
  color: ${colors.gray900};
  ${fonts.desktop_body_semi_20};
`;

const studioName = css`
  color: ${colors.gray900};
  ${fonts.desktop_body_reg_18};
`;
