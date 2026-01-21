"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveringInteractive, setHoveringInteractive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springConfig = { damping: 12, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
    };

    const checkInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveTags = ["BUTTON", "A", "INPUT", "TEXTAREA", "SELECT"];
      setHoveringInteractive(interactiveTags.includes(target.tagName));
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", checkInteractive);
    document.addEventListener("mouseout", checkInteractive);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", checkInteractive);
      document.removeEventListener("mouseout", checkInteractive);
    };
  }, [x, y]);

  return (
    <>
      {/* Hide default cursor globally */}
      <style>{`
        * { cursor: none !important; }
        input, textarea, select, button, a { cursor: pointer !important; }
      `}</style>

      {/* Main Cursor Ball */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          position: "fixed",
          top: 0,
          left: 0,
          width: 24,
          height: 24,
          borderRadius: "50%",
          backgroundColor: "#EF4444",
          pointerEvents: "none",
          zIndex: 9999,
        }}
        animate={{
          scale: hoveringInteractive ? 0.5 : 1, // shrink on hover
          backgroundColor: hoveringInteractive ? "#10B981" : "#EF4444", // green on hover
          opacity: hoveringInteractive ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      />

      {/* Optional orbiting small ball */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "#F59E0B", // amber
          pointerEvents: "none",
          zIndex: 9999,
        }}
        animate={{
          x: springX.get() + 25 * Math.sin(mousePos.x / 15),
          y: springY.get() + 25 * Math.cos(mousePos.y / 15),
          scale: hoveringInteractive ? 0.3 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      />
    </>
  );
}
