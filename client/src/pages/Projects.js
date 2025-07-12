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
    <div className="container mt-5">
      {/* Heading and Filter */}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h2 style={{ color: colors.highlightFont }}>Projects</h2>

        <Form.Select
          onChange={(e) => handleTagSelect(e.target.value)}
          value=""
          style={{ width: "200px" }}
        >
          <option value="" disabled>
            Filter by Tag
          </option>
          {allTags.map((tag, idx) => (
            <option key={idx} value={tag}>
              {tag}
            </option>
          ))}
        </Form.Select>
      </div>

      {/* Selected Tag Badges */}
      <div className="mb-3">
        {selectedTags.map((tag, idx) => (
          <Badge
            key={idx}
            bg="secondary"
            className="me-2 mb-1"
            style={{ cursor: "pointer" }}
            onClick={() => handleTagRemove(tag)}
          >
            {tag} ✕
          </Badge>
        ))}
      </div>

      {/* Search Field */}
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by title or description..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Project Cards */}
      <div className="row">
        {filteredProjects.map((project, idx) => (
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
