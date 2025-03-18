import { HABIT_ADVANTAGES } from "./habitPresentation";
import { PATH_BENEFICES } from "./PathPresentation";

const PRESENTATIONS = [
  {
    title: "Make learning a habit.",
    description:
      "Learning isn’t just about consuming content—it’s about building a habit that sticks. Nexus helps you stay consistent with smart reminders and progress tracking.",
    link: {
      title: "Learn more about habit building",
      href: "#",
    },
    benefices: HABIT_ADVANTAGES,
  },
  {
    title: "Study path, for you.",
    description:
      "Tired of jumping between random tutorials, forgetting key concepts, and feeling stuck? Nexus builds your learning path for you.",
    link: {
      title: "More about the learning path",
      href: "#",
    },
    benefices: PATH_BENEFICES,
  },
];

export default PRESENTATIONS;
