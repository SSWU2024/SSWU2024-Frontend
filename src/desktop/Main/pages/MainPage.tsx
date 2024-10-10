import { css } from '@emotion/react';
import { IcListRight } from '../../assets/icon';
import PageLayout from '../../Common/PageLayout';

function MainPage() {
  return (
    <PageLayout>
      <div css={mainContainer}>
        <IcListRight />
        <span css={text(false)}>데스크탑 메인페이지래요</span>
      </div>
    </PageLayout>
  );
}

export default MainPage;

// 스타일 파일 분리 말고 이렇게 한번에 쓰는거 어떨까욤?
const mainContainer = css`
  width: 10rem;
  height: 10rem;

  background-color: black;
  color: white;

  text-align: center;
`;

// props 사용은 요렇게!
const text = (state: boolean) => css`
  color: ${state ? 'black' : 'white'};
`;
