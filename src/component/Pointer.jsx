import { useState } from "react";

export default function Pointer() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handlePointerMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
      onPointerMove={handlePointerMove}
    >
      <div
        style={{
          position: "relative",
          borderRadius: "50%",
          backgroundColor: "red",
          width: 20,
          height: 20,
          left: -10,
          top: -10,
          transform: `translate(${position.x}px,${position.y}px)`,
        }}
      ></div>
    </div>
  );
}
