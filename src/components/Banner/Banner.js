import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
            <Carousel
            autoPlay
            infiniteLoop    
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval0={500}
            >
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/30/kindle/journeys/YjE2NjU3MTEt/YjE2NjU3MTEt-M2Q0ZDBhNWQt-w3000._CB664599847_.jpg" alt="/" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/30/AMAZON-FASHION/2020/FASHION/PROMO/AW20EOSS_SALE/GW_LAST-DAYS/GW_HERO_DESK_3000x1200._CB413316717_.jpg" alt="/" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/30/kindle/journeys/NGE5NTljZTMt/NGE5NTljZTMt-MDFiMWQwMzYt-w3000._CB663832576_.jpg" alt="/" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
