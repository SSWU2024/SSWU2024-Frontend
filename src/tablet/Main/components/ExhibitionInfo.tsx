import { css } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';
import { ImgPosterTablet } from '../../assets/image';

function ExhibitionInfo() {
  return (
    <div css={exhibitionInfoContainer}>
      <h1 css={title}>2024 성신여대 디자인과 졸업전시</h1>
      <div css={infoSection}>
        <div css={infoItem('date')}>
          <h2 css={itemText('title')}>전시일자</h2>
          <p css={itemText('content')}>2024.11.05 — 2024.11.10</p>
        </div>

        <div css={infoItem('time')}>
          <h2 css={itemText('title')}>시간</h2>
          <p css={itemText('content')}>
            11.05.TUE :: 2PM — 8PM
            <br />
            11.06.WED — 11.09.SAT :: 10AM — 8PM
            <br />
            11.10.SUN :: 10AM — 6PM
          </p>
        </div>

        <div css={infoItem('location')}>
          <h2 css={itemText('title')}>장소</h2>
          <p css={itemText('content')}>
            성신여자대학교 돈암수정캠퍼스
            <br />
            수정관 1층 가온전시실
            <br />
            난향관 4층 파이룸
          </p>
        </div>
      </div>

      <h2 css={title}>Poster</h2>
      <img src={ImgPosterTablet} alt="메인포스터" css={mainPoster} />
    </div>
  );
}

export default ExhibitionInfo;

const exhibitionInfoContainer = css`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100dvw;
  padding: 20rem 0;

  background-color: ${colors.blue};
`;

const title = css`
  color: ${colors.white};

  ${fonts.desktop_title_semi_28};

  text-align: center;
`;

const infoSection = css`
  display: flex;
  gap: 8rem;
  flex-direction: column;

  padding: 10rem 19rem 20rem;

  color: ${colors.white};
`;

const infoItem = (variant: 'date' | 'time' | 'location') => css`
  display: flex;
  gap: ${variant === 'date' ? '5.2rem' : '8rem'};
`;

const itemText = (variant: 'title' | 'content') => css`
  ${variant === 'title'
    ? fonts.tablet_body_semi_16
    : fonts.desktop_body_reg_16};
`;

const mainPoster = css`
  padding: 4rem 9.25rem 0;
`;
