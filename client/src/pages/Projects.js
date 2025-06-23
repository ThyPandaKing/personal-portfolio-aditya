import React, { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(setProjects);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Projects</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Filter by tag..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="row">
        {projects.filter(p => p.tags.some(tag => tag.includes(filter))).map(project => (
          <div key={project._id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p className="card-text"><strong>Impact:</strong> {project.impact}</p>
                <p className="card-text"><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
