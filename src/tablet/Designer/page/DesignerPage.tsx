import { css } from '@emotion/react';
import { useLocation } from 'react-router-dom';
import useGetDesignerDetail from '../../../libs/hooks/useGetDesignerDetail';
import DesignerInfo from '../../../mobile/Designer/components/DesignerInfo';
import Works from '../../../mobile/Designer/components/Works';
import { ImgBg3Tablet } from '../../assets/image';
import PageLayout from '../../Common/PageLayout';

const DesignerPage = () => {
  const { designerId } = useLocation().state;
  const { designerDetail, isLoading } = useGetDesignerDetail(designerId);
  const { data } = !isLoading && designerDetail;

  const { name, engName, major, email, instagram, behance, works } =
    !isLoading && data;

  return (
    <PageLayout>
      <section css={designerContainer(ImgBg3Tablet)}>
        {!isLoading && (
          <>
            <DesignerInfo
              name={name}
              engName={engName}
              major={major}
              email={email}
              instagram={instagram}
              behance={behance}
            />
            <Works works={works} />
          </>
        )}
      </section>
    </PageLayout>
  );
};

export default DesignerPage;

const designerContainer = (url: string) => css`
  display: flex;
  gap: 4.8rem;
  flex-direction: column;

  width: 100%;
  min-height: calc(100dvh - 10rem);

  padding: 10.4rem 2.4rem 10rem;

  background-position: top 5.6rem right 0;
  background-size: contain;
  background-image: url(${url});
  background-repeat: no-repeat;
`;
