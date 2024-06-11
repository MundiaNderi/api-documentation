// src/components/UnsplashExample.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UnsplashDocs = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get('https://api.unsplash.com/photos', {
        headers: {
          Authorization: 'Client-ID YOUR_ACCESS_KEY'
        }
      });
      setPhotos(response.data);
    };
    fetchPhotos();
  }, []);

  return (
    <div>
      <h1>Unsplash API Example</h1>
      <div>
        {photos.map(photo => (
          <img key={photo.id} src={photo.urls.thumb} alt={photo.description} />
        ))}
      </div>
    </div>
  );
};

export default UnsplashDocs;
