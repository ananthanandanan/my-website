"use client";

import { useEffect, useState } from "react";

export function ReadProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function update() {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setWidth(height ? (winScroll / height) * 100 : 0);
    }
    update();
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-200 h-0.5 transition-[width] duration-100 linear"
      style={{
        width: `${width}%`,
        background: "linear-gradient(90deg, var(--accent), #9dd4ff)",
        boxShadow: "0 0 8px rgba(74,158,255,.5)",
      }}
      aria-hidden
    />
  );
}
