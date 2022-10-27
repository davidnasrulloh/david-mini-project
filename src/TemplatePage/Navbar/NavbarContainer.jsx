import React from "react";
import "./NavbarContainer.css";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { animateScroll as scroll} from 'react-scroll';
import verticalLogo from "./img/vertical-logo.png";

const Navbar = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
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
                                        Tentang Program
                                    </Link>    
                                </li>
                                <li>
                                    <Link to="#promo">
                                        Promo
                                    </Link>    
                                </li>
                                <li>Partnership</li>
                                <li>
                                    <Link to="/about-us">
                                        About Us
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