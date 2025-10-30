"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import SimpleProductCard from "@/app/_components/product/product-card/SimpleProductCard";

interface Props {
    sliderData:Array<any>
}
export default function BestSellerSlider({sliderData}:Props) {
    return (
                  <Swiper
                spaceBetween={16}
                slidesPerView={2}
                autoplay={true}
                modules={[Autoplay]}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 18
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 22
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 18
                    },
                }}
            >
                {
                    sliderData.map((slideData, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <SimpleProductCard data={slideData} />
                            </SwiperSlide>
                        )
                    })
                }
           </Swiper>
    );
}

