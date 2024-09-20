import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ImgBg2Web } from '../../assets/image';
import PageLayout from '../../Common/PageLayout';
import StudioInfo from '../components/StudioInfo';
import TotalWorks from '../components/TotalWorks';

const StudioPage = () => {
  const navigate = useNavigate();
  const { currentUrl } = useParams();
  const { state } = useLocation();
  const { id } = state || {};

  useEffect(() => {
    if (!state) {
      // 추후 에러 페이지로 이동 예정
      navigate('/');
    }
  }, [state, currentUrl]);

  return (
    <PageLayout>
      <section css={studioPageContainer}>
        <img src={ImgBg2Web} css={bg} />

        <StudioInfo info={state} />
        <TotalWorks id={id} />
      </section>
    </PageLayout>
  );
};

export default StudioPage;

const studioPageContainer = css`
  display: flex;
  gap: calc(100vh / 5.06);
  flex-direction: column;
  position: relative;

  width: 100%;
  padding: calc(100vh / 6.13) calc(100% / 24) 0;
  margin-bottom: calc(100vh / 5.78);
`;

const bg = css`
  position: absolute;
  top: 5.2rem;
  left: 0;
  z-index: -1;

  min-height: calc(100vh - 5.2rem);

  height: 100%;
`;
