import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const sections = [
  { id: "transforms", title: "Transforms" },
  { id: "springs", title: "Springs" },
  { id: "scroll", title: "Scroll" },
  { id: "exit", title: "Exit Animations" },
  { id: "layout", title: "Layout Animations" },
  { id: "gestures", title: "Gestures" },
  { id: "timeline", title: "Timeline" },
];

export default function ScrollNav() {
  const [active, setActive] = useState(sections[0].id);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  // Map scroll progress to a width percentage for the progress bar
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Detect active section based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <nav className="fixed top-0 left-0 w-48 h-full flex flex-col items-start p-6 space-y-4">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`text-lg font-medium transition ${
              active === section.id ? "text-white" : "text-gray-500"
            }`}
          >
            {section.title}
          </a>
        ))}
        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-pink-500"
          style={{ width: progressWidth }}
        />
      </nav>

      {/* Content */}
      <div ref={containerRef} className="ml-48 w-full overflow-y-auto">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="h-screen flex items-center justify-center text-4xl font-bold"
          >
            {section.title}
          </section>
        ))}
      </div>
    </div>
  );
}
