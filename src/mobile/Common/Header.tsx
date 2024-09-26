import { css } from '@emotion/react';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { colors, fonts } from '../../styles/theme';
import { IcGnbGraphicMobile, IcHamburger } from '../assets/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

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

  return (
    <div css={dropDownBackground(isMenuOpen)}>
      <header css={headerContainer} ref={dropDownRef}>
        <div css={headerCss}>
          <IcGnbGraphicMobile />
          <button onClick={toggleDropDown}>
            <IcHamburger />
          </button>
        </div>

        {isMenuOpen && (
          <div css={dropDownMenu}>
            <Link to="/works" css={dropDownItem}>
              Works
            </Link>
            <Link to="/designers" css={dropDownItem}>
              Designers
            </Link>
            <Link to="/displays" css={dropDownItem}>
              Display
            </Link>
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

  background-color: ${isMenuOpen ? 'rgba(34, 34, 34, 0.5)' : 'transparent'};
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
  height: 5.8rem;
  padding-right: 0.4rem;

  border-bottom: 1px solid ${colors.gray300};
  background-color: ${colors.white};
`;

const dropDownMenu = css`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  background-color: ${colors.white};
  color: ${colors.gray900};
  ${fonts.mobile_title_reg_18};
`;

const dropDownItem = css`
  width: 100%;
  height: 5.4rem;
  padding: 1.8rem 0 1.8rem 1.6rem;
`;
