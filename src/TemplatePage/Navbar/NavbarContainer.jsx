import React from "react";
import "./NavbarContainer.css";
import { Link } from "react-router-dom";
import verticalLogo from "./img/vertical-logo.png";
const Navbar = () => {
    return(
        <div className="navbg-color h-24">
            <div className="container mx-auto">
                <div className="align-self-center">
                    <div className="flex justify-between">
                        <div className="">
                            <img src={verticalLogo} className="w-32 my-4" alt="" />
                        </div>
                        <div className="my-auto text-xl text-white">
                            <ul className="navbar-menu">
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li>Tentang Program</li>
                                <li>Promo</li>
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