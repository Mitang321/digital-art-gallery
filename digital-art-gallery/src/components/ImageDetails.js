import React, { useState } from "react";
import "./ImageDetails.css";

function ImageDetails({ image, onClose }) {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!image || !image.src) {
    return null;
  }

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="image-details-overlay" onClick={onClose}>
      <div className="image-details" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="image-container">
          <img
            src={image.src}
            alt={image.title || "Image"}
            className={`zoomable-image ${isZoomed ? "zoomed" : ""}`}
            onClick={handleZoomToggle}
          />
        </div>
        <h2>{image.title || "No Title"}</h2>
        <p>{image.description || "No Description"}</p>
        <div className="social-sharing">
          <button>Share on Facebook</button>
          <button>Share on Twitter</button>
        </div>
      </div>
    </div>
  );
}

export default ImageDetails;
