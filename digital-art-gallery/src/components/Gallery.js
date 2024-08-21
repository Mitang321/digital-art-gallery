import React, { useState } from "react";
import ImageDetails from "./ImageDetails";
import "./Gallery.css";

const Gallery = ({ images }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  const categories = [
    "All",
    "Paintings",
    "Photography",
    "Sculpture",
    "Digital Art",
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseDetails = () => {
    setSelectedImage(null);
  };

  const filteredImages = images.filter((image) => {
    const matchesCategory =
      selectedCategory === "All" || image.category === selectedCategory;
    const matchesSearchQuery = image.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearchQuery;
  });

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(
    indexOfFirstImage,
    indexOfLastImage
  );

  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="gallery">
      {selectedImage && (
        <ImageDetails image={selectedImage} onClose={handleCloseDetails} />
      )}
      <div className="filter-container">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="filter-select"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="gallery-grid">
        {currentImages.map((image, index) => (
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
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
