import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Badge } from "react-bootstrap";
import colors from "../color_combo.json";
import { motion } from "framer-motion";
import projectsData from "../projects_data.json";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setProjects(projectsData);

    // Extract unique tags from all projects
    const tagsSet = new Set();
    projectsData.forEach((p) => p.tags.forEach((tag) => tagsSet.add(tag)));
    setAllTags([...tagsSet]);
  }, []);

  const handleTagSelect = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setSelectedTags(selectedTags.filter((tag) => tag !== tagToRemove));
  };

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      search === "" ||
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(search.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) =>
        project.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
      );

    return matchesSearch && matchesTags;
  });

  return (
    <div className="container py-5">
      {/* Page heading */}
      <motion.div
        className="mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p
          className="text-uppercase mb-1"
          style={{ letterSpacing: "0.18em", color: colors.font, fontSize: "0.8rem" }}
        >
          Selected work
        </p>
        <h2 className="fw-bold" style={{ color: colors.highlightFont }}>
          Projects
        </h2>
        <p className="text-muted mb-1">
          Explore a curated set of projects across accessibility, education, games, and more.
        </p>
        <small className="text-muted">
          Showing <strong>{filteredProjects.length}</strong> of{" "}
          <strong>{projects.length}</strong> projects
        </small>
      </motion.div>

      {/* Filters & search */}
      <motion.div
        className="row align-items-center mb-3 g-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Search */}
        <div className="col-12 col-md-6">
          <div
            className="d-flex align-items-center rounded-3 shadow-sm px-3 py-2"
            style={{
              backgroundColor: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(6px)",
            }}
          >
            <span
              className="me-2"
              style={{ fontSize: "1.1rem", color: colors.font }}
            >
              🔍
            </span>
            <input
              type="text"
              className="form-control border-0 bg-transparent"
              placeholder="Search by title or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search projects by title or description"
            />
          </div>
        </div>

        {/* Tag filter & clear */}
        <div className="col-12 col-md-6 d-flex flex-wrap justify-content-md-end gap-2">
          <Form.Select
            onChange={(e) => e.target.value && handleTagSelect(e.target.value)}
            value=""
            style={{
              maxWidth: "230px",
              backgroundColor: colors.secondary,
              color: colors.whiteFont,
              border: "none",
            }}
          >
            <option value="" disabled>
              Filter by tag
            </option>
            {allTags.map((tag, idx) => (
              <option key={idx} value={tag}>
                {tag}
              </option>
            ))}
          </Form.Select>

          {selectedTags.length > 0 && (
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => setSelectedTags([])}
            >
              Clear filters
            </Button>
          )}
        </div>
      </motion.div>

      {/* Selected Tag Badges */}
      {selectedTags.length > 0 && (
        <motion.div
          className="mb-3 d-flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {selectedTags.map((tag, idx) => (
            <Badge
              key={idx}
              bg="info"
              className="me-1 mb-1"
              style={{ cursor: "pointer", backgroundColor: colors.cardBackground1 }}
              onClick={() => handleTagRemove(tag)}
            >
              {tag} ✕
            </Badge>
          ))}
        </motion.div>
      )}

      {/* Project Cards */}
      <div className="row g-4">
        {filteredProjects.length === 0 ? (
          <div className="col-12 text-center text-muted py-5">
            <p className="mb-1">No projects match your search.</p>
            <small>Try removing some filters or changing your search keywords.</small>
          </div>
        ) : (
          filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className="col-12 col-sm-6 col-lg-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <motion.div
                className="card h-100 border-0 shadow-sm overflow-hidden"
                whileHover={{
                  scale: 1.03,
                  translateY: -4,
                  boxShadow: "0 18px 35px rgba(0,0,0,0.4)",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{
                  cursor: "pointer",
                  backgroundColor: colors.cardBackground,
                  color: colors.whiteFont,
                }}
                onClick={() => handleCardClick(project)}
              >
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{
                    height: "190px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5
                    className="card-title mb-1"
                    style={{ color: colors.highlightFont }}
                  >
                    {project.title}
                  </h5>
                  <small className="text-muted mb-2">{project.time}</small>
                  <p className="card-text mb-2">{project.shortDescription}</p>
                  <p className="card-text text-muted mb-2">
                    <strong>Tags:</strong> {project.tags.join(", ")}
                  </p>
                  <p className="card-text mb-0">
                    <strong>Impact:</strong> {project.impact}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))
        )}
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
            <Modal.Body
              style={{
                backgroundColor: colors.secondary,
                color: colors.whiteFont,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="row g-3 align-items-start">
                  <div className="col-12 col-md-5 d-flex justify-content-center">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "0.75rem",
                        boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
                      }}
                      className="mb-3 mb-md-0"
                    />
                  </div>
                  <div className="col-12 col-md-7">
                    <p>
                      <strong>Description:</strong> {selectedProject.details}
                    </p>
                    <p>
                      <strong>Tags:</strong>{" "}
                      {selectedProject.tags && selectedProject.tags.join(", ")}
                    </p>
                    <p>
                      <strong>Impact:</strong> {selectedProject.impact}
                    </p>
                    {selectedProject.guide && (
                      <p>
                        <strong>Guide:</strong> {selectedProject.guide}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
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
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
              )}
              {selectedProject.link && (
                <Button
                  variant="primary"
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
