
import axios from 'axios';

const UNSPLASH_API_URL = 'https://api.unsplash.com';
const accessKey = import.meta.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const fetchPhotos = async (query) => {
  try {
    const response = await axios.get(`${UNSPLASH_API_URL}/search/photos`, {
      params: { query },
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching photos from Unsplash:', error);
    throw error;
  }
};
