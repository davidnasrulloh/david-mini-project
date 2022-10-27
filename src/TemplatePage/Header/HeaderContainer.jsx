import React from "react";
import "./HeaderContainer.css";
import aStore from "./img/aStore.png";
import gPlay from "./img/gPlay.png";
import appGalery from "./img/appGalery.png";
import gambar1 from "./img/gambar1.png";
import Navbar from "../Navbar/NavbarContainer";


const Header = () => {
    return(
        <div className="">
            <div className="background-header">
                <div className="h-full bg-color">
                    <Navbar/>
                    <div className="container mx-auto">
                        <div className="flex pt-20 pb-12 h-60">  
                            <div className="grow">
                                <h1 className="text-white text-6xl">Merasa patungan mu ribet ? <br/> yuk coba <span className="font-bold">patugin</span> aja</h1>
                            </div>
                            <div className="flex-none">
                                <img src={gambar1} alt="Gambar Phone" className="header-phone" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="pt-8 w-2/4">
                    <p className="text-xl">Mau bayar patungan tapi kebingungan, dan susah buat ngingetin temen? Atau tidak ada history transaksi yang jelas? Donwload Patungin dengan mudah di platform OS kesayangan anda</p>
                </div>
                <div className="flex mt-6">
                    <img src={aStore} alt="App Store" className="w-32 mr-3"/>
                    <img src={gPlay} alt="Google Play" className="w-32 mr-3"/>
                    <img src={appGalery} alt="App Galery" className="w-32"/>
                </div>
            </div>
            <div className="container mx-auto">
                <hr className="py-12 mt-16" />
            </div>
        </div>
    );
}

export default Header;