import React from "react";
import "./HeaderContainer.css";
import aStore from "./img/aStore.png";
import gPlay from "./img/gPlay.png";
import appGalery from "./img/appGalery.png";
import gambar1 from "./img/gambar1.png";
import Navbar from "../Navbar/NavbarContainer";

const Header = () => {
    return(
        <div className="max-[768px]:w-full" id="header">
            <Navbar/>
            <div className="background-header max-[768px]:w-full">
                <div className="h-full bg-color pt-24 max-[768px]:pt-32">
                    <div className="container mx-auto">
                        <div className="flex pt-20 pb-12 h-64">  
                            <div className="grow">
                                <h1 className="text-white text-3xl leading-[120%] md:text-xl lg:text-6xl max-[768px]:text-center max-[768px]:px-12 max-[768px]:pt-4">Merasa patungan mu ribet ? <br/> yuk coba <span className="font-bold">patugin</span> aja</h1>
                            </div>
                            <div className="flex-none">
                                <img src={gambar1} alt="Gambar Phone" className="header-phone max-[768px]:hidden "/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto max-[768px]:text-center">
                <div className="pt-8 w-2/4 max-[768px]:w-full max-[768px]:px-2 max-[768px]:pt-2">
                    <div className="flex justify-center mb-4">
                        <img src={gambar1} alt="Gambar Phone" className="max-[768px]:w-3/4 lg:hidden "/>
                    </div>
                    <p className="text-xl">Mau bayar patungan tapi kebingungan, dan susah buat ngingetin temen? Atau tidak ada history transaksi yang jelas? Download Patungin dengan mudah di platform OS kesayangan anda</p>
                </div>
                <div className="flex mt-6 max-[768px]:flex-col max-[768px]:items-center">
                    <img src={aStore} alt="App Store" className="w-32 mr-3 mb-3"/>
                    <img src={gPlay} alt="Google Play" className="w-32 mr-3 mb-3"/>
                    <img src={appGalery} alt="App Galery" className="w-32 mr-3 mb-3"/>
                </div>
            </div>
            <div className="container mx-auto">
                <hr className="pt-12 pb-12 mt-16 max-[768px]:pb-0" />
            </div>
        </div>
    );
}

export default Header;