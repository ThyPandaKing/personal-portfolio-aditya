import React, { useRef } from "react";
import profileImage from "../assets/my_image.jpg";
import { motion, useInView } from "framer-motion";
import "./Page.css";

export default function Home() {
  const achievements = [
    {
      title: "Birth",
      date: "Nov 2002",
      description: "Ranked among top 1% in LeetCode with 500+ problems solved.",
    },
    {
      title: "Top 1% in LeetCode",
      date: "Jan 2022",
      description: "Ranked among top 1% in LeetCode with 500+ problems solved.",
    },
    {
      title: "Security CTF Winner",
      date: "Oct 2023",
      description: "Won CTF security contest organized by XYZ.",
    },
    {
      title: "DEFCON Speaker",
      date: "Mar 2024",
      description: "Spoke at DEFCON on Full Stack App Security.",
    },
  ];

  // Refs for intro and timeline sections
  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: false, threshold: 0.3 });

  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, threshold: 0.3 });

  return (
    <div className="container-fluid mt-4">
      <div className="row">

        {/* LEFT SIDE - Text & Timeline */}
        <motion.div
          ref={introRef}
          className="col-md-7"
          initial={{ opacity: 1, y: 0 }}
          animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 className="mb-4">Welcome Recruiters!</motion.h1>
          <motion.p className="lead">
            I graduated from <strong>IIT Tirupati</strong> with{" "}
            <strong>8.8 CGPA</strong> in CSE. Currently at{" "}
            <strong>ServiceNow</strong> as a Full Stack Compliance Engineer.
          </motion.p>

          <motion.p className="lead text-danger">
            I have a deep interest in cybersecurity — look for hidden clues
            across the site!
          </motion.p>

          <motion.p className="lead">
            Explore my projects via the{" "}
            <span className="text-primary">Projects</span> tab.
          </motion.p>
        </motion.div>

        {/* RIGHT SIDE - Profile Image */}
        <div className="col-md-5 d-none d-md-block position-relative d-flex justify-content-end">
          <motion.img
            src={profileImage}
            alt="Profile"
            initial={{ opacity: 1, y: 0 }}
            animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            style={{
              position: "sticky",
              top: "120px",
              width: "300px",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              zIndex: 10,
            }}
          />
        </div>
      </div>


      {/* TIMELINE SECTION */}
      <motion.div
        ref={timelineRef}
        className="row"
        initial={{ opacity: 0, y: 100 }}
        animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
      >
        <div className="col-12">
          <h2 className="mb-4">My Timeline</h2>
          <div className="timeline">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                className="card p-3 mb-4 shadow-sm"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <small className="text-muted">{item.date}</small>
                <h5 className="mt-2">{item.title}</h5>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
