import React from 'react';
import { Hero1, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroP, VideoBg } from './HeroElements';
import Video from '../../videos/video.mp4';
import { Button } from '../../utils/StyledElements';

const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <Hero1>
                    It’s not about where you were born or the powers you have or what you wear in your chest,
                </Hero1>
                <Hero1>It’s about what you do!</Hero1>
                <HeroP>-Superman-</HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="signup"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        Get Started
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
