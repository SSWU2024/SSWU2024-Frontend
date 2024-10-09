import { css } from '@emotion/react';
import { useEffect } from 'react';
import { ImgBg3Mobile } from '../../assets/image';
import PageLayout from '../../Common/PageLayout';
import DesignerInfo from '../components/DesignerInfo';
import Works from '../components/Works';

const DesignerPage = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <section css={designerContainer(ImgBg3Mobile)}>
        <DesignerInfo />
        <Works />
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
`;
