import React from "react";
import "./ImageDetails.css";

const ImageDetails = ({ image, onClose }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <button onClick={onClose} className="close-button">
          Close
        </button>
        <img src={image.src} alt="Detailed view" className="modal-image" />
        <h2 className="modal-title">{image.title}</h2>
        <p className="modal-description">{image.description}</p>
      </div>
    </div>
  );
};

export default ImageDetails;
