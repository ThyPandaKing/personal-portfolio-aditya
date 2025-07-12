import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import colors from "../color_combo.json";

export default function AchievementCardSmall({ achievement, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <div className="d-flex align-items-start w-100 mb-4 px-2 px-md-4">
      {/* Left: Dot */}
      <div className="d-flex justify-content-center align-items-start me-3">
        <div
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            marginTop: "35px",
            backgroundColor: colors.highlightFont,
            zIndex: 10,
          }}
        />
      </div>

      {/* Right: Card (always visible, no index condition) */}
      <motion.div
        ref={ref}
        className="card shadow-sm p-3 mb-3 mb-md-0"
        initial={{ opacity: 0, x: -100 }}
        whileHover={{
          textDecoration: "underline",
          textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
          transition: { duration: 0.3 },
        }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
        transition={{ duration: 0.6 }}
        style={{
          width: "100%",
          maxWidth: "600px",
          color: colors.highlightFont,
          backgroundColor: colors.cardBackground,
        }}
      >
        <div className="d-flex align-items-center">
          <img
            src={achievement.image}
            alt={achievement.title}
            style={{
              width: "60px",
              marginRight: "15px",
              backgroundColor: "white",
            }}
            className="me-3"
          />
          <div style={{ width: "100%" }}>
            <h6 className="mb-1 fw-semibold">{achievement.title}</h6>
            <div
              className="d-flex"
              style={{
                color: colors.whiteFont,
                justifyContent: "space-between",
              }}
            >
              <p className="mb-2 small">{achievement.shortDescription}</p>
              <p className="mb-2 small">{achievement.time}</p>
            </div>
            <div className="d-flex flex-wrap gap-2">
              {achievement.tags?.map((tag, idx) => (
                <span key={idx} className="badge bg-secondary text-light">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
