const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAI = require('openai');
const Project = require('./models/Project');

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.get('/api/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;
  const gptRes = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4'
  });
  res.json({ answer: gptRes.choices[0].message.content });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
