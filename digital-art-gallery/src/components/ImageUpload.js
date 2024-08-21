import React, { useState } from "react";
import "./ImageUpload.css";

const categories = ["Paintings", "Photography", "Sculpture", "Digital Art"];
const ImageUpload = ({ onUpload }) => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage({
        src: imageUrl,
        title: "",
        description: "",
        category: categories[0],
      });
    }
  };

  const handleUpload = () => {
    if (image) {
      onUpload({ ...image, title, description, category });
      setImage(null);
      setTitle("");
      setDescription("");
      setCategory(categories[0]);
    }
  };

  return (
    <div className="image-upload">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <div className="image-upload-preview">
          <img src={image.src} alt="Preview" className="preview-image" />
          <div className="image-details">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-title"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input-description"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input-category"
            >
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <button onClick={handleUpload}>Upload Image</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
