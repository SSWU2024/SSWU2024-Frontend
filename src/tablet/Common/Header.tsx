import { css } from '@emotion/react';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GNB } from '../../constants/headerConst';
import { colors, fonts } from '../../styles/theme';
import { IcGnbGraphicTablet, IcHamburger } from '../assets/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDropDown = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleOutsideDropDown = (e: CustomEvent<MouseEvent>) => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(e.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideDropDown as EventListener);
    return () => {
      document.removeEventListener(
        'click',
        handleOutsideDropDown as EventListener,
      );
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div css={dropDownBackground(isMenuOpen)}>
      <header css={headerContainer} ref={dropDownRef}>
        <div css={headerCss}>
          <IcGnbGraphicTablet onClick={() => navigate('/')} />
          <button onClick={toggleDropDown}>
            <IcHamburger />
          </button>
        </div>

        {isMenuOpen && (
          <div css={dropDownMenu}>
            {GNB.map(({ url, name }) => {
              return (
                <Link to={url} key={url} css={dropDownItem}>
                  {name}
                </Link>
              );
            })}
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;

const dropDownBackground = (isMenuOpen: boolean) => css`
  position: fixed;

  width: 100%;
  height: 100%;

  background-color: ${isMenuOpen ? 'rgba(31, 27, 28, 0.5)' : 'transparent'};
`;

const headerContainer = css`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;

  width: 100%;
`;

const headerCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 5.6rem;
  padding-right: 1.6rem;

  border-bottom: 1px solid ${colors.gray300};
  background-color: ${colors.white};
`;

const dropDownMenu = css`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0.6rem 0;

  background-color: ${colors.white};
  color: ${colors.gray900};
  ${fonts.mobile_title_reg_18};
`;

const dropDownItem = css`
  width: 100%;
  height: 5.4rem;
  padding: 1.8rem 0 1.8rem 1.6rem;
`;
