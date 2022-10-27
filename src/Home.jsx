import React from "react";
import TentangContainer from "./Container/TentangContainer";
import Footer from "./TemplatePage/Footer/FooterContainer";
import Header from "./TemplatePage/Header/HeaderContainer";

const Home = () => {
    return(
        <>
            <Header/>
            <TentangContainer/>
            <Footer/>
        </>
    )
}

export default Home;