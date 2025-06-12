import { lazy } from "react";
import ExperiencesMaterials from "../experiences-materials/ExperiencesMaterials";
import Header from "../header/Header";
import HeroBanner from "../hero-section/HeroBanner";

import WhyChooseUs from "../why-choose-us/WhyChooseUs";

const BestSellingProducts = lazy(
  () => import("../best-selling-products/BestSellingProducts")
);

const Testimonials = lazy(() => import("../testimonials/Testimonials"));

function Landing() {
  return (
    <>
      <div className='min-h-screen md:min-h-[67.5rem] bg-[url(/assets/hero-banner.jpg)] bg-cover bg-center relative'>
        <Header />
        <HeroBanner />
        <img
          src='/assets/hover.png'
          alt='Hero Banner'
          className='hidden xl:block absolute left-0 w-max h-max object-cover  translate-x-[260%]'
        />
        <div className='absolute bottom-0 left-0 right-0 p-10 bg-linear-to-b from-[#ffffff00] from-0% to-white to-100%' />
      </div>

      <WhyChooseUs />
      <BestSellingProducts />
      <ExperiencesMaterials />
      <Testimonials />
    </>
  );
}

export default Landing;
