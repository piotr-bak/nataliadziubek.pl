import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

const Header = () => {
    const [activeIndex, setActiveIndex] = useState();

    function changeIndex(event, newIndex) {
        setActiveIndex(newIndex);
    }

    return (
        <header className="bg-black top-0 overflow-hidden relative overscroll-none">
            <Navbar changeIndex={changeIndex} />
            <Hero routeId={activeIndex} />
        </header>
    );
};

export default Header;
