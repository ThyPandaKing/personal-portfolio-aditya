import React, { useState } from 'react';

export default function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    const res = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input })
    });
    const data = await res.json();
    setMessages([...messages, { question: input, answer: data.answer }]);
    setInput('');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Ask Me Anything</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={sendMessage}>Send</button>
      </div>
      <div>
        {messages.map((m, i) => (
          <div key={i} className="alert alert-secondary">
            <strong>Q:</strong> {m.question} <br />
            <strong>A:</strong> {m.answer}
          </div>
        ))}
      </div>
    </div>
  );
}
