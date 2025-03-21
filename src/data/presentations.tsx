import {
  HABIT_ADVANTAGES,
  PATH_ADVANTAGES,
  PROJECT_ADVANTAGES,
  VISUAL_ADVANTAGES,
} from "./Advantages";

const PRESENTATIONS = [
  {
    title: "Study what matters to you.",
    description:
      "Tired of jumping between random tutorials, forgetting key concepts, and feeling stuck? Nexus builds your learning path for you.",
    link: {
      title: "More about the learning path",
      href: "#",
    },
    benefices: PATH_ADVANTAGES,
  },
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
    title: "Learn by projects.",
    description:
      "No more boring tutorials. Nexus helps you learn by doing with real-world projects and challenges.",
    link: {
      title: "Learn more about focus",
      href: "#",
    },
    benefices: PROJECT_ADVANTAGES,
  },
  {
    title: "Visualize your knowledge.",
    description:
      "Nexus helps you visualize your knowledge with interactive graphs and charts. See your progress and growth over time.",
    link: {
      title: "Learn more about visualization",
      href: "#",
    },
    benefices: VISUAL_ADVANTAGES,
  },
];

export default PRESENTATIONS;
