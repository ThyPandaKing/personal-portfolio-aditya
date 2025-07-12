// components/BackgroundImage.jsx
import React from "react";
import backgroundImg from "../assets/background.png"; // adjust path as needed

const BackgroundImage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundImage;
