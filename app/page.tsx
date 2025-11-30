import Section from "@/app/_components/layouts/section/Section";
import Banner from "@/app/_components/common/ui/Banner";
import FeaturedCategories from "@/app/_components/pages/FeaturedCategories";
import MiniProductSlider from "@/app/_components/pages/MiniProductSlider";
import {ChevronRight} from "lucide-react";
import DealsOfTheDaysSlider from "@/app/_components/pages/DealsOfTheDaysSlider";
import Link from "next/link";
import ProductSection from "@/app/_components/product/product-section/ProductSection";
import {getDealsOfTheDay, getProductsByFilter} from "@/app/_lib/data-service";
import BottomSlider from "@/app/_components/pages/BottomSlider";

export default async function Page() {
    const [popularProducts, popularFruits,bestSeller,dealsOfTheDay] = await Promise.all([
        getProductsByFilter('is_popular'),
        getProductsByFilter('is_popular_fruit'),
        getProductsByFilter('is_best_seller'),
        getDealsOfTheDay()
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
                  navLeftClass="swiper-nav-left-product"
                  navRightClass="swiper-nav-right-product"
                  showNavigation={true}
                  slidesPerView={4}
                  />
           </Section>
          <Section>
              <ProductSection
                  title="popular fruit"
                  products={popularFruits}
                  navLeftClass="swiper-nav-left-friuts"
                  navRightClass="swiper-nav-right-friuts"
                  showNavigation={true}
                  slidesPerView={5}
                  />

          </Section>
          <Section>
              <div className="flex justify-between mb-[50px]">
                  <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">Best
                      Sellers </h2>
              </div>
              <div className="flex flex-col md:flex-row gap-[24px]">
                  <div
                      className="bg-[url('/images/bg-leaf.png')] bg-no-repeat bg-bottom bg-[#3BB77E] rounded-[10px] shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] p-8 xl:p-12 pt-[38px] flex flex-col justify-between xl:max-w-[370px] xl:self-stretch">
                      <h3 className="text-heading2 text-blue-950">Bring nature into your home</h3>
                      <a href="#"
                         className="mt-6 pl-[15px] pr-2.5 py-2 bg-yellow-100 hover:bg-green-200 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5">
                          <div className="text-xsmall text-white">Shop now</div>
                          <i className="icon-arrow-small-right text-[24px]"></i>
                      </a>
                  </div>
                  <ProductSection
                      products={bestSeller}
                      showNavigation={false}
                      slidesPerView={3}
                  />
              </div>
          </Section>
          <Section>
              <div className="flex justify-between items-center mb-[50px]">
                  <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">Deals
                      Of The Days</h2>
                  <Link className="flex items-center" href="#">All Deals <i></i><ChevronRight className="w-5 h-5" /></Link>
              </div>
              <DealsOfTheDaysSlider sliderData={dealsOfTheDay}/>
          </Section>

          <Section>
              <BottomSlider/>
          </Section>
      </>
  );
}
