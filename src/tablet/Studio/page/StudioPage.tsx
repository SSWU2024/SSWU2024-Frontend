import { css } from '@emotion/react';
import { useLocation } from 'react-router-dom';

import StudioInfoMobile from '../../../mobile/Studio/components/StudioInfo';
import WorkList from '../../../mobile/Studio/components/WorkList';
import { ImgBg2Tablet } from '../../assets/image';
import PageLayout from '../../Common/PageLayout';

const StudioPage = () => {
  const location = useLocation();

  return (
    <PageLayout>
      <section css={studioContainer(ImgBg2Tablet)}>
        <StudioInfoMobile info={location.state} />
        <WorkList />
      </section>
    </PageLayout>
  );
};

export default StudioPage;

const studioContainer = (url: string) => css`
  display: flex;
  gap: 5.4rem;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding: 7.4rem 2.4rem 10rem;

  background-position: top 5.6rem left 0;
  background-size: contain;
  background-image: url(${url});
  background-repeat: no-repeat;
`;
