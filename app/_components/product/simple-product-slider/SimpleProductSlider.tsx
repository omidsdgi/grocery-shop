"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay,Navigation} from "swiper/modules";
import SimpleProductCard from "@/app/_components/product/product-card/SimpleProductCard";
import {ProductType} from "@/components/type/ProductType";

interface Props{
    sliderData:ProductType[],
    nextEl?:string,
    prevEl?:string,
    slidesPerView?: number
}
export default function SimpleProductSlider({
                                                sliderData,
                                                nextEl,prevEl,
                                                // slidesPerView
}: Props) {

    // const defaultSlidesPerView = slidesPerView || 2;
    // const defaultSlidesPerView = 2;

    return (
        <>
            <Swiper
                spaceBetween={16}
                slidesPerView={2}
                autoplay={true}
                modules={[Autoplay,Navigation]}
                navigation={
                    nextEl && prevEl
                        ? {
                    nextEl: nextEl,
                    prevEl: prevEl,
                }
                : false
            }
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 18
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 22
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 18
                    }
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
        </>

    );
}

