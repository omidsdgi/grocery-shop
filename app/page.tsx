import Section from "@/app/_components/layouts/section/Section";
import Banner from "@/app/_components/common/ui/Banner";
import FeaturedCategories from "@/app/_components/pages/FeaturedCategories";
import MiniProductSlider from "@/app/_components/pages/MiniProductSlider";
import BestSellerSlider from "@/app/_components/pages/BestSellerSlider";
import {BestSellers} from "@/app/_components/mock/BestSellers";
import {ChevronRight} from "lucide-react";
import DealsOfTheDaysSlider from "@/app/_components/pages/DealsOfTheDaysSlider";
import {DealsOfTheDaysMock} from "@/app/_components/mock/DealsOfTheDaysMock";
import Link from "next/link";
import BottomSlider from "@/app/_components/pages/BottomSlider";
import ProductSection from "@/app/_components/product/product-section/ProductSection";
import {getProductsByFilter} from "@/app/_lib/data-service";

export default async function Page() {
    const [popularProducts, popularFruits] = await Promise.all([
        getProductsByFilter('is_popular'),
        getProductsByFilter('is_popular_fruit'),
    ]);
  return (
      <>
      <Section>
          <Banner title={"Don't miss amazing  grocery deals"}
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
              <ProductSection
                  title="Popular Products"
                  products={popularProducts}
                  navLeftClass="swiper-nav-left"
                  navRightClass="swiper-nav-right"
                  />
           </Section>
          <Section>
              <ProductSection
                  title="popular fruit"
                  products={popularFruits}
                  navLeftClass="swiper-nav-left"
                  navRightClass="swiper-nav-right"
                  />

          </Section>
          <Section>
              <div className="flex justify-between mb-[50px]">
                  <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">Best
                      Sellers </h2>
              </div>
              <div className="flex gap-[24px]">
                  <div
                      className="bg-[url('/images/bg-leaf.png')] bg-no-repeat bg-bottom bg-[#3BB77E] rounded-[10px] shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] p-12 pt-[38px] self-stretch flex-col justify-between max-w-[370px]  xl:flex">
                      <h3 className="text-heading2 text-blue-950">Bring nature into your home</h3>
                      <a href="#"
                         className="mt-6 pl-[15px] pr-2.5 py-2 bg-yellow-100 hover:bg-green-200 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5">
                          <div className="text-xsmall text-white">Shop now</div>
                          <i className="icon-arrow-small-right text-[24px]"></i>
                      </a>
                  </div>
                      <BestSellerSlider sliderData={BestSellers}/>
                  </div>
          </Section>
          <Section>
              <div className="flex justify-between items-center mb-[50px]">
                  <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">Deals
                      Of The Days</h2>
                  <Link className="flex items-center" href="#">All Deals <i></i><ChevronRight className="w-5 h-5" /></Link>
              </div>
              <DealsOfTheDaysSlider sliderData={DealsOfTheDaysMock}/>
          </Section>

          <Section>
              <BottomSlider/>
          </Section>
      </>
  );
}
