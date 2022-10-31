import React from "react";
import "./HeaderContainer.css";
import aStore from "./img/aStore.png";
import gPlay from "./img/gPlay.png";
import appGalery from "./img/appGalery.png";
import gambar1 from "./img/gambar1.png";
import Navbar from "../Navbar/NavbarContainer";

const Header = () => {
    return(
        <div className="max-[620px]:w-full" id="header">
            <Navbar/>
            <div className="background-header">
                <div className="h-full bg-color pt-24 max-[620px]:pt-32">
                    <div className="container mx-auto">
                        <div className="flex pt-20 pb-12 h-64">  
                            <div className="grow">
                                <h1 className="text-white text-3xl leading-[120%] md:text-xl lg:text-6xl max-[620px]:text-center max-[620px]:px-12 max-[620px]:pt-4">Merasa patungan mu ribet ? <br/> yuk coba <span className="font-bold">patugin</span> aja</h1>
                            </div>
                            <div className="flex-none">
                                <img src={gambar1} alt="Gambar Phone" className="header-phone max-[620px]:hidden "/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto max-[620px]:text-center">
                <div className="pt-8 w-2/4 max-[620px]:w-full max-[620px]:px-2">
                    <p className="text-xl">Mau bayar patungan tapi kebingungan, dan susah buat ngingetin temen? Atau tidak ada history transaksi yang jelas? Donwload Patungin dengan mudah di platform OS kesayangan anda</p>
                </div>
                <div className="flex mt-6 max-[620px]:flex-col max-[620px]:items-center">
                    <img src={aStore} alt="App Store" className="w-32 mr-3 mb-3"/>
                    <img src={gPlay} alt="Google Play" className="w-32 mr-3 mb-3"/>
                    <img src={appGalery} alt="App Galery" className="w-32 mr-3 mb-3"/>
                </div>
            </div>
            <div className="container mx-auto">
                <hr className="pt-12 pb-12 mt-16 max-[620px]:pb-0" />
            </div>
        </div>
    );
}

export default Header;