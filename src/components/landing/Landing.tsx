import BestSellingProducts from "../best-selling-products/BestSellingProducts";
import ExperiencesMaterials from "../experiences-materials/ExperiencesMaterials";
import Header from "../header/Header";
import HeroBanner from "../hero-section/HeroBanner";
import Testimonials from "../testimonials/Testimonials";
import WhyChooseUs from "../why-choose-us/WhyChooseUs";

function Landing() {
  return (
    <>
      <div className='min-h-screen md:min-h-[67.5rem] bg-[url(/assets/hero-banner.jpg)] bg-cover bg-center relative'>
        <Header />
        <HeroBanner />
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
