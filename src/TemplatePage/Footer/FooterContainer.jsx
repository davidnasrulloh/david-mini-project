import React from "react";
import "./FooterContainer.css";
import { HashLink as Link } from 'react-router-hash-link';
import { animateScroll as scroll} from 'react-scroll';

import gambar1 from "./img/gambar1.png";
import appGalery from "./img/appGalery.png";
import aStore from "./img/aStore.png";
import gPlay from "./img/gPlay.png";
import facebook from "./img/facebook.svg";
import instagram from "./img/instagram.svg";
import twitter from "./img/twitter.svg";

const Footer = () => {
    
    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return(
        <div className="bg-primary mt-44">
            <div className="container mx-auto">
                <div className="flex flex-row px-36 h-60">
                    <div className="flex-auto w-20">
                        <div className="flex flex-row justify-content-start align-items-center">
                            {/* <p className="object-center">cok</p> */}
                            <img src={gambar1} alt="Gambar App Patungin" className="w-44 gambar-phone left-auto ml-40 drop-shadow-xl rounded-2xl" />
                        </div>
                    </div>
                    <div className="flex-auto w-96 text-white pt-20 pb-12">
                        <h2 className="text-3xl font-bold mb-2">Patungan #MUDAHBANGET Sekarang!</h2>
                        <p>Download Patungin Sekarang</p>
                        <div className="mt-4 flex" >
                            <img src={aStore} alt="App Store" className="w-32 mr-3"/>
                            <img src={gPlay} alt="Google Play" className="w-32 mr-3"/>
                            <img src={appGalery} alt="App Galery" className="w-32"/>
                        </div>
                    </div>
                </div>
                <div className="">
                    <hr/>
                </div>
                <div className="flex justify-between py-12">
                    <div>
                        <h3 className="text-4xl font-bold text-white">Patungin</h3>
                        <ul className="footer-menu text-lg">
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
                            <li>Promo</li>
                            <li>Partnership</li>
                        </ul>
                        <p className="text-lg text-white mt-2">© 2022 Patungin - PT. Asix Debit Indonesia Koe. All Rights Reserved.</p>
                    </div>
                    <div>
                        <div className="flex w-96 justify-end">
                            <div className="social-media">
                                <p className="font-bold text-white mb-5">Our Social Media</p>
                                <div className="flex social-media-icons">
                                    <img src={instagram} alt="instagram" />
                                    <img src={facebook} alt="facebook" />
                                    <img src={twitter} alt="twitter" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;