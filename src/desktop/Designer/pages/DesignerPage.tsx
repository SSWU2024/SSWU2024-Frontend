import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import useGetDesignerDetail from '../../../libs/hooks/useGetDesignerDetail';
import { colors, fonts } from '../../../styles/theme';
import { renderEngName } from '../../../utils/renderEngName';
import { ImgBg3Web } from '../../assets/image';
import PageLayout from '../../Common/PageLayout';
import DesignerContact from '../components/DesignerContact';
import DesignerWorks from '../components/DesignerWorks';

const DesignerPage = () => {
  const designerName = useParams().name;
  const designerId =
    designerName?.split('-')[designerName?.split('-').length - 1];
  if (!designerId) return;
  const { designerDetail, isLoading } = useGetDesignerDetail(
    parseInt(designerId),
  );
  const { data } = !isLoading && designerDetail;

  const { name, engName, major, email, instagram, behance, works } =
    !isLoading && data;

  const newEngName = !isLoading && renderEngName(engName);

  return (
    <PageLayout>
      {!isLoading && (
        <section css={designerPageContainer(ImgBg3Web)}>
          <article css={basicInfo}>
            <p css={designerKrName}>{name}</p>
            <p css={designerEngName}>{newEngName}</p>
            <p css={mainMajor}>{major}</p>
          </article>

          <article css={additionalInfo}>
            <DesignerContact
              email={email}
              instagram={instagram}
              behance={behance}
            />
            <DesignerWorks works={works} />
          </article>
        </section>
      )}
    </PageLayout>
  );
};

export default DesignerPage;

const designerPageContainer = (imgUrl: string) => css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;

  width: 100%;

  min-height: calc(100vh - 5.2em);

  padding: calc(100vh / 6.1364) calc(100% / 24) calc(100vh / 31.1538);

  background-position: top 5.2rem right 0;
  background-size: contain;
  background-image: url(${imgUrl});
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const basicInfo = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const designerKrName = css`
  margin-bottom: 0.8rem;

  color: ${colors.gray900};
  ${fonts.desktop_title_semi_28};
`;

const designerEngName = css`
  margin-bottom: 2.4rem;

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
