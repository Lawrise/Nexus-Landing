import { PiTarget } from "react-icons/pi";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { PiCompass } from "react-icons/pi";
import FeatureHeader from "@/components/Presentation/SectionsHeader";

const BENEFICES = [
  {
    icon: <PiCompass className="text-6xl" />,
    title: "No more guesswork",
    description: "Learn any topic by your own with our learning path feature",
  },
  {
    icon: <PiTarget className="text-6xl" />,
    title: "Learn efficiently",
    description:
      "Focus on the right next step, not just consuming more content.",
  },
  {
    icon: <LuChartNoAxesCombined className="text-6xl" />,
    title: "Stay motivated",
    description: "Track progress and see how each concept connects.",
  },
];

const LearningPathFeature = () => {
  return (
    <section>
      <FeatureHeader
        title="Your study path, personalized."
        description="Tired of jumping between random tutorials, forgetting key concepts, and feeling stuck? Nexus builds your learning path for you."
        link={{ title: "More about the learning path", href: "#" }}
        items={BENEFICES}
      />
      <div className="w-full aspect-video border border-neutral-400 rounded-md"></div>
    </section>
  );
};

export default LearningPathFeature;
