import React from "react";
import "./ImageDetails.css";

const ImageDetails = ({ image, onClose }) => {
  return (
    <div className="image-details-overlay">
      <div className="image-details">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="image-container">
          <img src={image.src} alt={image.title} className="zoomable-image" />
        </div>
        <h2>{image.title}</h2>
        <p>
          <strong>Artist:</strong> {image.artist}
        </p>
        <p>
          <strong>Description:</strong> {image.description}
        </p>
      </div>
    </div>
  );
};

export default ImageDetails;
