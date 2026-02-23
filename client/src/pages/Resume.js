import React from "react";
import colors from "../color_combo.json"; // Ensure this path is correct

const Resume = () => {
  const basePath = process.env.PUBLIC_URL || '/personal-portfolio-aditya';

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4" style={{color: colors.highlightFont, textAlign: "center"}}>My Resume</h2>

      {/* Embedded PDF */}
      <div className="w-full mb-4 border">
        <iframe
          src={`${basePath}/aditya_resume_current.pdf`}
          type="application/pdf"
          title="Resume"
          width="100%"
          height="800px"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
};

export default Resume;
