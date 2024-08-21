import React, { useState } from "react";
import "./ImageUpload.css";

const ImageUpload = ({ onUpload }) => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage({ src: imageUrl, title: "", description: "" });
    }
  };

  const handleUpload = () => {
    if (image) {
      onUpload({ ...image, title, description });
      setImage(null);
      setTitle("");
      setDescription("");
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
            <button onClick={handleUpload}>Upload Image</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
