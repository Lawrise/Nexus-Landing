import SectionHeader from "@/components/Presentation/HeaderPres";
import { ALL_ADVANTAGES, FEATURES } from "@/data/allPresentation";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const AllFeature: React.FC = () => {
  return (
    <section className="px-8 sm:px-12 md:px-16 xl:px-[8%] 2xl:px-[15%] mb-40">
      <SectionHeader
        title="Blend all your study tools."
        link={{
          title: "More about study tools",
          href: "#",
        }}
        description="All the tools you need to study in one place"
        items={ALL_ADVANTAGES}
      />
      <BentoGrid>
        {FEATURES.map((item, index) => (
          <BentoGridItem key={index} {...item} />
        ))}
      </BentoGrid>
    </section>
  );
};

export default AllFeature;
