import React, { useState } from "react";
import ImageDetails from "./ImageDetails";
import "./Gallery.css";

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseDetails = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {selectedImage && (
        <ImageDetails image={selectedImage} onClose={handleCloseDetails} />
      )}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image.src}
              alt={`uploaded-${index}`}
              className="gallery-image"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
