"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import BestSellerCard from "@/app/_components/product/simple-best-seller-slider/BestSellerCard";

interface Props {
    sliderData:Array<any>
}
export default function BestSellerSlider({sliderData}:Props) {
    return (
                  <Swiper
                spaceBetween={16}
                slidesPerView={1}
                autoplay={true}
                modules={[Autoplay]}
                breakpoints={{
                    // 768: {
                    //     slidesPerView: 2,
                    //     spaceBetween: 18
                    // },
                    1024: {
                        slidesPerView:2,
                        spaceBetween: 22
                    },
                    1280: {
                        slidesPerView:3,
                        spaceBetween: 18
                    },
                }}
            >
                {
                    sliderData.map((slideData, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <BestSellerCard data={slideData} />
                            </SwiperSlide>
                        )
                    })
                }
           </Swiper>
    );
}

