import { css } from '@emotion/react';
import { useLocation } from 'react-router-dom';
import useGetDesignerDetail from '../../../libs/hooks/useGetDesignerDetail';
import { ImgBg3Mobile } from '../../assets/image';
import PageLayout from '../../Common/PageLayout';
import DesignerInfo from '../components/DesignerInfo';
import Works from '../components/Works';

const DesignerPage = () => {
  const { designerId } = useLocation().state;
  const { designerDetail, isLoading } = useGetDesignerDetail(designerId);
  const { data } = !isLoading && designerDetail;

  const { name, engName, major, email, instagram, behance, works } =
    !isLoading && data;

  return (
    <PageLayout>
      <section css={designerContainer(ImgBg3Mobile)}>
        <DesignerInfo
          name={name}
          engName={engName}
          major={major}
          email={email}
          instagram={instagram}
          behance={behance}
        />
        <Works works={works} />
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

  padding: 8.8rem 1.6rem 9rem;

  background-position: top 5.8rem right 0;
  background-size: contain;
  background-image: url(${url});
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
