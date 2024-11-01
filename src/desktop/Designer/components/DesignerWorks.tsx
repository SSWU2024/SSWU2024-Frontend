import { css } from '@emotion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { colors, fonts } from '../../../styles/theme';
import { DesignerWorksProps } from '../types/designerType';

const DesignerWorks = ({ works }: DesignerWorksProps) => {
  const [hoveredImg, setHoveredImg] = useState({
    hoveredSrc: '',
    hoveredUrl: '',
  });

  const { hoveredSrc, hoveredUrl } = hoveredImg;

  const handleHoverImg = (
    images: Array<{ imgPath: string; fileFormat: string }>,
    url: string,
  ) => {
    if (images.length > 1) {
      const { imgPath } = images[1];
      setHoveredImg({
        hoveredSrc: imgPath,
        hoveredUrl: url,
      });
    } else {
      setHoveredImg({
        hoveredSrc: '',
        hoveredUrl: url,
      });
    }
  };

  const handleLeaveImg = () => {
    setHoveredImg({
      hoveredSrc: '',
      hoveredUrl: '',
    });
  };

  const updateStudioUrl = (studioNm: string) => {
    switch (studioNm) {
      case '시각디자인스튜디오 A':
        return '/studio-a';

      case '시각디자인스튜디오 B':
        return '/studio-b';

      case '디자인씽킹스튜디오':
        return '/design-thinking';

      case '정보경험디자인스튜디오':
        return '/user-experience';

      case '모션그래픽스스튜디오':
        return '/motion-graphics';

      case '공간디자인스튜디오':
        return '/space';

      case '공간연출디자인스튜디오':
        return '/space-direction';

      default:
        return '/';
    }
  };

  return (
    <article css={worksContainer}>
      {works.map((work) => {
        const { workId, workTitle, workEngTitle, studioNm, images } = work;
        const { imgPath } = images[0];
        const studioUrl = updateStudioUrl(studioNm);
        const url = workEngTitle.trim().split(' ').join('-');
        const isHoveredImg = url === hoveredUrl;
        const isHoveredGif = images.length > 1 && isHoveredImg;

        return (
          <Link
            key={workId}
            to={`${studioUrl}/${url}`}
            state={{ workId: workId }}
            onMouseEnter={() => handleHoverImg(images, url)}
            onMouseLeave={handleLeaveImg}
          >
            <img src={isHoveredGif ? hoveredSrc : imgPath} css={workImg} />
            <div css={workInfoContainer}>
              <p css={title(isHoveredImg)}>{workTitle}</p>
              <p css={studioName(isHoveredImg)}>{studioNm}</p>
            </div>
          </Link>
        );
      })}
    </article>
  );
};

export default DesignerWorks;

const worksContainer = css`
  display: grid;
  column-gap: 3.2rem;

  justify-content: end;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);

  /* 이미지가 오른쪽부터 배치 */
  direction: rtl;

  min-width: 64.4rem;

  width: calc(100% / 2.24);
`;

const workImg = css`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const workInfoContainer = css`
  gap: 0.4rem;
  flex-direction: column;

  margin-top: 1.2rem;

  direction: ltr;
`;

const title = (isHoveredImg: boolean) => css`
  color: ${isHoveredImg ? colors.pink300 : colors.gray900};
  ${fonts.desktop_body_semi_20};
`;

const studioName = (isHoveredImg: boolean) => css`
  color: ${isHoveredImg ? colors.pink300 : colors.gray900};
  ${fonts.desktop_body_reg_18};
`;
