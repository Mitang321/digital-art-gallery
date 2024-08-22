import React, { useState } from "react";
import ImageDetails from "./ImageDetails";
import ImageUpload from "./ImageUpload";
import "./Gallery.css";

const Gallery = ({ images }) => {
  const [imageList, setImageList] = useState(images || []);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [dateRange, setDateRange] = useState("All Time");
  const imagesPerPage = 6;

  const categories = [
    "All",
    "Paintings",
    "Photography",
    "Sculpture",
    "Digital Art",
  ];
  const dateRanges = ["All Time", "Last Week", "Last Month", "Last Year"];

  const filterByDate = (date) => {
    const today = new Date();
    const imageDate = new Date(date);
    switch (dateRange) {
      case "Last Week":
        return today - imageDate <= 7 * 24 * 60 * 60 * 1000;
      case "Last Month":
        return today - imageDate <= 30 * 24 * 60 * 60 * 1000;
      case "Last Year":
        return today - imageDate <= 365 * 24 * 60 * 60 * 1000;
      case "All Time":
      default:
        return true;
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseDetails = () => {
    setSelectedImage(null);
  };

  const handleUpload = (newImage) => {
    setImageList([...imageList, newImage]);
  };

  const filteredImages = imageList.filter((image) => {
    const matchesCategory =
      selectedCategory === "All" || image.category === selectedCategory;
    const matchesSearchQuery = image.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDateRange = filterByDate(image.date);

    return matchesCategory && matchesSearchQuery && matchesDateRange;
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

  const handleDateRangeChange = (e) => {
    setDateRange(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="gallery">
      <ImageUpload onUpload={handleUpload} />
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
        <select
          value={dateRange}
          onChange={handleDateRangeChange}
          className="date-filter"
        >
          {dateRanges.map((range, index) => (
            <option key={index} value={range}>
              {range}
            </option>
          ))}
        </select>
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
        <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
          First
        </button>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
        <button
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default Gallery;
