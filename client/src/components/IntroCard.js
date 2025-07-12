import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import colors from "../color_combo.json";

export default function IntroCard({
  introRef,
  containerVariants,
  introInView,
  childVariants,
}) {
  return (
    <>
      <motion.div
        ref={introRef}
        className="col-md-7"
        variants={containerVariants}
        initial="hidden"
        animate={introInView ? "show" : "hidden"}
      >
        <motion.div
          className="card p-4 shadow"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 className="mb-3" variants={childVariants}>
            Welcome!
          </motion.h1>

          <motion.p className="lead" variants={childVariants}>
            I'm{" "}
            <strong style={{ color: colors.font, fontWeight: "bold" }}>
              Aditya Sharma
            </strong>
            , a Software Engineer and an alumnus of{" "}
            <strong style={{ color: colors.font, fontWeight: "bold" }}>
              IIT Tirupati
            </strong>
            , with a CGPA of{" "}
            <strong style={{ color: colors.font, fontWeight: "bold" }}>
              8.8
            </strong>
          </motion.p>
          <motion.p className="lead" variants={childVariants}>
            Full Stack Compliance Engineer at{" "}
            <strong style={{ color: colors.font, fontWeight: "bold" }}>
              ServiceNow
            </strong>
            , automating controls to achieve{" "}
            <strong style={{ color: colors.font, fontWeight: "bold" }}>
              100% compliance
            </strong>{" "}
            and saved over{" "}
            <strong style={{ color: colors.font, fontWeight: "bold" }}>
              1000+ Man Hours
            </strong>{" "}
            for control owners.
          </motion.p>
          <motion.p className="lead" variants={childVariants}></motion.p>

          <motion.p className="lead" variants={childVariants}>
            Explore my projects via the{" "}
            <span className="text-primary">Projects</span> tab.
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
}
