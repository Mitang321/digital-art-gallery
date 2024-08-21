import React, { useState } from "react";
import "./ImageDetails.css";

function ImageDetails({ image, onClose }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [likes, setLikes] = useState(image.likes || 0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(image.comments || []);

  if (!image || !image.src) {
    return null;
  }

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
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
          <button onClick={handleLike}>Like ({likes})</button>
          <button>Share on Facebook</button>
          <button>Share on Twitter</button>
        </div>
        <div className="comments-section">
          <h3>Comments</h3>
          <div className="comments-list">
            {comments.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Add a comment..."
          ></textarea>
          <button onClick={handleAddComment}>Add Comment</button>
        </div>
      </div>
    </div>
  );
}

export default ImageDetails;
