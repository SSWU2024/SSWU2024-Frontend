import { css } from '@emotion/react';
import { useLocation } from 'react-router-dom';
import { ImgBg2Mobile } from '../../assets/image';
import PageLayout from '../../Common/PageLayout';

import { useEffect } from 'react';
import StudioInfoMobile from '../components/StudioInfo';
import WorkList from '../components/WorkList';

const StudioPage = () => {
  const location = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <section css={studioContainer(ImgBg2Mobile)}>
        <StudioInfoMobile info={location.state} />

        <WorkList />
      </section>
    </PageLayout>
  );
};

export default StudioPage;

const studioContainer = (url: string) => css`
  display: flex;
  gap: 7.2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 7.4rem 1.6rem 10rem;

  background-position: top 5.8rem left 0;
  background-size: contain;
  background-image: url(${url});
  background-repeat: no-repeat;
`;
