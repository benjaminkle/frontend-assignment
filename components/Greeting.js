"use client";
import { useState, useEffect } from "react";

export default function Greeting({ defaultName = "" }) {
  const [savedName, setSavedName] = useState("");
  const [inputValue, setInputValue] = useState("");

  // Load saved name or use default
  useEffect(() => {
    const stored = localStorage.getItem("username");
    if (stored) {
      setSavedName(stored);
    } else if (defaultName) {
      setSavedName(defaultName);
    }
  }, [defaultName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      localStorage.setItem("username", inputValue);
      setSavedName(inputValue);
      setInputValue("");
    }
  };

  const handleReset = () => {
    localStorage.removeItem("username");
    setSavedName("");
  };

  return (
    <div className="feature-card greeting">
      <h3>Let’s explore this interactive web application together!</h3>
      <p>
        Built with HTML, CSS, JavaScript, React, and Next.js, it demonstrates
        how modern front-end tools can be combined to create a smooth and
        engaging user experience. You’ll find reusable components, stateful
        interactions, and conditional rendering styled with a clean, consistent
        design.
      </p>

      {savedName ? (
        <>
          <p className="muted">
            Hello, {savedName}! Thanks for visiting this site. Feel free to
            explore the different sections and see how each feature works in
            action.
          </p>
          <button className="btn btn-outline" onClick={handleReset}>
            Change Name
          </button>
        </>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Enter your name..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      )}
    </div>
  );
}
