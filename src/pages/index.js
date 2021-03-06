import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [menuLinks,] = useState({ about: 'About', discover: 'Discover', services: 'Services', signup: 'Sign Up' });

    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggleSideBar} menuLinks={menuLinks} />
            <Navbar toggle={toggleSideBar} menuLinks={menuLinks} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home;
