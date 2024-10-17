import { css } from '@emotion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { colors, fonts } from '../../../styles/theme';
import { DesignersProps } from '../types/workDetailTypes';

const Designers = ({ designers }: DesignersProps) => {
  // 서버에 데이터 제대로 들어가면 삭제예정
  const images = [
    {
      imgPath:
        'https://i.pinimg.com/236x/13/26/c1/1326c1f3ec2a54bfc0893a0c582360de.jpg',
      fileFormat: 'jpeg',
    },
    {
      imgPath:
        'https://i.pinimg.com/originals/a0/89/e7/a089e759d7e713b4eba7b6cda87b6c8a.gif',
      fileFormat: 'gif',
    },
  ];

  const [hoveredImg, setHoveredImg] = useState({
    hoveredTitle: '',
    hoveredName: '',
  });

  const { hoveredName, hoveredTitle } = hoveredImg;

  const handleHoverImg = (workTitle: string, name: string) => {
    setHoveredImg({
      hoveredTitle: workTitle,
      hoveredName: name,
    });
  };

  const handleLeaveImg = () => {
    setHoveredImg({
      hoveredTitle: '',
      hoveredName: '',
    });
  };

  return (
    <article css={designedByContainer}>
      <p css={designedByTitle}>Designed by</p>
      <div css={totalDesigners}>
        {designers.map((designer) => {
          const { designerId, name, engName, email, works } = designer;
          // 서버에 데이터 제대로 들어오면 이 코드로 대체 예정
          // const { workId, workTitle, studioNm, images } = works[0];

          const { workId, workTitle, studioNm } = works[0];
          const { imgPath } = images[0];
          const isHoveredImg =
            hoveredTitle === workTitle && hoveredName === name;
          const designerUrl = engName.split(' ').join('-');

          return (
            <article key={workId + name} css={designerInfoContainer}>
              <Link
                to={`/designers/${designerUrl}`}
                state={{ designerId: designerId }}
              >
                <div css={designerInfo}>
                  <p css={designerKrName}>{name}</p>
                  <p css={designerEngName}>{engName}</p>
                  <p css={designerEmail}>{email}</p>
                </div>
                <img
                  src={imgPath}
                  css={designersWork(isHoveredImg)}
                  onMouseEnter={() => handleHoverImg(workTitle, name)}
                  onMouseLeave={handleLeaveImg}
                />
              </Link>

              {isHoveredImg && (
                <div css={hoveredInfo}>
                  <p css={hoveredWorkTitle}>{workTitle}</p>
                  <p css={hoveredStudioNm}>{studioNm}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </article>
  );
};

export default Designers;

const designedByContainer = css`
  display: flex;
  gap: calc(100vh / 20.25);
  flex-direction: column;

  margin: calc(100vh / 8.1) 0 calc(100vh / 5.79) calc(100% / 24);
`;

const designedByTitle = css`
  color: ${colors.gray900};
  ${fonts.desktop_title_semi_28};
`;

const totalDesigners = css`
  display: flex;
  gap: calc(100% / 45);
  align-items: center;
`;

const designerInfoContainer = css`
  display: flex;
  gap: calc(100vh / 50.6);
  justify-content: center;
  flex-direction: column;
  position: relative;

  min-width: 30.6rem;

  width: calc(100% / 4.7);
`;

const designerInfo = css`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-bottom: calc(100vh / 50.625);
`;

const designerKrName = css`
  margin-bottom: calc(100vh / 202.5);

  color: ${colors.gray900};
  ${fonts.desktop_body_semi_20};
`;

const designerEngName = css`
  margin-bottom: calc(100vh / 101.25);

  color: ${colors.gray900};
  ${fonts.desktop_body_reg_18};
`;

const designerEmail = css`
  color: ${colors.gray500};
  ${fonts.desktop_body_reg_16};
`;

const designersWork = (isHoveredImg: boolean) => css`
  min-height: 30.6rem;

  width: 100%;
  aspect-ratio: 1 / 1;

  object-fit: cover;

  ${isHoveredImg &&
  css`
    filter: brightness(0.5);
  `}
`;

const hoveredInfo = css`
  display: flex;
  gap: calc(100vh / 202.5);
  flex-direction: column;
  position: absolute;
  bottom: 1.6rem;
  left: 1.6rem;
`;

const hoveredWorkTitle = css`
  color: ${colors.white};
  ${fonts.desktop_body_semi_20};
`;

const hoveredStudioNm = css`
  color: ${colors.white};
  ${fonts.desktop_body_reg_18};
`;
