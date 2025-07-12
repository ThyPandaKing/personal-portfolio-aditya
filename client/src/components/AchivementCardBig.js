import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import colors from "../color_combo.json";

export default function AchievementCardBig({ achievement, index }) {
  const isLeft = index % 2 === 0;
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <div className="d-flex justify-content-center position-relative mb-5 w-100 flex-wrap">
      {/* LEFT COLUMN */}
      <div className="col-md-5 d-none d-md-flex justify-content-end">
        {isLeft && (
          <motion.div
            ref={ref}
            className="card shadow-sm p-3 d-flex align-items-center flex-row"
            initial={{ opacity: 0, x: -100 }}
            whileHover={{
              textDecoration: "underline",
              textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
              transition: { duration: 0.3 },
            }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
            transition={{ duration: 0.6 }}
            style={{
              width: "90%",
              color: colors.highlightFont,
              backgroundColor: colors.cardBackground,
            }}
          >
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
          </motion.div>
        )}
      </div>

      {/* DOT */}
      <div className="d-flex flex-column align-items-center position-relative mx-2">
        <div
          // className="bg-primary"
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            marginTop: "35px",
            zIndex: 10,
            backgroundColor: colors.highlightFont,
          }}
        />
      </div>

      {/* RIGHT COLUMN (Also used for small screens) */}
      <div className="col-md-5 d-flex justify-content-start">
        {!isLeft && (
          <motion.div
            ref={ref}
            className="card shadow-sm p-3 d-flex flex-column flex-md-row align-items-start align-items-md-center"
            initial={{ opacity: 0, x: 100 }}
            whileHover={{
              textDecoration: "underline",
              textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
              transition: { duration: 0.3 },
            }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
            transition={{ duration: 0.6 }}
            style={{
              width: "90%",
              color: colors.highlightFont,
              backgroundColor: colors.cardBackground,
            }}
          >
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
          </motion.div>
        )}
      </div>
    </div>
  );
}
