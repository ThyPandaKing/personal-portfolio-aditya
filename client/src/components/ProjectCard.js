import React from "react";
import { motion } from "framer-motion";
import { Badge } from "react-bootstrap";

export default function ProjectCard({ project, index }) {
  const {
    title,
    shortDescription,
    description,
    link,
    image,
    tags,
    domain,
    time,
  } = project;

  return (
    <motion.div
      className="col-md-6 mb-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="card h-100 shadow-sm p-3 border-0">
        {image && (
          <img
            src={image}
            alt={title}
            className="card-img-top rounded"
            style={{ maxHeight: "200px", objectFit: "cover" }}
          />
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <small className="text-muted">{time}</small>
          <p className="mt-2 mb-1">{shortDescription}</p>
          <p className="text-secondary">{description}</p>

          {domain && (
            <div className="mb-2">
              <strong>Domain:</strong> {domain}
            </div>
          )}

          <div className="mb-2">
            {tags.map((tag, i) => (
              <Badge bg="primary" className="me-1" key={i}>
                {tag}
              </Badge>
            ))}
          </div>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-sm mt-auto"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
