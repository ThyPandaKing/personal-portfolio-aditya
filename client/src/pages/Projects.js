import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import projectsData from "../projects_data.json"; // Your JSON data

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Projects</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Filter by tag..."
        value={filter}
        onChange={(e) => setFilter(e.target.value.toLowerCase())}
      />
      <div className="row">
        {projects
          .filter(
            (p) =>
              filter === "" ||
              p.tags.some((tag) => tag.toLowerCase().includes(filter))
          )
          .map((project, idx) => (
            <motion.div
              key={idx}
              className="col-md-4 mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <motion.div
                className="card h-100 shadow-sm"
                whileHover={{ scale: 1.05 }}
                style={{ cursor: "pointer" }}
                onClick={() => handleCardClick(project)}
              >
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.shortDescription}</p>
                  <p className="card-text text-muted">
                    <strong>Tags:</strong> {project.tags.join(", ")}
                  </p>
                  <p className="card-text">
                    <strong>Impact:</strong> {project.impact}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
      </div>

      {/* Modal for project details */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{ width: "400px" }}
                  className="me-3"
                />
              </div>
              <p>
                <strong>Description:</strong> {selectedProject.details}
              </p>
              <p>
                <strong>Tags:</strong> {selectedProject.tags.join(", ")}
              </p>
              <p>
                <strong>Impact:</strong> {selectedProject.impact}
              </p>
              <p>
                <strong>Guide:</strong> {selectedProject.guide}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              {selectedProject.github && (
                <Button
                  variant="dark"
                  href={selectedProject.github}
                  target="_blank"
                >
                  GitHub
                </Button>
              )}
              {selectedProject.link && (
                <Button
                  variant="primary"
                  href={selectedProject.link}
                  target="_blank"
                >
                  View Project
                </Button>
              )}
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}
