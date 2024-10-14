import { css } from '@emotion/react';
import { Link, useNavigate } from 'react-router-dom';
import { GNB } from '../../constants/headerConst';
import { colors, fonts } from '../../styles/theme';
import { IcGnbGraphic } from '../assets/icon';

const Header = () => {
  const navigate = useNavigate();

  const handleClickGnbGraphic = () => {
    navigate('/');
  };

  return (
    <header css={headerContainer}>
      <IcGnbGraphic onClick={handleClickGnbGraphic} />
      <ul css={gnbContainer}>
        {GNB.map(({ url, name }) => {
          return (
            <li key={url} css={gnb}>
              <Link to={url}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;

const headerContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;

  width: 100%;

  border-bottom: 0.1rem solid ${colors.gray300};
  background-color: ${colors.white};
`;

const gnbContainer = css`
  display: flex;
  gap: 10rem;
  justify-content: center;
  align-items: center;

  margin-right: 8rem;
`;

const gnb = css`
  color: ${colors.gray500};
  ${fonts.desktop_body_reg_18};
`;
