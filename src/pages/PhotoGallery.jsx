import React, { useState } from 'react';
import axios from 'axios';
import './photoGallery.css'; // Import the CSS file
import NoItems from './Noitem';

const PhotoGallery = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = async () => {
    const API_KEY = '39006737-f8b07556eba6086469af84a93';
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`
    );
    setImages(response.data.hits);
    console.log(response)
  };

  return (
    <div className="photo-gallery">
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for images..."
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
     { 
     images.length===0? <NoItems/> :
     
     <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-container">
            <img
              src={image.webformatURL}
              alt={image.tags}
              className="gallery-image"
            />
            <div className="image-overlay">
              <p className="image-description">{image.tags}</p>
              <a
                href={image.largeImageURL}
                target="_blank"
                rel="noopener noreferrer"
                className="download-link"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>}
    </div>
  );
};

export default PhotoGallery;
