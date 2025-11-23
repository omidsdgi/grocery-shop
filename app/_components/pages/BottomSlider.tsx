"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import ProductVerticalList from "@/app/_components/product/product-vertical-list/ProductVerticalList";
import {InView} from "react-intersection-observer";
import {useQuery} from "@tanstack/react-query";
import {getProductByType} from "@/app/_lib/data-service";

export default function BottomSlider() {
  const {data:threeData}=useQuery({
      queryKey:['bottomSlider','threeData'],
      queryFn:async ()=>{
          const [topSelling,trending,recently] = await Promise.all([
              getProductByType('topSelling', 3),
              getProductByType('trending', 3),
              getProductByType('recently', 3),
          ])
          return {topSelling, trending, recently};
      }
      })

      const {data:topRatedData,refetch} = useQuery ({
          queryKey:['bottomSlider', 'topRated'],
          queryFn: ()=>getProductByType('topRated', 3),
          enabled: false
  })

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
                {threeData?.topSelling &&
                <ProductVerticalList title={'Top Selling'} data={threeData.topSelling}/>
                }
            </SwiperSlide>
            <SwiperSlide>
                {threeData?.trending &&
                <ProductVerticalList title={'Trending Products'} data={threeData.trending}/>
                }
            </SwiperSlide>
            <SwiperSlide>
                {threeData?.recently &&
                <ProductVerticalList title={'Recently Added'} data={threeData.recently}/>
                }
            </SwiperSlide>
            <SwiperSlide>

                <InView as='div' triggerOnce onChange={(inView)=>inView && refetch()}>
                    {topRatedData &&
                <ProductVerticalList title={'Top Rated'} data={topRatedData}/>
                    }
                </InView>
            </SwiperSlide>
        </Swiper>
    );
}

