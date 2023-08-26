import { useState } from 'react';
import './navigation.scss';

import logo from '../assets/images/logo.svg';
import menuOpen from '../assets/images/icon-menu.svg';
import menuClose from '../assets/images/icon-menu-close.svg';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    function toggleMenu() {
        if(isMenuOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsClosing(false);
                setIsMenuOpen(false);
            }, 200);
        }
        else {
            setIsMenuOpen(true);
        }
            
    }

    return (
        <>
        <div className='backdrop' data-open={`${isMenuOpen}`} data-closing={`${isClosing}`}></div>
        <nav>
            <div className="logo">
                <img src={`${logo}`} alt="logo" />
            </div>
            <div className="menu-btn-open" onClick={toggleMenu}>
                <img src={`${menuOpen}`} alt="menu-open" />
            </div>
            <div className="menu" data-open={`${isMenuOpen}`} data-closing={`${isClosing}`}>
                <div className="menu-btn-close"  onClick={toggleMenu}>
                    <img src={`${menuClose}`} alt="menu-close" />
                </div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">New</a></li>
                    <li><a href="">Popular</a></li>
                    <li><a href="">Trending</a></li>
                    <li><a href="">Categories</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navigation;