"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  console.log(users);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}
