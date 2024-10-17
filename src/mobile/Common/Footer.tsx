import { css } from '@emotion/react';
import { colors, fonts } from '../../styles/theme';
import { IcInsta } from '../assets/icon';

const Footer = () => {
  return (
    <footer css={footerCss}>
      <p css={textCss}>
        ©2024 Sungshin Women’s University <br /> Dept. of Design Graduation
        Exhibition
      </p>
      <a href="https://www.instagram.com/sswud_2024/">
        <IcInsta />
      </a>
    </footer>
  );
};

export default Footer;

const footerCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 10rem;
  padding: 4rem 1.6rem 1.2rem;

  border-top: 1px solid ${colors.gray300};
`;

const textCss = css`
  color: ${colors.gray500};
  ${fonts.mobile_cap_reg_12};
`;
