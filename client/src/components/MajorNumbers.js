import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import colors from "../color_combo.json";

export default function MajorNumbers({ major_numbers }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <div
      className="d-flex position-relative mb-5 w-100"
      style={{ justifyContent: "space-around", flexWrap: "wrap" }}
    >
      {major_numbers.map((number, index) => (
        <motion.div
          ref={ref}
          key={index}
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
            color: colors.highlightFont,
            borderLeftColor: colors.highlightFont,
            borderLeftWidth: "5px",
            borderLeftStyle: "solid",
            borderRightColor: colors.highlightFont,
            borderRightWidth: "5px",
            borderRightStyle: "solid",
            background: `none`,
            textAlign: "center",
            fontSize: "1.5rem",
          }}
        >
          <div>
            <h4 className="mb-3">{number.title}</h4>

            <p className="mb-1">{number.number}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
