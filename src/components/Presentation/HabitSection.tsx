import { PiHourglassHighFill } from "react-icons/pi";
import { PiTrophy } from "react-icons/pi";
import { PiCalendarDots } from "react-icons/pi";
import FeatureHeader from "@/components/Presentation/SectionsHeader";

const BENEFICES = [
  {
    icon: <PiCalendarDots className="text-6xl" />,
    title: " Stay on Track",
    description: "Set goals and get gentle nudges to keep learning.",
  },
  {
    icon: <PiHourglassHighFill className="text-6xl" />,
    title: "Small Steps, Big Results ",
    description: "Learn in bite-sized sessions without burnout. ",
  },
  {
    icon: <PiTrophy className="text-6xl" />,
    title: "See Your Growth",
    description: "Track streaks and milestones to stay motivated.",
  },
];

const HabitFeature = () => {
  return (
    <section>
      <FeatureHeader
        title="Make learning a habit."
        description="Learning isn’t just about consuming content—it’s about building a habit that sticks. Nexus helps you stay consistent with smart reminders and progress tracking."
        link={{ title: "Learn more about habit building", href: "#" }}
        items={BENEFICES}
      />
      <div className="w-full aspect-video border border-neutral-400 rounded-md"></div>
    </section>
  );
};

export default HabitFeature;
