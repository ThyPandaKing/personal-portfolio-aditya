import { useRef } from "react";
import profileImage from "../assets/my_image.jpg";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import "./Page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AchievementTimeline from "../components/AchievementTimeline";
import achievements from "../achievement_data.json"; // Assuming achievements data is in JSON format
import colors from "../color_combo.json";
import MajorNumbers from "../components/MajorNumbers";

export default function Home() {
  const introRef = useRef(null);
  const { scrollY } = useScroll();
  const introInView = useInView(introRef, { once: false, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.4, // Delay between each child animation
      },
    },
  };

  const major_numbers = [
    {
      title: "SOX Controls Automated",
      number: "20",
    },
    {
      title: "SOX Controls Automated",
      number: "20",
    },
    {
      title: "SOX Controls Automated",
      number: "20",
    },
  ];

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animate image position/opacity on scroll
  const imageSize = useTransform(scrollY, [0, 300], ["300px", "40px"]);
  const imageTop = useTransform(scrollY, [0, 300], ["120px", "10px"]);
  const imageOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, threshold: 0.3 });

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="container-fluid py-5">
          <div className="row align-items-center">
            {/* LEFT SIDE - Profile Image */}
            <div className="col-md-5 d-flex justify-content-center mb-4 mb-md-0">
              <motion.img
                src={profileImage}
                alt="Profile"
                style={{
                  width: imageSize,
                  position: "sticky",
                  top: imageTop,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  zIndex: 10,
                  opacity: imageOpacity,
                }}
              />
            </div>

            {/* RIGHT SIDE - Text Card */}
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
          </div>
        </div>
      </div>

      {/* MAJOR NUMBERS SECTION */}
      <MajorNumbers major_numbers={major_numbers} />

      <motion.h1
        className="mb-3"
        style={{ textAlign: "center", color: colors.primary }}
      >
        Major Achievements!
      </motion.h1>

      {/* TIMELINE SECTION */}
      <motion.div
        ref={timelineRef}
        className="row"
        initial={{ opacity: 0, y: 100 }}
        animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
      >
        <AchievementTimeline achievements={achievements} />
      </motion.div>
    </div>
  );
}
