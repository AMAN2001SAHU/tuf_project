import { GreenTick } from './GreenTick';
import { RedTick } from './RedTick';

export const Price = () => {
  return (
    <div id="pricing" className="bg-[#F5F5F5] dark:bg-[#0F0F0F]">
      <div className="relative z-[10]">
        <section className="text-gray-700 font-dmSans overflow-hidden border-t border-gray-200 dark:border-zinc-800 dark:border-none max-w-8xl mx-auto ">
          <div className="container px-5 py-24 mx-auto flex-wrap lg:flex hidden">
            <div className="lg:w-1/3  hidden lg:block bg-white dark:bg-[#191919]">
              <div className="border-b dark:border-zinc-800 h-[97px] flex flex-col justify-center"></div>
              <div className="px-6 h-[239px] flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-[#E9E9E9] leading-none mb-4 mt-2">
                  Compare plans
                </h2>
                <span className="text-sm text-gray-600 dark:text-[#909090] ">
                  What we offer?
                </span>
              </div>
              <div className="mt-px  border-gray-300 dark:border-zinc-800 overflow-hidden">
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>100+ Beginner Problems</span>
                  <span className="text-[12px] text-zinc-500">
                    Perfect for starting out with zero knowledge.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t px-6 flex flex-col items-start justify-start">
                  <span>300 Curated Problems</span>
                  <span className="text-[12px] tracking-tighter text-zinc-500">
                    Sorted by topic and difficulty for mastering DSA.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Topic-Based Contests</span>
                  <span className="text-[12px] text-zinc-500">
                    Test your knowledge after each topic.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Mixed Topic Contests</span>
                  <span className="text-[12px] text-zinc-500">
                    Comprehensive challenges at course end.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Personalized Roadmap</span>
                  <span className="text-[12px] text-zinc-500">
                    Daywise plan tailored to your entered timeline.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Customizable Schedule</span>
                  <span className="text-[12px] text-zinc-500">
                    Adapt your roadmap to your needs.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Customizable Schedule</span>
                  <span className="text-[12px] text-zinc-500">
                    Adapt your roadmap to your needs.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Video Solutions</span>
                  <span className="text-[12px] tracking-tight text-zinc-500">
                    Step-by-step individual videos for brute to optimal.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Detailed Editorials</span>
                  <span className="text-[12px] text-zinc-500">
                    High-quality image explanations for clarity.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Guess the Output</span>
                  <span className="text-[12px] text-zinc-500">
                    Enhance problem understanding.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Practice Portal</span>
                  <span className="text-[12px] tracking-tighter text-zinc-500">
                    Access to all problems including premium ones outside.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>AI-Assisted Doubt Portal</span>
                  <span className="text-[12px] text-zinc-500">
                    Get instant help with our trained model.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Code Review</span>
                  <span className="text-[12px] text-zinc-500">
                    Improve your code to industry standards.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Complexity Analysis</span>
                  <span className="text-[12px] text-zinc-500">
                    Evaluate time and space efficiency.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Real-Life Examples</span>
                  <span className="text-[12px] text-zinc-500">
                    Practical applications for every problem
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Rich Text Editor</span>
                  <span className="text-[12px] text-zinc-500">
                    Save notes in your preferred style.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Weekly Sessions</span>
                  <span className="text-[12px] text-zinc-500">
                    Meet with Striver and other experts.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Progress Tracking</span>
                  <span className="text-[12px] text-zinc-500">
                    Monitor your advancement.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Leaderboard</span>
                  <span className="text-[12px] text-zinc-500">
                    Compete with others or opt-out.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Completion Certificate</span>
                  <span className="text-[12px] text-zinc-500">
                    Showcase your achievement.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Exclusive Community</span>
                  <span className="text-[12px] text-zinc-500">
                    Access to TUF+ discussions and Discord.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Affiliate Program</span>
                  <span className="text-[12px] text-zinc-500">
                    Earn more than what you paid by sharing.
                  </span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Multi-Language Support</span>
                  <span className="text-[12px] text-zinc-500">
                    C++, Java, Python, JavaScript.
                  </span>
                </div>
                <p className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex items-center justify-start">
                  Validity
                </p>
              </div>
            </div>
            <div className="flex lg:w-2/3 w-full flex-wrap border border-gray-300 dark:border-zinc-800 border-t-0 border-b-0 border-r-0">
              <div className="lg:w-1/2 lg:mt-px w-full mb-10 lg:mb-0  border-gray-300 dark:border-zinc-800 dark:bg-[#191919]  bg-white">
                <div className="border-b dark:border-zinc-800 h-24 flex flex-col items-center justify-center">
                  <p className="text-2xl font-semibold dark:text-[#E9E9E9]">
                    Sprint
                  </p>
                </div>
                <div className="px-2 text-center h-60 flex flex-col items-center justify-center">
                  <div className="flex items-end gap-x-2">
                    <h2 className="text-5xl text-gray-900 dark:text-[#E9E9E9]  font-bold leading-none mb-4 mt-2">
                      ₹ 5699
                    </h2>
                    <h2 className="text-2xl text-[#858BA0] dark:text-[#909090]  font-bold leading-none mb-4 mt-2 line-through">
                      ₹ 6499
                    </h2>
                  </div>
                  <div className="w-full bg-green-200 text-green-800 px-3 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold">
                      Special Offer: ₹3704.35
                    </span>
                    <div className="mt-1 text-xs">
                      Use coupon: <span className="font-bold">TUFPLUS</span>
                    </div>
                  </div>
                  <button className="flex justify-center items-center gap-x-2 border-2  rounded-md text-center py-2.5 w-4/5  border-red-600 mt-2 ">
                    <span className="text-[16px] text-red-600 font-semibold">
                      Start Your Journey{' '}
                    </span>
                  </button>
                </div>
                <p className="text-center border-t dark:border-zinc-800 h-[75px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[75px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[75px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[75px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[75px] py-4 flex items-center justify-center">
                  <RedTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[75px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="20" rx="10" fill="#D41F30"></rect>
                    <path
                      d="M13.1823 13.1823C13.3775 12.987 13.3775 12.6704 13.1823 12.4752L10.7077 10.0006L13.183 7.52543C13.3782 7.33017 13.3782 7.01359 13.183 6.81832C12.9877 6.62306 12.6711 6.62306 12.4759 6.81832L10.0006 9.29354L7.52543 6.81832C7.33017 6.62306 7.01358 6.62306 6.81832 6.81832C6.62306 7.01358 6.62306 7.33017 6.81832 7.52543L9.29354 10.0006L6.819 12.4752C6.62374 12.6704 6.62374 12.987 6.819 13.1823C7.01426 13.3775 7.33085 13.3775 7.52611 13.1823L10.0006 10.7077L12.4752 13.1823C12.6704 13.3775 12.987 13.3775 13.1823 13.1823Z"
                      fill="white"
                    ></path>
                  </svg>
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[75px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[75px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[75px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 dark:text-[#E9E9E9] h-18 py-4 flex items-center font-semibold justify-center">
                  12 Months
                </p>
              </div>
              <div className="lg:w-1/2 lg:-mt-px w-full mb-10 lg:mb-0 border-2  border-green-500  dark:bg-[#191919] relative bg-white">
                <span className="bg-green-200  px-3 py-1 tracking-widest text-xs absolute right-0 top-[35px] rounded-bl-xl rounded-tl-xl text-green-600">
                  POPULAR
                </span>
                <div className="border-b dark:border-zinc-800  h-24 flex flex-col items-center justify-center ">
                  <p className="text-2xl font-semibold dark:text-[#E9E9E9]">
                    Pinnacle
                  </p>
                </div>
                <div className="px-2 text-center h-60 flex flex-col items-center justify-center">
                  <div className="flex items-end gap-x-2">
                    <h2 className="text-5xl text-gray-900 dark:text-[#E9E9E9]  font-bold leading-none mb-4 mt-2">
                      ₹ 7599
                    </h2>
                    <h2 className="text-2xl text-[#858BA0] dark:text-[#909090]  font-bold leading-none mb-4 mt-2 line-through">
                      ₹ 9999
                    </h2>
                  </div>
                  <div className="w-full bg-green-200 text-green-800 px-3 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold">
                      Special Offer: ₹4939.35
                    </span>
                    <div className="mt-1 text-xs">
                      Use coupon: <span className="font-bold">TUFPLUS</span>
                    </div>
                  </div>
                  <button className="flex justify-center items-center gap-x-2 border-2 rounded-md text-center py-2.5 w-4/5 bg-red-600  border-red-600 mt-2 ">
                    <span className="text-[16px] text-white font-semibold">
                      Start Your Journey
                    </span>
                  </button>
                </div>
                <p className="text-center border-t dark:border-zinc-800 h-[75px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[75px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[75px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[75px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[75px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[75px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[75px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[74.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[75px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[75px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 dark:text-[#E9E9E9] h-18 py-4 flex items-center font-semibold justify-center">
                  Lifetime
                </p>
              </div>
            </div>
          </div>
          <div className="block lg:hidden">
            <div className="mt-20 w-full">
              <div className="swiper swiper-initialized swiper-horizontal mySwiper swiper-backface-hidden">
                <div
                  className="swiper-wrapper"
                  // style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px); transition-delay: 0ms;"
                >
                  <div
                    className="swiper-slide swiper-slide-active"
                    data-swiper-slide-index="1"
                    // style="width: 733px; margin-right: 100px;"
                  >
                    <div className="w-full h-full bg-white dark:bg-[#ffffff08]  cursor-pointer group   px-6 py-8 rounded-xl ">
                      <p className="mb-4 font-bold text-xl text-zinc-800 dark:text-white">
                        Sprint
                      </p>
                      <div className="flex items-center gap-x-2">
                        <span className="text-2xl text-zinc-800 dark:text-white font-bold">
                          {' '}
                          ₹ 5699
                        </span>
                        <span className=" text-[#858BA0] dark:text-[#909090]  font-bold leading-none line-through">
                          ₹ 6499
                        </span>
                      </div>
                      <span className="mt-4 font-medium text-zinc-800 dark:text-white">
                        Validity : 12 Months{' '}
                      </span>
                      <div className="h-0.5 w-full bg-gray-200 dark:bg-dark_40 mt-4"></div>
                      <div className=" mt-4 flex flex-col items-start gap-y-4">
                        <div className="flex space-x-2 items-start">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            100+ Beginner Problems
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            300 Curated Problems
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Topic-Based Contests
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Mixed Topic Contests
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Personalized Roadmap
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Customizable Schedule
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Video Solutions
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Detailed Editorials
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Guess the Output
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Practice Portal
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="#D41F30"
                            ></rect>
                            <path
                              d="M13.1823 13.1823C13.3775 12.987 13.3775 12.6704 13.1823 12.4752L10.7077 10.0006L13.183 7.52543C13.3782 7.33017 13.3782 7.01359 13.183 6.81832C12.9877 6.62306 12.6711 6.62306 12.4759 6.81832L10.0006 9.29354L7.52543 6.81832C7.33017 6.62306 7.01358 6.62306 6.81832 6.81832C6.62306 7.01358 6.62306 7.33017 6.81832 7.52543L9.29354 10.0006L6.819 12.4752C6.62374 12.6704 6.62374 12.987 6.819 13.1823C7.01426 13.3775 7.33085 13.3775 7.52611 13.1823L10.0006 10.7077L12.4752 13.1823C12.6704 13.3775 12.987 13.3775 13.1823 13.1823Z"
                              fill="white"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white ">
                            AI-Assisted Doubt Portal
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Code Review
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Complexity Analysis
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Real-Life Examples
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Rich Text Editor
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="#D41F30"
                            ></rect>
                            <path
                              d="M13.1823 13.1823C13.3775 12.987 13.3775 12.6704 13.1823 12.4752L10.7077 10.0006L13.183 7.52543C13.3782 7.33017 13.3782 7.01359 13.183 6.81832C12.9877 6.62306 12.6711 6.62306 12.4759 6.81832L10.0006 9.29354L7.52543 6.81832C7.33017 6.62306 7.01358 6.62306 6.81832 6.81832C6.62306 7.01358 6.62306 7.33017 6.81832 7.52543L9.29354 10.0006L6.819 12.4752C6.62374 12.6704 6.62374 12.987 6.819 13.1823C7.01426 13.3775 7.33085 13.3775 7.52611 13.1823L10.0006 10.7077L12.4752 13.1823C12.6704 13.3775 12.987 13.3775 13.1823 13.1823Z"
                              fill="white"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white ">
                            Weekly Sessions
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Progress Tracking
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Leaderboard
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Completion Certificate
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Exclusive Community
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Affiliate Program
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Multi-Language Support
                          </span>
                        </div>
                      </div>
                      <button className="flex justify-center items-center gap-x-2 border-2  rounded-md text-center py-2.5 w-full  border-red-600 mt-6 ">
                        <span className="text-[16px] text-red-600 font-semibold">
                          Start Your Journey
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-next"
                    data-swiper-slide-index="0"
                    // style="width: 733px; margin-right: 100px;"
                  >
                    <div className="w-full h-full bg-white dark:bg-[#ffffff08] border border-green-600  cursor-pointer group   px-6 py-8 rounded-xl ">
                      <span className="bg-green-200 mr-[0.5px] px-3 py-1 tracking-widest text-xs absolute right-[1px] top-[1px] rounded-[11px] text-green-600">
                        POPULAR
                      </span>
                      <p className="mb-4 font-bold text-xl text-zinc-800 dark:text-white">
                        Pinnacle
                      </p>
                      <div className="flex items-center gap-x-2">
                        <span className="text-2xl font-bold text-zinc-800 dark:text-white">
                          ₹ 7599
                        </span>
                        <span className=" text-[#858BA0] dark:text-[#909090]  font-bold leading-none line-through">
                          ₹ 9999
                        </span>
                      </div>
                      <span className="mt-4 font-medium text-zinc-800 dark:text-white">
                        Validity : Lifetime{' '}
                      </span>
                      <div className="h-0.5 w-full bg-gray-200 dark:bg-dark_40 mt-4"></div>
                      <div className=" mt-4 flex flex-col items-start gap-y-4">
                        <div className="flex space-x-2 items-start">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            100+ Beginner Problems
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            300 Curated Problems
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Topic-Based Contests
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Mixed Topic Contests
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Personalized Roadmap
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Customizable Schedule
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Video Solutions
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Detailed Editorials
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Guess the Output
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Practice Portal
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white ">
                            AI-Assisted Doubt Portal
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Code Review
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Complexity Analysis
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Real-Life Examples
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Rich Text Editor
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white ">
                            Weekly Sessions
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Progress Tracking
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Leaderboard
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Completion Certificate
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Exclusive Community
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Affiliate Program
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.841 0.589553C9.90972 -0.196518 8.54732 -0.196517 7.616 0.589553L6.76784 1.30544C6.372 1.63954 5.88217 1.84245 5.36602 1.8861L4.26007 1.97963C3.04569 2.08233 2.08233 3.04569 1.97963 4.26007L1.8861 5.36602C1.84245 5.88217 1.63954 6.372 1.30544 6.76785L0.589553 7.616C-0.196518 8.54732 -0.196517 9.90972 0.589553 10.841L1.30544 11.6892C1.63954 12.085 1.84245 12.5749 1.8861 13.091L1.97963 14.197C2.08233 15.4114 3.04569 16.3748 4.26007 16.4774L5.36602 16.5709C5.88217 16.6146 6.372 16.8175 6.76785 17.1516L7.616 17.8675C8.54732 18.6535 9.90972 18.6535 10.841 17.8675L11.6892 17.1516C12.085 16.8175 12.5749 16.6146 13.091 16.5709L14.197 16.4774C15.4114 16.3748 16.3748 15.4114 16.4774 14.197L16.5709 13.091C16.6146 12.5749 16.8175 12.085 17.1516 11.6892L17.8675 10.841C18.6535 9.90972 18.6535 8.54732 17.8675 7.616L17.1516 6.76784C16.8175 6.372 16.6146 5.88217 16.5709 5.36602L16.4774 4.26007C16.3748 3.04569 15.4114 2.08233 14.197 1.97963L13.091 1.8861C12.5749 1.84245 12.085 1.63954 11.6892 1.30544L10.841 0.589553ZM13.7745 7.52407C14.2139 7.08473 14.2139 6.37242 13.7745 5.93308C13.3353 5.49373 12.6229 5.49373 12.1835 5.93308L7.97905 10.1376L6.27455 8.43308C5.83522 7.99373 5.1229 7.99373 4.68357 8.43308C4.24422 8.87242 4.24422 9.58473 4.68357 10.0241L7.18357 12.524C7.6229 12.9634 8.33522 12.9634 8.77455 12.524L13.7745 7.52407Z"
                              fill="#1DA54F"
                            ></path>
                          </svg>
                          <span className="text-sm text-[#595959] dark:text-white font-medium">
                            Multi-Language Support
                          </span>
                        </div>
                      </div>
                      <button className="flex justify-center items-center gap-x-2 border-2  rounded-md text-center py-2.5 w-full  bg-red-600  border-red-600  mt-6 ">
                        <span className="text-[16px] text-white font-semibold">
                          Start Your Journey
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-center items-center mb-8">
              <button
                aria-label="Previos"
                className="p-2 rounded-full group hover:border-red-600 cursor-pointer hover:bg-red-600 border-2 border-red-600 dark:border-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-red-600 group-hover:text-light_50 group-hover:dark:text-light_50 dark:text-red-600"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </button>
              <button
                aria-label="Next"
                className="p-2 rounded-full group hover:border-red-600 cursor-pointer bg-red-600 border-2 border-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-light_50"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>
          <h1 className="md:text-[50px]  text-[26px] xs:text-[24px] text-center font-bold tracking-wide mt-2 dark:text-white">
            Upcoming V2 Features
          </h1>
          <div className="container px-5 py-24 mx-auto flex-wrap lg:flex hidden ">
            <div className="lg:w-1/3  hidden lg:block bg-white dark:bg-[#191919]">
              <div className="mt-px  border-gray-300 dark:border-zinc-800 overflow-hidden">
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Core Subjects + Quiz</span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t px-6 flex flex-col items-start justify-start">
                  <span>OOPS (Taught by Striver) + Quiz</span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>Resume Generator (Template)</span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>AI Video Summariser</span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>AI Common Doubts</span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>⁠SDE Sheet, 79 Sheet in Plus experience</span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>AI Problem Finder for Concepts</span>
                </div>
                <div className="text-gray-900 dark:text-[#E9E9E9] dark:border-zinc-800 h-18 py-4 border-t text-center px-6 flex flex-col items-start justify-start">
                  <span>⁠Custom test case generator</span>
                </div>
              </div>
            </div>
            <div className="flex lg:w-2/3 w-full flex-wrap border border-gray-300 dark:border-zinc-800 border-t-0 border-b-0 border-r-0">
              <div className="lg:w-1/2 lg:mt-px w-full mb-10 lg:mb-0  border-gray-300 dark:border-zinc-800 dark:bg-[#191919]  bg-white">
                <p className="text-center border-t dark:border-zinc-800 h-[56.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[56.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[56.5px] py-4 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="20" rx="10" fill="#D41F30"></rect>
                    <path
                      d="M13.1823 13.1823C13.3775 12.987 13.3775 12.6704 13.1823 12.4752L10.7077 10.0006L13.183 7.52543C13.3782 7.33017 13.3782 7.01359 13.183 6.81832C12.9877 6.62306 12.6711 6.62306 12.4759 6.81832L10.0006 9.29354L7.52543 6.81832C7.33017 6.62306 7.01358 6.62306 6.81832 6.81832C6.62306 7.01358 6.62306 7.33017 6.81832 7.52543L9.29354 10.0006L6.819 12.4752C6.62374 12.6704 6.62374 12.987 6.819 13.1823C7.01426 13.3775 7.33085 13.3775 7.52611 13.1823L10.0006 10.7077L12.4752 13.1823C12.6704 13.3775 12.987 13.3775 13.1823 13.1823Z"
                      fill="white"
                    ></path>
                  </svg>
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[56.5px] py-4 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="20" rx="10" fill="#D41F30"></rect>
                    <path
                      d="M13.1823 13.1823C13.3775 12.987 13.3775 12.6704 13.1823 12.4752L10.7077 10.0006L13.183 7.52543C13.3782 7.33017 13.3782 7.01359 13.183 6.81832C12.9877 6.62306 12.6711 6.62306 12.4759 6.81832L10.0006 9.29354L7.52543 6.81832C7.33017 6.62306 7.01358 6.62306 6.81832 6.81832C6.62306 7.01358 6.62306 7.33017 6.81832 7.52543L9.29354 10.0006L6.819 12.4752C6.62374 12.6704 6.62374 12.987 6.819 13.1823C7.01426 13.3775 7.33085 13.3775 7.52611 13.1823L10.0006 10.7077L12.4752 13.1823C12.6704 13.3775 12.987 13.3775 13.1823 13.1823Z"
                      fill="white"
                    ></path>
                  </svg>
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[56.5px] py-4 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="20" rx="10" fill="#D41F30"></rect>
                    <path
                      d="M13.1823 13.1823C13.3775 12.987 13.3775 12.6704 13.1823 12.4752L10.7077 10.0006L13.183 7.52543C13.3782 7.33017 13.3782 7.01359 13.183 6.81832C12.9877 6.62306 12.6711 6.62306 12.4759 6.81832L10.0006 9.29354L7.52543 6.81832C7.33017 6.62306 7.01358 6.62306 6.81832 6.81832C6.62306 7.01358 6.62306 7.33017 6.81832 7.52543L9.29354 10.0006L6.819 12.4752C6.62374 12.6704 6.62374 12.987 6.819 13.1823C7.01426 13.3775 7.33085 13.3775 7.52611 13.1823L10.0006 10.7077L12.4752 13.1823C12.6704 13.3775 12.987 13.3775 13.1823 13.1823Z"
                      fill="white"
                    ></path>
                  </svg>
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[56.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[56.5px] py-4 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="20" rx="10" fill="#D41F30"></rect>
                    <path
                      d="M13.1823 13.1823C13.3775 12.987 13.3775 12.6704 13.1823 12.4752L10.7077 10.0006L13.183 7.52543C13.3782 7.33017 13.3782 7.01359 13.183 6.81832C12.9877 6.62306 12.6711 6.62306 12.4759 6.81832L10.0006 9.29354L7.52543 6.81832C7.33017 6.62306 7.01358 6.62306 6.81832 6.81832C6.62306 7.01358 6.62306 7.33017 6.81832 7.52543L9.29354 10.0006L6.819 12.4752C6.62374 12.6704 6.62374 12.987 6.819 13.1823C7.01426 13.3775 7.33085 13.3775 7.52611 13.1823L10.0006 10.7077L12.4752 13.1823C12.6704 13.3775 12.987 13.3775 13.1823 13.1823Z"
                      fill="white"
                    ></path>
                  </svg>
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[56.5px] py-4 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="20" rx="10" fill="#D41F30"></rect>
                    <path
                      d="M13.1823 13.1823C13.3775 12.987 13.3775 12.6704 13.1823 12.4752L10.7077 10.0006L13.183 7.52543C13.3782 7.33017 13.3782 7.01359 13.183 6.81832C12.9877 6.62306 12.6711 6.62306 12.4759 6.81832L10.0006 9.29354L7.52543 6.81832C7.33017 6.62306 7.01358 6.62306 6.81832 6.81832C6.62306 7.01358 6.62306 7.33017 6.81832 7.52543L9.29354 10.0006L6.819 12.4752C6.62374 12.6704 6.62374 12.987 6.819 13.1823C7.01426 13.3775 7.33085 13.3775 7.52611 13.1823L10.0006 10.7077L12.4752 13.1823C12.6704 13.3775 12.987 13.3775 13.1823 13.1823Z"
                      fill="white"
                    ></path>
                  </svg>
                </p>
              </div>
              <div className="lg:w-1/2  w-full mb-10 lg:mb-0 border border-gray-300 dark:border-zinc-800 border-t-0 border-b-0 border-r-0  dark:bg-[#191919] relative bg-white">
                <p className="text-center border-t dark:border-zinc-800 h-[58px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[56.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[56.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[56.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[56.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[56.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[56.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
                <p className="text-center border-t dark:border-zinc-800 h-[56.5px] py-4 flex items-center justify-center">
                  <GreenTick />
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className=" dark:block hidden absolute  bottom-4 right-1/3 z-[-100] lg:w-72 w-0 lg:h-72 h-0 bg-[#D41F30] rounded-full opacity-40 blur-[120px] dark:opacity-20"></div>
      </div>
    </div>
  );
};
