// Master Any Subject with AI-Powered Learning

import { Button } from "./ui/button";
import { LuArrowUpRight } from "react-icons/lu";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 w-2/3 justify-center  items-center h-[600px]">
      <h1 className="text-2xl md:text-6xl font-bold text-center">
        Unlock your true learning potential.
      </h1>
      <p className="text-center text-xl">
	  Courses, notes, and every tool you need to learn smarter and faster.<br/> All in one place.
      </p>
	  <Button variant="default">Try it now<LuArrowUpRight /></Button>
    </div>
  );
};

export default Hero;
