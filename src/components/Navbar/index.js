import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElemens';
import { Logo } from '../../utils/StyledElements';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../images/logo.svg';

const Navbar = ({ toggle, menuLinks }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);


    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}><Logo src={logo} alt="logo" /></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    {Object.entries(menuLinks).map(([link, value], idx) =>
                        <NavItem key={idx}>
                            <NavLinks
                                to={link}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                {value}
                            </NavLinks>
                        </NavItem>
                    )}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;
