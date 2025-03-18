// Master Any Subject with AI-Powered Learning
"use client";
import { Button } from "@/components/ui/button";
import { LuArrowRight } from "react-icons/lu";
import { Iphone15Pro } from "./IphoneMoc";

const Hero: React.FC = () => {
  return (
    <section className="relative grid grid-cols-1 xl:grid-cols-2 gap-8 w-full md:pt-24">
      {/* <FloatingIcons /> */}
      <div className="flex flex-col gap-8 w-full mx-auto md:items-center md:text-center xl:text-left xl:items-start py-12">
        <h1 className="text-5xl md:text-6xl font-bold">
          Unlock your true learning potential.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-neutral-500">
          Master any subject effortlessly with courses, notes, and smart
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
      <div className="w-full justify-start items-end rounded-md relative hidden xl:flex">
        {/* <Lotie /> */}
        <div className="w-32 h-auto z-10">
          <Iphone15Pro height={200} />
        </div>
        <div className="bg-neutral-50 z-0  border aspect-video h-[300px] absolute top-4 right-20 rounded-md"></div>
      </div>
    </section>
  );
};

export default Hero;
