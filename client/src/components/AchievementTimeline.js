import React from "react";
import AchievementCard from "./AchievementCard";
import colors from "../color_combo.json";

export default function AchievementTimeline({ achievements }) {
  return (
    <div className="container position-relative py-5">
      {/* Responsive Center or Side Line */}
      <div
        className="timeline-line  d-none d-md-block"
        style={{
          width: "4px",
          height: "100%",
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,

          backgroundColor: colors.secondary,
        }}
      ></div>

      <div
        className="timeline-line d-block d-md-none"
        style={{
          width: "4px",
          height: "100%",
          position: "absolute",
          top: 0,
          left: "20px",
          backgroundColor: colors.secondary,
          zIndex: 1,
        }}
      ></div>

      {achievements.map((item, i) => (
        <AchievementCard key={i} achievement={item} index={i} />
      ))}
    </div>
  );
}
