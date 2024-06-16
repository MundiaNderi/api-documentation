import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UnsplashDocs.css'; 

const UnsplashDocs = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      setPage(1);
      setPhotos([]);
      fetchPhotos(1, keyword); 
    }
  };

  const fetchPhotos = async (page, keyword) => {
    try {
      const accessKey = 'YzxOalE1DTHLmqYMPqYNOO7860YCiFgyARoh65C8EjI';
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { page, query: keyword },
        headers: {
          Authorization: `Client-ID ${accessKey}`
        }
      });
      console.log('Response:', response);
      setPhotos(response.data.results);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  useEffect(() => {
    if (keyword) {
      fetchPhotos(page, keyword);
    }
  }, [page, keyword]);

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
