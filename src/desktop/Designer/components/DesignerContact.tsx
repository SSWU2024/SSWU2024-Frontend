import { css } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';
import { DesignerContactProps } from '../types/designerType';

const DesignerContact = ({
  email,
  instagram,
  behance,
}: DesignerContactProps) => {
  return (
    <article>
      <div css={contactContainer}>
        <div css={contact}>
          <p css={contactCategory}>E-MAIL</p>
          <p css={contactContents}>{email}</p>
        </div>
        {instagram && (
          <div css={contact}>
            <p css={contactCategory}>INSTAGRAM</p>
            <p css={contactContents}>{instagram}</p>
          </div>
        )}
        {behance && (
          <div css={contact}>
            <p css={contactCategory}>BEHANCE</p>
            <p css={contactContents}>{behance}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default DesignerContact;

const contactContainer = css`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-direction: column;
`;

const contact = css`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  flex-direction: column;
`;

const contactCategory = css`
  color: ${colors.gray300};
  ${fonts.desktop_body_semi_20};
`;

const contactContents = css`
  color: ${colors.gray900};
  ${fonts.desktop_body_reg_20};
`;
