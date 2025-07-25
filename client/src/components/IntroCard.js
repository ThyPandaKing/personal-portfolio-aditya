import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import colors from "../color_combo.json";
import { Link } from "react-router-dom";

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
          style={{
            color: colors.whiteFont,
            backgroundColor: colors.cardBackground,
          }}
        >
          <motion.h1
            className="mb-3"
            variants={childVariants}
            style={{ color: colors.highlightFont, fontWeight: "bold" }}
            whileHover={{
              textDecoration: "underline",
              textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
              transition: { duration: 0.3 },
            }}
          >
            Welcome!
          </motion.h1>

          <motion.p
            className="lead"
            variants={childVariants}
            whileHover={{
              textDecoration: "underline",
              textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
              transition: { duration: 0.3 },
            }}
          >
            I'm{" "}
            <strong style={{ color: colors.highlightFont, fontWeight: "bold" }}>
              Aditya Sharma
            </strong>
            , a Software Engineer and an alumnus of{" "}
            <strong style={{ color: colors.highlightFont, fontWeight: "bold" }}>
              IIT Tirupati
            </strong>
            , with a CGPA of{" "}
            <strong style={{ color: colors.highlightFont, fontWeight: "bold" }}>
              8.8
            </strong>
          </motion.p>
          <motion.p
            className="lead"
            variants={childVariants}
            whileHover={{
              textDecoration: "underline",
              textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
              transition: { duration: 0.3 },
            }}
          >
            Full Stack Compliance Engineer at{" "}
            <strong style={{ color: colors.highlightFont, fontWeight: "bold" }}>
              ServiceNow
            </strong>
            , automating controls to achieve{" "}
            <strong style={{ color: colors.highlightFont, fontWeight: "bold" }}>
              100% compliance
            </strong>{" "}
            and saved over{" "}
            <strong style={{ color: colors.highlightFont, fontWeight: "bold" }}>
              1000+ Man Hours
            </strong>{" "}
            for control owners.
          </motion.p>
          <motion.p className="lead" variants={childVariants}></motion.p>
          <motion.p
            className="lead"
            variants={childVariants}
            whileHover={{
              textDecoration: "underline",
              textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
              transition: { duration: 0.3 },
            }}
          >
            I like{" "}
            <strong style={{ color: colors.highlightFont, fontWeight: "bold" }}>
              Working out
            </strong>
            , and watching{" "}
            <strong style={{ color: colors.highlightFont, fontWeight: "bold" }}>
              Anime
            </strong>{" "}
          </motion.p>
          <motion.p className="lead" variants={childVariants}></motion.p>
          <motion.p
            className="lead"
            variants={childVariants}
            whileHover={{
              textDecoration: "underline",
              textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
              transition: { duration: 0.3 },
            }}
          >
            Explore my projects via the{" "}
            <Link to="/projects" state={{ textDecoration: "none" }}>
              <strong
                style={{
                  color: colors.highlightFont,
                  fontWeight: "bold",
                }}
              >
                Projects
              </strong>
            </Link>{" "}
            tab.
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
}
