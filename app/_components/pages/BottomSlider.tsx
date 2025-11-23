"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import ProductVerticalList from "@/app/_components/product/product-vertical-list/ProductVerticalList";
import {ProductType} from "@/components/type/ProductType";

interface BottomSliderProps {
    topSelling:ProductType[];
    trending:ProductType[];
    recently:ProductType[];
    topRated:ProductType[];
}

export default function BottomSlider({topSelling,trending,recently,topRated}:BottomSliderProps) {
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
                    spaceBetween: 18
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 22
                },
            }}
        >
            <SwiperSlide>
                <ProductVerticalList title={'Top Selling'} data={topSelling}/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductVerticalList title={'Trending Products'} data={trending}/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductVerticalList title={'Recently Added'} data={recently}/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductVerticalList title={'Top Rated'} data={topRated}/>
            </SwiperSlide>

        </Swiper>
    );
}

