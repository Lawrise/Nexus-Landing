// Master Any Subject with AI-Powered Learning

import { Button } from "./ui/button";
import { LuArrowRight } from "react-icons/lu";

const Hero: React.FC = () => {
	return (
	  <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto justify-center items-center py-32 md:py-48 px-4">
		<h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center">
		  Unlock your true learning potential.
		</h1>
		<p className="text-center text-lg md:text-xl max-w-2xl">
		  Courses, notes, and every tool you need to learn smarter and faster.
		  <br className="hidden md:block" /> All in one place.
		</p>
		<Button variant="cta" className="group hover:-translate-y-1 transform transition-all duration-300 font-bold px-6 py-3 text-lg">
		  Try it now
		  <LuArrowRight className="ml-2 group-hover:translate-x-0.5 transform transition-all duration-300"/>
		</Button>
	  </div>
	);
  };

export default Hero;
