const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  impact: String,
  techStack: [String],
  tags: [String],
});

module.exports = mongoose.model('Project', projectSchema);