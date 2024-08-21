import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  const handleUpload = (image) => {
    setImages([...images, image]);
  };

  return (
    <div className="App">
      <h1>Digital Art Gallery</h1>
      <ImageUpload onUpload={handleUpload} />
      <Gallery images={images} />
    </div>
  );
}

export default App;
