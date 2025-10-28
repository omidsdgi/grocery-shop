import Section from "@/app/_components/layouts/section/Section";
import Banner from "@/app/_components/common/ui/Banner";

export default function Page() {
  return (
      <>
      <Section>
          <Banner title={"Don&apost;t miss amazing  grocery deals"}
                  subtitle={"Sign up for the daily newsletter"}
                  bgImg={'/images/banner_bg.png'}
                  image={'/images/fresh-apples.png'} />
      </Section>
      </>
  );
}
