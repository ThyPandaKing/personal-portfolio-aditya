import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isSending, setIsSending] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isSending) return;
    try {
      setIsSending(true);
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { question: input, answer: data.answer || "No response received." },
      ]);
      setInput("");
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        {
          question: input,
          answer: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Ask Me Anything
      </motion.h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={input}
          placeholder="Type your question and press Enter..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isSending}
        />
        <button
          className="btn btn-primary"
          onClick={sendMessage}
          disabled={isSending}
        >
          {isSending ? "Thinking..." : "Send"}
        </button>
      </div>
      <div>
        {messages.map((m, i) => (
          <motion.div
            key={i}
            className="alert alert-secondary"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
          >
            <strong>Q:</strong> {m.question} <br />
            <strong>A:</strong> {m.answer}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
