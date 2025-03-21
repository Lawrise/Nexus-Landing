"use client";

interface CurvedDivisionProps {
  bgColor?: string;
  height?: string;
  position?: "top" | "bottom" | "middle";
  intensity?: number;
  reversed?: boolean; // New prop to control curve direction
}

const CurvedDivision: React.FC<CurvedDivisionProps> = ({
  bgColor = "bg-white",
  height = "60px",
  position = "bottom",
  intensity = 54,
  reversed = false, // Default to regular curves
}) => {
  // Calculate clip path based on position and reversed state
  let clipPath;
  let positionClass;

  if (position === "bottom") {
    clipPath = reversed
      ? `circle(150vw at 50% calc(100% + 150vw - ${intensity}vw))`
      : `circle(150vw at 50% calc(100% - 150vw - ${intensity}vw))`;
    positionClass = "bottom-0";
  } else if (position === "middle") {
    // For middle, adjust the ellipse parameters
    clipPath = reversed
      ? `ellipse(100% 50% at 50% 150%)`
      : `ellipse(100% 50% at 50% 50%)`;
    positionClass = "top-[20%]";
  } else {
    // top
    clipPath = reversed
      ? `circle(150vw at 50% calc(100% - 150vw - 10vw));`
      : `circle(150vw at 50% calc(100% + 150vw - 10vw));`;
    positionClass = "top-0";
  }

  return (
    <div
      className={`absolute ${positionClass} w-full overflow-hidden z-0 h-[50%]`}
      style={{
        // height: position !== "middle" ? `calc(100% + ${height})` : "150%",
        clipPath: clipPath,
      }}
    >
      <div className={`w-full h-full ${bgColor}`}></div>
    </div>
  );
};

export default CurvedDivision;