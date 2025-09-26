"use client";
import { useState } from "react";

export default function ToggleMessage({
  heading = "Custom Toggle Section",
  message = "This is a custom message shown on toggle.",
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="feature-card toggle-message">
      <h3>{heading}</h3>
      <br />
      <p style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <img src="/react.png" alt="React Logo" height={40} />
        <img src="/next.svg" alt="Next Logo" height={40} />
      </p>
      <p>
        React is a JavaScript library for building dynamic user interfaces with
        reusable components and efficient state management. Next.js extends
        React with features like server-side rendering, routing, and performance
        optimization, making it easier to build fast and scalable web
        applications.
      </p>
      <p className="muted">Click the button to show/hide the message.</p>
      <button className="btn" onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>
      {visible && <div className="status ok">{message}</div>}
    </div>
  );
}
