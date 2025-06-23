import React from 'react';

export default function Resume() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Resume</h2>
      <a href="/resume.pdf" className="btn btn-success" download>Download Resume</a>
    </div>
  );
}
