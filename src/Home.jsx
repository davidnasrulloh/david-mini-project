import React from "react";
import TentangContainer from "./container/TentangContainer";
import Footer from "./templatePage/Footer/FooterContainer";
import Header from "./templatePage/Header/HeaderContainer";
// import { HashLink as Link } from 'react-router-hash-link';
// import { Link, animateScroll as scroll } from "react-scroll";
import { Link, animateScroll as scroll} from 'react-scroll';
import PromoContainer from "./container/PromoContainer";
import PartnerContainer from "./container/PartnerContainer";
import HitungContainer from "./container/HitungContainer";

const Home = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return(
        <div class="scroll-smooth">
            <Header/>
            <HitungContainer/>
            <TentangContainer/>
            <PromoContainer/>
            <PartnerContainer/>
            <Footer/>
            <Link onClick={scrollToTop} smooth={true} offset={50} duration={300} delay={500}>
                <a id="to-top" href="#home" class="fixed z-[9999] items-center justify-center bottom-4 right-4 h-14 w-20 bg-primary rounded-full flex mx-auto p-4 hover:animate-pulse">
                    <span class="block w-5 h-5 border-t-2 border-l-2 rotate-45 mt-2"></span>
                </a>
            </Link>
        </div>
    )
}

export default Home;