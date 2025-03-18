import { HoverEffect } from "@/components/ui/card-over-effect";
import SectionHeader from "@/components/Presentation/SectionsHeader";
import { ALL_ADVANTAGES, FEATURES } from "@/data/allPresentation";

const AllFeature: React.FC = () => {
  return (
    <section className="">
      <SectionHeader
        title="Blend all your study tools."
        description="Define what you want to learn and why it matters to you. Let us create a learning path that is tailored to you."
        link={{
          title: "More about study tools",
          href: "#",
        }}
        items={ALL_ADVANTAGES}
      />
      <HoverEffect items={FEATURES} />
    </section>
  );
};

export default AllFeature;
