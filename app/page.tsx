import Section from "@/app/_components/layouts/section/Section";
import Banner from "@/app/_components/common/ui/Banner";
import FeaturedCategories from "@/app/_components/pages/FeaturedCategories";
import MiniProductSlider from "@/app/_components/pages/MiniProductSlider";

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
      </>
  );
}
