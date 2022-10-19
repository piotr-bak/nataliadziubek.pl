import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dataFile from '../data/data-reviews.json';

const data = JSON.parse(JSON.stringify(dataFile));

const CarouselReviews = () => {
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    };
    return (
        <Slider
            {...settings}
            className="max-w-3xl mx-auto my-auto pt-6 px-6 pb-8"
        >
            {Object.values(data).map((entry) => (
                <div
                    key={entry.name}
                    className="shadow bg-content-background rounded-md text-mobile-p-size md:text-small-size"
                >
                    <div className="flex flex-row items-start">
                        <blockquote className="italic p-8 pt-6 max-w-prose">
                            {entry.content}
                        </blockquote>
                    </div>
                    <p className="font-bold mb-4 float-right pr-12 pb-6">
                        {entry.author}
                    </p>
                </div>
            ))}
        </Slider>
    );
};

export default CarouselReviews;
