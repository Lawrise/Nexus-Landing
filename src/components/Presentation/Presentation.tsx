import SectionHeader from "@/components/Presentation/SectionsHeader";
import { SmallSectionAdvantage } from "./SmallSectionAdvantage";
import { BeneficesInterface } from "@/data";

export interface BeneficesProps {
  title: string;
  description: string;
  link: {
    title: string;
    href: string;
  };
  benefices: BeneficesInterface[];
}

const Presentation: React.FC<BeneficesProps> = ({
  title,
  description,
  link,
  benefices,
}) => {
  return (
    <section>
      <SectionHeader
        title={title}
        description={description}
        link={link}
        items={benefices}
      />
      <div className="w-full aspect-video border border-neutral-400 rounded-md"></div>
      <ul className="grid grid-cols-1 gap-y-8 mt-8 md:hidden">
        {benefices.map((item, index) => (
          <li key={index} className="flex flex-col items-start">
            <SmallSectionAdvantage
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Presentation;
