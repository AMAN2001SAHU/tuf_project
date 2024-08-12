// import { Button } from './Button';
// import { CTAbtn } from './CTAbtn';
import hero from '../assets/hero_image.png';

export const HeroSection = () => {
  return (
    <div className=" max-w-8xl lg:flex font-dmSans mx-auto hidden justify-between items-center pt-24 relative pb-20 md:pt-16 md:pb-16 sm:px-6">
      <div className=" text-white flex flex-col">
        <p className="text-red text-[18px] font-semibold">
          YOUR PATH TO MASTERY
        </p>
        <p className="text-5xl font-bold mt-6 tracking-wide">
          Elevate Your Learning
        </p>
        <p className="text-5xl font-bold">Journey with TUF+ Course</p>
        <p className="text-[18px] mt-6">
          Curated learning, approach-wise solutions, personalized roadmaps,
        </p>
        <p className="text-[18px]">expert doubt assistance, and more!</p>
        <div className="mt-10 gap-x-4 flex flex-row items-center">
          <div>
            {/* <Button title="Explore Course" /> */}
            <button className="flex items-center gap-x-2 border-2 rounded-lg px-8 py-2.5 border-red">
              <span className="text-[16px] text-red font-medium">
                Explore Course
              </span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 1L6.5 6L11.5 1M1.5 7L6.5 12L11.5 7"
                  stroke="#DC2626"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            {/* <CTAbtn title="Buy Now" /> */}
            <button className="flex items-center rounded-lg px-14 py-2.5 border-2 border-red bg-red">
              <span className="text-[16px] text-white font-medium">
                Buy Now
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="video">
        <div className="w-[640px] h-[360px]">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};
