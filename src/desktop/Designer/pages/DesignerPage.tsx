import { css } from '@emotion/react';
import { useLocation } from 'react-router-dom';
import useGetDesignerDetail from '../../../libs/hooks/useGetDesignerDetail';
import { colors, fonts } from '../../../styles/theme';
import { renderEngName } from '../../../utils/renderEngName';
import { ImgBg3Web } from '../../assets/image';
import PageLayout from '../../Common/PageLayout';
import DesignerContact from '../components/DesignerContact';
import DesignerWorks from '../components/DesignerWorks';

const DesignerPage = () => {
  const { designerId } = useLocation().state;
  const { designerDetail, isLoading } = useGetDesignerDetail(designerId);
  const { data } = !isLoading && designerDetail;

  const { name, engName, major, email, instagram, behance, works } =
    !isLoading && data;

  const newEngName = !isLoading && renderEngName(engName);

  return (
    <PageLayout>
      {!isLoading && (
        <section css={designerPageContainer}>
          <img src={ImgBg3Web} css={bg} />

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

const designerPageContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;

  width: 100%;

  min-height: calc(100vh - 10.4rem);

  padding: calc(100vh / 10.125) calc(100% / 24) calc(100vh / 31.1538);
  margin-top: 5.2rem;
`;

const bg = css`
  position: absolute;
  top: 5.2rem;
  left: 0;
  z-index: -1;

  min-height: calc(100vh - 10.4rem);

  width: 100%;
  height: 100%;
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
