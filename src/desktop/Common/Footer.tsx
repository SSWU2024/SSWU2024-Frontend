import { css } from '@emotion/react';
import { colors, fonts } from '../../styles/theme';
import { IcInsta } from '../assets/icon';

const Footer = () => {
  return (
    <footer css={footerContainer}>
      <span css={footerText}>
        ©2024 Sungshin Women’s University Dept. of Design Graduation Exhibition
      </span>

      <div css={idContainer}>
        <span css={footerText}>@sswud_2024</span>
        <IcInsta />
      </div>
    </footer>
  );
};

export default Footer;

const footerContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;

  width: 100%;
  padding: 1rem 6rem;

  border-top: 0.1rem solid ${colors.gray300};
  background-color: ${colors.white};
`;

const footerText = css`
  color: ${colors.gray500};
  ${fonts.desktop_cap_reg_14};
`;

const idContainer = css`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
`;
