import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UnsplashDocs.css'; // Assuming you have custom styles in UnsplashDocs.css

const UnsplashDocs = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const accessKey = 'YzxOalE1DTHLmqYMPqYNOO7860YCiFgyARoh65C8EjI';
        const response = await axios.get(`https://api.unsplash.com/photos?page=${page}&query=${keyword}`, {
          headers: {
            Authorization: `Client-ID ${accessKey}`
          }
        });
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };
    fetchPhotos();
  }, [keyword, page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1); // Reset page to 1 when submitting the form
    setKeyword('');
    fetchPhotos();
  };

  const handleShowMore = () => {
    setPage(page + 1); // Increment page to fetch next set of images
  };

  return (
    <div className='mx-auto px-4 md:px-32'>
      <h1 className='py-4 text-center font-bold text-veryDarkBlue'>Unsplash API Example</h1>
      <form onSubmit={handleSubmit} id="search-form" className='my-4 flex justify-center '>
        <input
          type="text"
          id="search-box"
          placeholder="Search anything here..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className='px-4 p-3 bg-veryDarkBlue text-white rounded-md cursor-pointer'>Search</button>
      </form>
      <div className='search-result grid grid-cols-3'>
        {photos.map(photo => (
          <div key={photo.id} className=''>
            <img src={photo.urls.thumb} alt={photo.description} />
          </div>
        ))}
      </div>
      <div className='flex mb-4 justify-center'>
        <button onClick={handleShowMore} className='px-4 py-2 p-3 bg-veryDarkBlue text-white rounded-full'>Show more</button>
      </div>
    </div>
  );
};

export default UnsplashDocs;
