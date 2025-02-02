import React, { useState } from 'react';

const Carousel = () => {
    

    return (
        <div className="relative">
            

            {/* Carousel */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1697730309688-cc2a3a573494?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGhha2ElMjBjb2xsZWdlJTJDJTIwZGhha2ElMkMlMjBiYW5nbGFkZXNofGVufDB8fDB8fHww"
                        className="w-full h-80 object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/464691557_1075296054600069_8316660686626900244_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHDtu9YpEl0gO3RH8C6_q5kSkQ_3NiXnQlKRD_c2JedCUNPOnDGrjojDV4NIl7fgxeS4knZmd_0cAXCjuqL-T-i&_nc_ohc=JG7YsCaRHvgQ7kNvgGH94kJ&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AluvrhO2xWt6kmnoOigNNFh&oh=00_AYDu9wdXeDr-sYpvkYnlrhGBGkQcOH7wqKImZduWiNpmgw&oe=67A4A669"
                        className="w-full h-80 object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://www.aggsc.edu.bd/public/upload/videoimg/2oi9l.jpg"
                        className="w-full h-80 object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/468736651_558847066905235_8562013502174210459_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFxGsDgzMwTW2-PLWfephqvkmRoiZl59gGSZGiJmXn2Aanx6cb9Xn9sDsAn2yuwu5ITlvMZPjkIZ6aeBrhfC7U-&_nc_ohc=-5VQDdy7BUoQ7kNvgEDbCvQ&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AoN_7c2VpDsr7cFTVK359KG&oh=00_AYCSf3K7Ni4u67c0D63rJCqsq3dOIhMCqnOJ2hj3BINekA&oe=67A4DB45"
                        className="w-full h-80 object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;