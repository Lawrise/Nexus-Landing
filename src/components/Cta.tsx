import { LuArrowRight } from "react-icons/lu";
import { Button } from "@/components/ui/button";

const Cta: React.FC = () => {
  return (
	<section className="flex flex-col items-center justify-center  text-center bg-neutral-100 w-full rounded-md py-16 hover:outline-16 hover:outline-neutral-200">
	<div className="w-1/2 flex flex-col items-center justify-center gap-4 gap-y-10">
	  <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
		Join a Community of Learners & Stay Ahead
	  </h2>
	  <p className="text-lg md:text-xl text-neutral-500">
		Start your personalized learning journey today.
	  </p>
	  <Button
		variant="cta"
		className="group hover:-translate-y-1 transform transition-all duration-300 font-bold text-lg py-1"
	  >
		Join nexus now
		<LuArrowRight className="ml-1 group-hover:translate-x-0.5 transform transition-all duration-300" />
	  </Button>
	</div>
  </section>
  );
};

export default Cta;
