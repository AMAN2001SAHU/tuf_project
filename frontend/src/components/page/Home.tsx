import { Banner } from '../Banner';
import { FeaturesTable } from '../FeaturesTable';
import { Footer } from '../Footer';
import { HeroSection } from '../HeroSection';
import { Navbar } from '../Navbar';
import { PriceTable } from '../PriceTable';

export const Home = () => {
  return (
    <div className="bg-grey">
      <div>
        <Banner />
      </div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="px-16">
        <HeroSection />
      </div>
      <div className="text-white text-5xl text-center font-bold mt-20">
        Our Plans
      </div>
      <div className="px-16 mt-20">
        <PriceTable />
      </div>
      <div className="text-white text-5xl text-center font-bold mt-20">
        Upcoming V2 Features
      </div>
      <div className="px-16 mt-20">
        <FeaturesTable />
      </div>
      <div className="px-16 pb-10">
        <div className="flex justify-center items-center flex-col bg-red rounded-xl h-60 p-20">
          <div className="text-white text-4xl font-bold m-2">
            Your Path to Mastry
          </div>
          <div className="text-white text-lg">
            Elevate Your Learning Journey with TUF+ Course
          </div>
          <div className="m-2">
            <button className="flex items-center rounded-lg px-14 py-2.5 border-2 border-red bg-white">
              <span className="text-[16px] text-red font-medium">Buy Now</span>
            </button>
          </div>
        </div>
      </div>
      <div className="px-16">
        <Footer />
      </div>
    </div>
  );
};
