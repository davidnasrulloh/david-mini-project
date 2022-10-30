import React from "react";
import Slider from 'react-slick';
import "./Promo.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Promo = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
    };

    return(
        <div className="container mx-auto">
            <h1 className="text-primary font-bold text-3xl text-center pt-32 mb-16">Promo Menarik Untuk Mu!</h1>
            <Slider {...settings} className="my-12 mx-32">
                <div className=""><img src={require('./img/promo/promo1.png')} alt="Credit to Joshua Earle on Unsplash"/></div>
                <div className=""><img src={require('./img/promo/promo2.png')} alt="Credit to Alisa Anton on Unsplash"/></div>
                <div className=""><img src={require('./img/promo/promo1.png')} alt="Credit to Joshua Earle on Unsplash"/></div>
            </Slider>
        </div>
    );
}

export default Promo;