import React from "react";

export default function Gallery() {
  // Import all cathedral images eagerly
  const images = Object.values(
    import.meta.glob("../assets/cathedral*.jpg", { eager: true })
  );

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img.default}
          alt={`Cathedral ${index + 1}`}
          style={{ width: "200px", height: "auto", borderRadius: "8px" }}
        />
      ))}
    </div>
  );
}
