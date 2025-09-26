"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="feature-card counter">
      <h3>Counter Function</h3>
      <p className="muted">Click + or - to change the counter value.</p>
      <div className="row">
        <button className="btn" onClick={() => setCount(count - 1)}>
          -
        </button>
        <span className="counter-value">{count}</span>
        <button className="btn" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}
