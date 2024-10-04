import { css } from '@emotion/react';
import DesignerInfo from '../../../mobile/Designer/components/DesignerInfo';
import Works from '../../../mobile/Designer/components/Works';
import { ImgBg3Tablet } from '../../assets/image';
import PageLayout from '../../Common/PageLayout';

const DesignerPage = () => {
  return (
    <PageLayout>
      <section css={designerContainer(ImgBg3Tablet)}>
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
  padding: 10.4rem 2.4rem 10rem;

  background-position: top 5.6rem left 0;
  background-size: contain;
  background-image: url(${url});
  background-repeat: no-repeat;
`;
