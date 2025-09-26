import { useState } from "react";

export default function ValidatedForm({ minLength = 3, title = "Form Title" }) {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      setError("Input cannot be empty.");
      return;
    }
    if (input.trim().length < minLength) {
      setError(`Input must be at least ${minLength} characters long.`);
      return;
    }

    setError("");
    setSubmitted(input);
    setInput("");
  };

  return (
    <div className="feature-card validated-form">
      <h3>{title}</h3>
      <p className="muted">
        Submit a message. Leave it empty to see validation.
      </p>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something..."
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {error && <div className="status error">{error}</div>}
      {submitted && !error && (
        <div className="status ok">You submitted: {submitted}</div>
      )}
    </div>
  );
}
