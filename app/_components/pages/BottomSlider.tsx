"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import ProductVerticalList from "@/app/_components/product/product-vertical-list/ProductVerticalList";
import {TopSellingMock} from "@/app/_components/mock/TopSelling";
import {TrendingProductsMock} from "@/app/_components/mock/TrendingProducts";
import {RecentlyAddedMock} from "@/app/_components/mock/RecentlyAdded";
import {topRatedMock} from "@/app/_components/mock/TopRated";

export default function BottomSlider() {
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
                <ProductVerticalList title={'Top Selling'} data={TopSellingMock}/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductVerticalList title={'Trending Products'} data={TrendingProductsMock}/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductVerticalList title={'Recently Added'} data={RecentlyAddedMock}/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductVerticalList title={'Top Rated'} data={topRatedMock}/>
            </SwiperSlide>

        </Swiper>
    );
}

