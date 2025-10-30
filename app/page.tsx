import Section from "@/app/_components/layouts/section/Section";
import Banner from "@/app/_components/common/ui/Banner";
import FeaturedCategories from "@/app/_components/pages/FeaturedCategories";
import MiniProductSlider from "@/app/_components/pages/MiniProductSlider";
import SimpleProductSlider from "@/app/_components/product/simple-product-slider/SimpleProductSlider";
import {popularProducts} from "@/app/_components/mock/papularProducts";
import {popularFruits} from "@/app/_components/mock/popularFruits";
import {ChevronLeft, ChevronRight} from "lucide-react";

export default function Page() {
  return (
      <>
      <Section>
          <Banner title={"Don&apost;t miss amazing  grocery deals"}
                  subtitle={"Sign up for the daily newsletter"}
                  bgImage={'/images/banner_bg.png'}
                  image={'/images/fresh-apples.png'} />
      </Section>
          <Section>
              <FeaturedCategories/>
          </Section>
          <Section>
              <MiniProductSlider/>
          </Section>
          <Section>
              <div className="flex justify-between mb-[50px]">
                  <h2 className="text-heading3 text-blue-300">Popular Products</h2>
                  <div className="flex items-center gap-3">
                      <i className="swiper-nav-left  cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white text-[24px]"><ChevronLeft className="w-5 h-5" /></i>
                      <i className="swiper-nav-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white text-[24px]"><ChevronRight className="w-5 h-5" /></i>
                  </div>
              </div>
              <SimpleProductSlider sliderData={popularProducts} nextEl={'.swiper-nav-right'}
                                   prevEl={'.swiper-nav-left'}/>
          </Section>
          <Section>
              <div className="flex justify-between mb-[50px]">
                  <h2 className="text-heading3 text-blue-300">Popular Fruits</h2>
                  <div className="flex items-center gap-3">
                      <i className="swiper-nav-left2  cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white text-[24px]"><ChevronLeft className="w-5 h-5" /></i>
                      <i className="swiper-nav-right2 cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white text-[24px]"><ChevronRight className="w-5 h-5" /></i>
                  </div>
              </div>
              <SimpleProductSlider sliderData={popularFruits} nextEl={'.swiper-nav-right2'} prevEl={'.swiper-nav-left2'}/>
          </Section>
      </>
  );
}
