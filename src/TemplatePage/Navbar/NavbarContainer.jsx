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

    return(
        <div className="navbg-color h-24 fixed w-full z-50 drop-shadow-xl max-[620px]:w-full max-[620px]:h-auto">
            <div className="container mx-auto">
                <div className="align-self-center">
                    <div className="flex justify-between max-[620px]:flex-col">
                        <div className="max-[620px]:w-full max-[620px]:flex max-[620px]:justify-center">
                            <img src={verticalLogo} className="w-32 my-4" alt="" />
                        </div>
                        <div className="my-auto text-xl text-white max-[620px]:text-sm">
                            <ul className="navbar-menu max-[620px]:flex max-[620px]:flex-wrap max-[620px]:justify-center">
                                <li className="max-[620px]:py-10">
                                    <Link to="/" onClick={scrollToTop} smooth={true} offset={50} duration={300} delay={500}>
                                        Home
                                    </Link>
                                </li>
                                <li className="max-[620px]:ml-1">
                                    <Link to="/#tentangProgram" smooth={true} offset={50} duration={500} delay={1000}>
                                        Tentang Aplikasi
                                    </Link>    
                                </li>
                                <li className="max-[620px]:ml-1">
                                    <Link to="/#promo" smooth={true} offset={50} duration={500} delay={1000}>
                                        Promo
                                    </Link>    
                                </li>
                                <li className="max-[620px]:ml-1">
                                    <Link to="/#partnership" smooth={true} offset={50} duration={500} delay={1000}>
                                        Partnership 
                                    </Link> 
                                </li>
                                <li className="max-[620px]:ml-1">
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