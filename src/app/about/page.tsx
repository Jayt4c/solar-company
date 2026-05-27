import Features from "@/src/components/home/Features";
import Video from "@/src/components/home/Video";
import Pricing from "@/src/components/home/Pricing";
import Sponsor from "@/src/components/home/Sponsor";
import Testimonial from "@/src/components/home/Testimonial";
import AboutUs from "@/src/components/home/AboutUs";
import SectionTop from "@/src/components/shared/SectionTop";

export default function AboutPage() {
  return (
    <>
      <SectionTop title={"About Us"} />
      <div className="pt-120">
        <AboutUs />
      </div>
      <Features />
      <Video />
      <Testimonial />
      <Sponsor />
      <Pricing classes="pt-120" />
    </>
  );
}