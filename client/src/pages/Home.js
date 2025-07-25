import { useRef, useEffect, useState } from "react";
import profileImage from "../assets/my_image.jpg";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import "./Page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AchievementTimeline from "../components/AchievementTimeline";
import achievements from "../achievement_data.json"; // Assuming achievements data is in JSON format
import colors from "../color_combo.json";
import MajorNumbers from "../components/MajorNumbers";
import IntroCard from "../components/IntroCard";

export default function Home() {
  const introRef = useRef(null);
  const { scrollY } = useScroll();
  const introInView = useInView(introRef, { once: false, amount: 0.5 });

  const [imageSizeRange, setImageSizeRange] = useState(["300px", "40px"]);
  const [imageTopRange, setImageTopRange] = useState(["120px", "10px"]);

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
      title: "Time Saved",
      number: "2000+ hours",
    },
    {
      title: "Productivity Increase",
      number: "10,000+ hours",
    },
  ];

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const updateResponsiveValues = () => {
      const width = window.innerWidth;

      if (width < 576) {
        // Mobile
        setImageSizeRange(["180px", "30px"]);
        setImageTopRange(["80px", "5px"]);
      } else if (width < 768) {
        // Tablet
        setImageSizeRange(["220px", "35px"]);
        setImageTopRange(["100px", "8px"]);
      } else {
        // Desktop
        setImageSizeRange(["300px", "40px"]);
        setImageTopRange(["120px", "10px"]);
      }
    };
    updateResponsiveValues();
    window.addEventListener("resize", updateResponsiveValues);
    return () => window.removeEventListener("resize", updateResponsiveValues);
  }, []);

  // Animate image position/opacity on scroll
  const imageSize = useTransform(scrollY, [0, 300], imageSizeRange);
  const imageTop = useTransform(scrollY, [0, 300], imageTopRange);
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
            <IntroCard
              introRef={introRef}
              containerVariants={containerVariants}
              introInView={introInView}
              childVariants={childVariants}

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
        </div>
      </div>

      {/* MAJOR NUMBERS SECTION */}
      <MajorNumbers major_numbers={major_numbers} />

      <motion.h1
        className="mb-3"
        style={{ textAlign: "center", color: colors.highlightFont }}
      >
        Achievements Timeling!
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
