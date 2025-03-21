import SectionHeader from "@/components/Presentation/HeaderPres";
import { SmallSectionAdvantage } from "./SmallSectionAdvantage";
import { BeneficesInterface } from "@/data";

export interface BeneficesProps {
  title: string;
  link: {
    title: string;
    href: string;
  };
  benefices: BeneficesInterface[];
}

const Presentation: React.FC<BeneficesProps> = ({
  title,
  link,
  benefices,
}) => {
  return (
    <section className="px-8 sm:px-12 md:px-16 xl:px-[8%] 2xl:px-[15%] py-20 bg-neutral-50 w-full">
      <SectionHeader
        title={title}
        link={link}
        items={benefices}
      />
      <div className="w-full aspect-video border border-white rounded-4xl bg-white"></div>
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
