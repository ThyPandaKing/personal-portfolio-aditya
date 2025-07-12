import React from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import colors from "../color_combo.json"; // Assuming you have a color combo file

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const Contact = () => {
  const contacts = [
    {
      label: "Email",
      value: "aditya9660sharma@gmail.com",
      href: "mailto:aditya9660sharma@gmail.com",
      icon: <MdEmail className="fs-2 text-primary" />,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/aditya-sharma",
      href: "https://www.linkedin.com/in/aditya-sharma-2096331b2/",
      icon: <FaLinkedin className="fs-2 text-info" />,
    },
    {
      label: "WhatsApp",
      value: "+91 74270 74355",
      href: "https://wa.me/7427074355",
      icon: <FaWhatsapp className="fs-2 text-success" />,
    },
    {
      label: "Phone",
      value: "+91 74270 74355",
      href: "tel:+917427074355",
      icon: <MdPhone className="fs-2 text-success" />,
    },
  ];

  return (
    <motion.div
      className="container py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Title */}
      <motion.h2
        className="text-center mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ color: colors.highlightFont }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Grid */}
      <div className="row g-4 justify-content-center">
        {contacts.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="col-12 col-sm-6 col-lg-5 text-decoration-none"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm">
              <div className="me-3">{item.icon}</div>
              <div>
                <div className="fw-bold">{item.label}</div>
                <div className="text-muted small">{item.value}</div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;
