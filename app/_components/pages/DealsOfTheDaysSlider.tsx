"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import ProductDealsCard from "@/app/_components/product/product-card/ProductDealsCard";

interface Props{
    sliderData:Array<ProductDealsCard>;
}
export default function DealsOfTheDaysSlider({sliderData}:Props) {
       return (
        <Swiper
            spaceBetween={16}
            slidesPerView={1}
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
                    spaceBetween: 22
                },
            }}
        >
            {
                sliderData.map((slideData, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <ProductDealsCard data={slideData} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}

