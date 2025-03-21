import { LuArrowRight } from "react-icons/lu";
import { Button } from "@/components/ui/button";

const Cta: React.FC = () => {
  return (
    <section className=" px-8 sm:px-12 md:px-16 xl:px-[8%] 2xl:px-[15%] w-full bg-white py-40">
      <div className="flex flex-col items-center justify-center text-center bg-neutral-50 gap-4 md:gap-y-10 w-full shadow-md py-16 rounded-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold max-w-2xl">
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
