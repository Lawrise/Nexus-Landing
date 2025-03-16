import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FeatureHeader from "@/components/Presentation/SectionsHeader";
import { PiQuestion } from "react-icons/pi";
import { LuPenTool } from "react-icons/lu";
import { FaDiscord } from "react-icons/fa";

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

const Faq: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 w-full">
      <FeatureHeader
        title="FAQ"
        description="Get answers to the most common questions about Nexus."
        items={FAQ_ICON}
      />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-bold">
            Is Nexus free to use?
          </AccordionTrigger>
          <AccordionContent className="text-left">
            Nexus offers a free version with core features. Premium options
            unlock advanced AI recommendations and deeper analytics.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-bold">
            What subjects can I learn with Nexus?
          </AccordionTrigger>
          <AccordionContent className="text-left">
            Anything! Whether it’s coding, business, science, or languages,
            Nexus adapts to your learning goals.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl font-bold">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="text-left">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Faq;
