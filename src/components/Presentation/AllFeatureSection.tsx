import { HoverEffect } from "@/components/ui/card-over-effect";
import FeatureHeader from "@/components/Presentation/SectionsHeader";
import { TARGET_USERS, FEATURES } from "@/data";

const AllFeature: React.FC = () => {
  return (
    <section className="">
      <FeatureHeader
        title="Blend all your study tools."
        description="Define what you want to learn and why it matters to you. Let us create a learning path that is tailored to you."
        link={{
          title: "Learn more about how feature is blend together",
          href: "#",
        }}
        items={TARGET_USERS}
      />
      <HoverEffect items={FEATURES} />
    </section>
  );
};

export default AllFeature;
