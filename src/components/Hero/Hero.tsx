"use client";
import { Button } from "@/components/ui/button";
import { LuArrowRight } from "react-icons/lu";
import { BsBook, BsCalendar, BsPencil, BsLaptop } from "react-icons/bs";
import { FaBrain } from "react-icons/fa6";
import { MdOutlineQuiz } from "react-icons/md";
import Demonstration from "./Demonstration";
import { useEffect, useState } from "react";
import IconBubble from "@/components/IconBubble";

const Hero: React.FC = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowIcons(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full md:pt-24  mb-24 overflow-hidden pb-24 ">
      <div className="gap-8 mb-16 px-8 sm:px-12 md:px-16 xl:px-[8%] 2xl:px-[20%]">
        <div className="flex flex-col gap-8 w-full md:items-center md:text-center py-12 rounded-2xl backdrop-blur-sm relative">
          {showIcons && (
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-3">
              {/* Top row */}
              <div className="relative col-start-1">
                <IconBubble
                  position="top-[-5%] left-[0%]"
                  icon={BsPencil}
                  color="text-green-500"
                />
              </div>
              {/* <div className="relative col-start-2">
                <IconBubble
                  position="top-[-5%] "
                  icon={BsLightbulb}
                  color="text-yellow-500"
                />
              </div>
              <div className="relative col-start-3">
                <IconBubble
                  position="top-[-5%]"
                  icon={MdOutlineQuiz}
                  color="text-orange-500"
                />
              </div> */}
              <div className="relative col-start-4">
                <IconBubble
                  position="top-[-5%] right-0"
                  icon={BsBook}
                  color="text-blue-500"
                />
              </div>

              {/* Middle row */}
              <div className="relative col-start-1 row-start-2">
                <IconBubble
                  position="left-[-5%] top-[25%]"
                  icon={MdOutlineQuiz}
                  color="text-blue-500"
                />
              </div>
              <div className="relative col-start-4 row-start-2">
                <IconBubble
                  position="right-[-5%] top-[25%]"
                  icon={FaBrain}
                  color="text-pink-500"
                />
              </div>

              {/* Bottom row */}
              <div className="relative col-start-1 row-start-3">
                <IconBubble
                  position="bottom-[50%] left-[50%]"
                  icon={BsLaptop}
                  color="text-indigo-500"
                />
              </div>
              <div className="relative col-start-4 row-start-3">
                <IconBubble
                  position="bottom-[50%] right-[50%]"
                  icon={BsCalendar}
                  color="text-purple-500"
                />
              </div>
            </div>
          )}
          <div className="z-0">
            <h1 className="text-5xl md:text-7xl z-50 bg-white font-bold text-header-text max-w-2xl bg-clip-text">
              Unlock your true learning potential.
            </h1>
          </div>

          <p className="text-lg text-header-text md:text-xl lg:text-2xl xl:text-2xl max-w-2xl">
            Master any subject effortlessly with courses, notes, and smart
            learning tools – all in one place!
          </p>

          <div className="flex flex-wrap justify-center gap-2 items-center text-sm text-gray-600">
            <span className="flex items-center">
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              Trusted by me.
            </span>
            <span className="hidden md:block">•</span>
            <span>7-day free trial</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              className="group hover:-translate-y-1 transform transition-all w-42 duration-300 font-bold text-lg py-1"
            >
              Try it now
              <LuArrowRight className="ml-1 group-hover:translate-x-1 transform transition-all duration-300" />
            </Button>

            <Button
              variant="outline"
              className="group hover:-translate-y-1 transform transition-all w-42 duration-300 font-bold text-lg py-1"
            >
              Watch demo
              <svg
                className="ml-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <Demonstration />
      <div className="absolute bottom-0 left-0 w-[110%] h-32 bg-gradient-to-b from-transparent to-neutral-50 pointer-events-none z-10 "></div>
    </section>
  );
};

export default Hero;
