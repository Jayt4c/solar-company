"use client";

import AboutUs from "@/src/components/home/AboutUs";
import AboutUsTwo from "@/src/components/home/AboutUsTwo";
import Blogs from "@/src/components/home/Blogs";
import Contact from "@/src/components/home/Contact";
import Features from "@/src/components/home/Features";
import HeroSlider from "@/src/components/home/HeroSlider";
import Newsletter from "@/src/components/home/Newsletter";
import Portfolio from "@/src/components/home/Portfolio";
import Question from "@/src/components/home/Question";
import Service from "@/src/components/home/Service";
import Sponsor from "@/src/components/home/Sponsor";
import Stats from "@/src/components/home/Stats";
import Testimonial from "@/src/components/home/Testimonial";
import Video from "@/src/components/home/Video";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <Service />
      <AboutUs />
      <AboutUsTwo />
      <Features />
      <Video classes="srex-section" />
      <Contact />
      <Portfolio />
      <Sponsor />
      <Question />
      <Newsletter />
      <Stats />
      <Testimonial />
      <Blogs />
    </>
  );
}