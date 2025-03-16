// Master Any Subject with AI-Powered Learning
"use client";
import { Button } from "@/components/ui/button";
import { LuArrowRight } from "react-icons/lu";

const Hero: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full md:pt-24">
      <div className="flex flex-col gap-8 w-full mx-auto justify-start py-12">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Unlock your true
          <br className="block sm:hidden md:block" /> learning potential.
        </h1>
        <p className="text-lg md:text-xl">
          Master any subject effortlessly with courses, notes, and smart
          <br className="hidden md:block" />
          learning tools – all in one place!
        </p>
        <Button
          variant="cta"
          className="group hover:-translate-y-1 transform transition-all w-42 duration-300 font-bold text-lg py-1"
        >
          Try it now
          <LuArrowRight className="ml-1 group-hover:translate-x-1 transform transition-all duration-300" />
        </Button>
      </div>
      <div className="flex w-full justify-center rounded-md">
        {/* <Lotie /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="500"
          zoomAndPan="magnify"
          viewBox="0 0 150 149.999998"
          height="500"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
          color="#0000FF"
        >
          <defs>
            <g />
            <clipPath id="d550435fb2">
              <path
                d="M 2.066406 2.066406 L 147.933594 2.066406 L 147.933594 147.933594 L 2.066406 147.933594 Z M 2.066406 2.066406 "
                clipRule="nonzero"
              />
            </clipPath>
            <clipPath id="08eddb29a2">
              <path
                d="M 8.816406 2.066406 L 141.183594 2.066406 C 144.914062 2.066406 147.933594 5.085938 147.933594 8.816406 L 147.933594 141.183594 C 147.933594 144.914062 144.914062 147.933594 141.183594 147.933594 L 8.816406 147.933594 C 5.085938 147.933594 2.066406 144.914062 2.066406 141.183594 L 2.066406 8.816406 C 2.066406 5.085938 5.085938 2.066406 8.816406 2.066406 Z M 8.816406 2.066406 "
                clipRule="nonzero"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#d550435fb2)">
            <g clipPath="url(#08eddb29a2)">
              <path
                fill="#000000"
                d="M 2.066406 2.066406 L 147.933594 2.066406 L 147.933594 147.933594 L 2.066406 147.933594 Z M 2.066406 2.066406 "
                fillOpacity="1"
                fillRule="nonzero"
              />
            </g>
          </g>
          <g fill="#ffffff" fillOpacity="1">
            <g transform="translate(20.643752, 101.999996)">
              <g>
                <path d="M 56.140625 -53.390625 L 56.140625 0 L 43.703125 0 L 20.140625 -28.453125 L 20.140625 0 L 5.34375 0 L 5.34375 -53.390625 L 17.78125 -53.390625 L 41.34375 -24.9375 L 41.34375 -53.390625 Z M 56.140625 -53.390625 " />
              </g>
            </g>
          </g>
          <g fill="#ffffff" fillOpacity="1">
            <g transform="translate(82.123309, 101.999996)">
              <g>
                <path d="M 30.890625 0 L 23.5 -10.828125 L 15.5625 0 L -0.15625 0 L 15.5625 -20.671875 L 0.3125 -41.34375 L 16.625 -41.34375 L 23.953125 -30.890625 L 31.578125 -41.34375 L 46.90625 -41.34375 L 31.65625 -21.203125 L 47.453125 0 Z M 30.890625 0 " />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
