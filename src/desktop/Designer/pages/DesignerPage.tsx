import { css } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';
import { ImgBg3Web } from '../../assets/image';
import PageLayout from '../../Common/PageLayout';
import DesignerContact from '../components/DesignerContact';
import DesignerWorks from '../components/DesignerWorks';

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
          <DesignerContact
            email={email}
            instagram={instagram}
            behance={behance}
          />
          <DesignerWorks works={works} />
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
