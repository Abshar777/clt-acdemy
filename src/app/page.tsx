import Hero from "@/components/page-sections/home/hero";
import Image from "next/image";
import Goals from "@/components/page-sections/home/goals";
import Jorney from "@/components/page-sections/home/jorney";
import Service from "@/components/page-sections/home/service";
import Proccess from "@/components/page-sections/home/proccess";
import Cta from "@/components/page-sections/home/cta";
import Gallery from "@/components/page-sections/home/gallery";
import Faq from "@/components/page-sections/home/faq";
import Testimonials from "@/components/page-sections/home/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Goals />
      <Jorney />
      <Service />
      <Proccess />
      <Cta />
      <Gallery />
      <Faq />
      <Testimonials />
    </>
  );
}
