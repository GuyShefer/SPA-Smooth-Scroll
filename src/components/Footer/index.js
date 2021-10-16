import React from 'react';
import { FooterContainer, FooterLink, FooterLinkItmes, FooterLinksContainer, FooterLinkTitle, FooterLinkWrapper, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import { Logo } from '../../utils/StyledElements';
import logo from '../../images/logo.svg';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItmes>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/">How it works</FooterLink>
                            <FooterLink to="/">Testimonials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItmes>
                        <FooterLinkItmes>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">Destinations</FooterLink>
                            <FooterLink to="/">Sponsorships</FooterLink>
                        </FooterLinkItmes>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItmes>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/">Submit Video</FooterLink>
                            <FooterLink to="/">Ambassadors</FooterLink>
                            <FooterLink to="/">Agency</FooterLink>
                            <FooterLink to="/">Influencer</FooterLink>
                        </FooterLinkItmes>
                        <FooterLinkItmes>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/">Instragram</FooterLink>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Youtube</FooterLink>
                            <FooterLink to="/">Twitter</FooterLink>
                            <FooterLink to="/">Github</FooterLink>
                        </FooterLinkItmes>
                    </FooterLinkWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}><Logo src={logo} alt="logo" /></SocialLogo>
                        <WebsiteRights>&#xa9; 2021 All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtbue"><FaYoutube /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
