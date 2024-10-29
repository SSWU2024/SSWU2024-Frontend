import { css } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';
import { renderEngName } from '../../../utils/renderEngName';

interface designerInfoProps {
  name: string;
  engName: string;
  major: string;
  email: string;
  instagram?: string;
  behance?: string;
}

const DesignerInfo = (props: designerInfoProps) => {
  const { name, engName, major, email, instagram, behance } = props;
  const newEngName = renderEngName(engName);

  return (
    <section css={infoContainer}>
      <div css={textCss}>
        <h1 css={nameCss('ko')}>{name}</h1>
        <p css={nameCss('en')}>{newEngName}</p>
      </div>

      <p css={majorCss}>{major}</p>

      <ul css={urlContainer}>
        <li css={urlItem}>
          <h1 css={urlText('title')}>E-MAIL</h1>
          <p css={urlText('content')}>{email}</p>
        </li>

        {instagram && (
          <li css={urlItem}>
            <h1 css={urlText('title')}>INSTAGRAM</h1>
            <p css={urlText('content')}>{instagram}</p>
          </li>
        )}

        {behance && (
          <li css={urlItem}>
            <h1 css={urlText('title')}>BEHANCE</h1>
            <p css={urlText('content')}>{behance}</p>
          </li>
        )}
      </ul>
    </section>
  );
};

export default DesignerInfo;

const infoContainer = css`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const textCss = css`
  display: flex;
  flex-direction: column;

  @media (width < 768px) {
    margin-bottom: 2rem;
  }

  @media (768px <=width < 1440px) {
    margin-bottom: 3.2rem;
  }

  color: ${colors.gray900};
`;

const nameCss = (state: 'ko' | 'en') => css`
  @media (width < 768px) {
    ${state === 'ko' ? fonts.mobile_title_semi_20 : fonts.mobile_body_reg_14};
  }

  @media (768px <=width < 1440px) {
    ${state === 'ko' ? fonts.desktop_title_semi_24 : fonts.desktop_body_reg_16};
  }
`;

const majorCss = css`
  @media (width < 768px) {
    margin-bottom: 3.2rem;
    ${fonts.mobile_body_semi_14};
  }

  @media (768px <=width < 1440px) {
    margin-bottom: 4.8rem;
    ${fonts.tablet_body_semi_16};
  }

  color: ${colors.pink300};
`;

const urlContainer = css`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media (width < 768px) {
    gap: 1.2rem;
  }

  @media (768px <=width < 1440px) {
    gap: 2rem;
  }
`;

const urlItem = css`
  display: flex;
  flex-direction: column;
`;

const urlText = (variant: 'title' | 'content') => css`
  color: ${variant === 'title' ? colors.gray300 : colors.gray900};

  @media (width < 768px) {
    ${variant === 'title'
      ? fonts.mobile_body_semi_14
      : fonts.mobile_body_reg_14};
  }

  @media (768px <=width < 1440px) {
    ${variant === 'title'
      ? fonts.tablet_body_semi_16
      : fonts.tablet_body_reg_16};
  }
`;
