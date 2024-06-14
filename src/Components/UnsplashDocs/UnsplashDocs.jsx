import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UnsplashDocs = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const accessKey = import.meta.env.REACT_APP_UNSPLASH_ACCESS_KEY;
        const response = await axios.get('https://api.unsplash.com/photos', {
          headers: {
            Authorization: `Client-ID ${accessKey}`
          }
        });
        console.log(response.data); // Log the data before setting it
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
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
