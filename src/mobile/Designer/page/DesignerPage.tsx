import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGetDesignerDetail from '../../../libs/hooks/useGetDesignerDetail';
import { ImgBg3Mobile } from '../../assets/image';
import PageLayout from '../../Common/PageLayout';
import DesignerInfo from '../components/DesignerInfo';
import Works from '../components/Works';

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

  useEffect(() => {
    scrollTo({ top: 0, left: 0, behavior: 'instant' });
  });

  return (
    <PageLayout>
      <section css={designerContainer(ImgBg3Mobile)}>
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

  min-height: 100dvh;

  padding: 8.8rem 1.6rem 9rem;

  background-position: top 5.8rem right 0;
  background-size: contain;
  background-image: url(${url});
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
