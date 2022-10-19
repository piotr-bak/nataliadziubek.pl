import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../data/data-certificates';

const CarouselCertificates = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    return (
        <Slider {...settings} className="m-auto px-6">
            {Object.values(data).map((entry) => {
                return (
                    <div key={entry.name}>
                        <img
                            className="block px-4 py-2"
                            alt="Certyfikat"
                            src={entry.img}
                        ></img>
                    </div>
                );
            })}
        </Slider>
    );
};

export default CarouselCertificates;
