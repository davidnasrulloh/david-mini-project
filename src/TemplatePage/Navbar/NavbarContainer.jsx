import React from "react";
import "./NavbarContainer.css";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { animateScroll as scroll, scroller} from 'react-scroll';
import verticalLogo from "./img/vertical-logo.png";

const Navbar = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const scrollerCustomPromo = () => {
        scroll.scrollTo(2900);
    }

    const scrollerCustomPartnership = () => {
        scroll.scrollTo(3350);
    }

    return(
        <div className="navbg-color h-24 fixed w-full z-50 drop-shadow-xl">
            <div className="container mx-auto">
                <div className="align-self-center">
                    <div className="flex justify-between">
                        <div className="">
                            <img src={verticalLogo} className="w-32 my-4" alt="" />
                        </div>
                        <div className="my-auto text-xl text-white">
                            <ul className="navbar-menu">
                                <li>
                                    <Link to="/" onClick={scrollToTop} smooth={true} offset={50} duration={300} delay={500}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#tentangProgram" smooth={true} offset={50} duration={500} delay={1000}>
                                        Tentang Aplikasi
                                    </Link>    
                                </li>
                                <li>
                                    <Link to="/#promo" smooth={true} offset={50} duration={500} delay={1000}>
                                        Promo
                                    </Link>    
                                </li>
                                <li>
                                    <Link to="/#partnership" smooth={true} offset={50} duration={500} delay={1000}>
                                        Partnership 
                                    </Link> 
                                </li>
                                <li>
                                    <Link to="/about-us" onClick={scrollToTop} smooth={true} offset={50} duration={300} delay={500}>
                                        Team Product
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;