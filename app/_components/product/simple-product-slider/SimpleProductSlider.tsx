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
                                                slidesPerView
}: Props) {

    const defaultSlidesPerView = slidesPerView || 2;

    return (
        <>
            <Swiper
                spaceBetween={16}
                slidesPerView={defaultSlidesPerView}
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
                        slidesPerView: slidesPerView ? Math.min(slidesPerView, 3) : 3,
                        spaceBetween: 18
                    },
                    1024: {
                        slidesPerView:  slidesPerView ? Math.min(slidesPerView, 4) : 4,
                        spaceBetween: 22
                    },
                    1280: {
                        slidesPerView: slidesPerView ? Math.min(slidesPerView, 5) : 5,
                        spaceBetween: 24
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

