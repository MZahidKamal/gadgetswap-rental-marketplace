import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import images correctly
import slide1 from '../../assets/pic-1.jpg';
import slide2 from '../../assets/pic-2.jpg';
import slide3 from '../../assets/pic-3.jpg';

const BannerComponent = () => {
    const slides = [
        {
            image: slide1,
            title: "Swap Your Gadgets Easily",
            description: "Exchange old gadgets for new ones with trusted users.",
            button1: "Explore Swaps",
            button2: "Start Swapping",
        },
        {
            image: slide3,
            title: "Rent the Latest Tech",
            description: "Get access to premium gadgets without buying.",
            button1: "Browse Rentals",
            button2: "List Your Gadget",
        },
        {
            image: slide2,
            title: "Find the Perfect Device",
            description: "Discover a wide range of gadgets for rent or swap.",
            button1: "View Listings",
            button2: "Post Your Gadget",
        },
    ];

    return (
        <section className="relative w-full h-[70vh]"> {/* Updated height here */}
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative w-full h-[70vh] flex items-center justify-center text-center text-white bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            {/* Overlay for better text visibility */}
                            <div className="absolute inset-0 bg-opacity-50"></div>

                            {/* Text Content */}
                            <div className="relative z-10 max-w-2xl px-4">
                                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                                <div className="space-x-4">
                                    <button className="btn btn-primary bg-blue-500 px-6 py-3 rounded-xl text-lg hover:bg-blue-600">
                                        {slide.button1}
                                    </button>
                                    <button className="btn btn-outline border-white px-6 py-3 rounded-xl text-lg hover:bg-white hover:text-gray-800">
                                        {slide.button2}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default BannerComponent;
