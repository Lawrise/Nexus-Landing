import { FaDiscord } from "react-icons/fa6";
import { LuPenTool } from "react-icons/lu";
import { PiQuestion } from "react-icons/pi";

import { PiStarFour, PiStudent, PiQuestionMark } from "react-icons/pi";
import { TbUserQuestion } from "react-icons/tb";
import { PiLink } from "react-icons/pi";

// TypeScript interface for FAQ items
export interface FAQQuestionInterface {
  id: number;
  icon?: React.ReactNode;
  question: string;
  answer: string;
}

export const FAQ_ICON = [
  {
	icon: <PiQuestion className="text-6xl" />,
	title: "Questions",
	description: "Get answers to the most common questions about Nexus.",
  },
  {
	icon: <FaDiscord className="text-6xl" />,
	title: "Join the community",
	description: "Join our discord community to get help from other users.",
  },
  {
	icon: <LuPenTool className="text-6xl" />,
	title: "Blog",
	description: "Read our blog to get the latest news and updates.",
  },
];

export const FAQ_QUESTIONS: FAQQuestionInterface[] = [
	{
	  id: 1,
	  icon: <PiQuestionMark className="text-xl" />,
	  question: "Is Nexus free to use?",
	  answer:
		"Nexus offers a free version with core features. Premium options unlock advanced AI recommendations and deeper analytics.",
	},
	{
	  id: 2,
	  icon: <PiStudent className="text-xl" />,
	  question: "What subjects can I learn with Nexus?",
	  answer:
		"Anything! Whether it’s coding, business, science, or languages, Nexus adapts to your learning goals.",
	},
	{
	  id: 3,
	  icon: <TbUserQuestion className="text-xl" />,
	  question: "Who is Nexus for?",
	  answer:
		"Nexus is build for students, professionals, lifelong learners or anyone who want to enhance their learning system.",
	},
	{
	  id: 4,
	  icon: <PiStarFour className="text-xl" />,
	  question: "What make Nexus different from other learning platforms?",
	  answer:
		"Nexus is the all-in-one learning platform that combines the best of online learning with the power of AI to help you learn better.",
	},
	{
	  id: 5,
	  icon: <PiLink className="text-xl" />,
	  question: "Can I use external resources with Nexus?",
	  answer:
		"Yes, you can use external resources with Nexus. You can import your notes, flashcards, and other study materials.",
	},
  ];