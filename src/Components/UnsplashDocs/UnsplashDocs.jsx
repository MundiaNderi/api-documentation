import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UnsplashDocs.css';

const UnsplashDocs = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const accessKey = 'YzxOalE1DTHLmqYMPqYNOO7860YCiFgyARoh65C8EjI'; 

  const fetchPhotos = async () => {
    setLoading(true);
    setError(null);

    try {
      let url = `https://api.unsplash.com/photos?page=${page}`;

      if (keyword) {
        url = `https://api.unsplash.com/search/photos?page=${page}&query=${encodeURIComponent(keyword)}`;
      }

      const response = await axios.get(url, {
        headers: {
          Authorization: `Client-ID ${accessKey}`
        }
      });

      const data = keyword ? response.data.results : response.data;
      setPhotos(prevPhotos => [...prevPhotos, ...data]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching photos:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [keyword, page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setPhotos([]);
    fetchPhotos();
  };

  const handleShowMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className='mx-auto px-4 md:px-32'>
      <h1 className='py-4 text-center font-bold text-veryDarkBlue'>Unsplash API Example</h1>
      <form onSubmit={handleSubmit} id="search-form" className='my-4 flex justify-center '>
        <input
          type="text"
          id="search-box"
          name="keyword"
          placeholder="Search anything here..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit" className='px-4 p-3 bg-veryDarkBlue text-white rounded-md cursor-pointer'>Search</button>
      </form>
      {error && <p className='text-red-600 text-center'>Error: {error}</p>}
      <div className='search-result grid grid-cols-3 gap-4'>
        {photos.map((photo, index) => (
          <div key={`${photo.id}-${index}`} className=''>
            <img src={photo.urls.thumb} alt={photo.alt_description || 'Unsplash Photo'} />
          </div>
        ))}
      </div>
      {!loading && photos.length > 0 && (
        <div className='flex mb-4 justify-center'>
          <button onClick={handleShowMore} className='px-4 py-2 p-3 bg-veryDarkBlue text-white rounded-full'>Show more</button>
        </div>
      )}
      {loading && <p className='text-center'>Loading...</p>}
    </div>
  );
};

export default UnsplashDocs;
