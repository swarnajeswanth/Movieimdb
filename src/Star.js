import React from "react";
const svg_style = {
  display: "inline-block",
  cursor: "pointer",
};
export default function Star({
  onRate,
  full,
  onHoverIn,
  onHoverOut,
  stroke = "#000000",
  fill = "#ffffff",
  width = "50px",
  height = "49px",
}) {
  return (
    <span
      role="button"
      style={svg_style}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width={width}
          height={height}
          fill={stroke}
          stroke={stroke}
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      )}
    </span>
  );
}
