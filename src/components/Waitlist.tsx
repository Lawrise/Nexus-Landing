import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { LuArrowRight } from "react-icons/lu";

const NotionLikeWaitlist: React.FC = () => {
 
  return (
    <section className="py-20 px-8 sm:px-12 md:px-16 xl:px-[8%] 2xl:px-[15%] w-full ">
      <div className="flex flex-col bg-white items-center justify-center text-center gap-4 md:gap-y-10 w-full shadow-md py-16 rounded-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold w-2xl">
          Join the waitlist
        </h2>
        <p className="text-lg md:text-xl text-neutral-500">
          Get early access to our platform and start learning today.
        </p>
        <Input
          type="email"
          placeholder="Enter your email"
          className="w-80"
        />
        <Button
          variant="cta"
          className="group hover:-translate-y-1 transform transition-all duration-300 font-bold text-lg py-1 w-80"
        >
          Join waitlist
          <LuArrowRight className="ml-1 group-hover:translate-x-0.5 transform transition-all duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default NotionLikeWaitlist;
