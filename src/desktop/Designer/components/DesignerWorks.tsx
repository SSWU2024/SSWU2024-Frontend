import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { colors, fonts } from '../../../styles/theme';
import { DesignerWorksProps } from '../types/designerType';

const DesignerWorks = ({ works }: DesignerWorksProps) => {
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
        const { url, workTitle, studioNm, images } = work;
        const { imgPath } = images.length > 1 ? images[1] : images[0];
        const studioUrl = updateStudioUrl(studioNm);

        return (
          <Link to={`${studioUrl}/${url}`}>
            <img src={imgPath} css={workImg} />
            <div css={workInfoContainer}>
              <p css={title}>{workTitle}</p>
              <p css={studioName}>{studioNm}</p>
            </div>
          </Link>
        );
      })}
    </article>
  );
};

export default DesignerWorks;

const worksContainer = css`
  display: flex;
  gap: 3.2rem;
  align-items: center;
`;

const workImg = css`
  width: 30.6rem;
  height: 30.6rem;
`;

const workInfoContainer = css`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;

  margin-top: 1.2rem;
`;

const title = css`
  color: ${colors.gray900};
  ${fonts.desktop_body_semi_20};
`;

const studioName = css`
  color: ${colors.gray900};
  ${fonts.desktop_body_reg_18};
`;
