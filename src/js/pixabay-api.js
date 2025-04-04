import axios from 'axios';

const API_KEY = '49652753-628f6ab7e356d597b0d2f9b26';
const BASE_URL = 'https://pixabay.com/api/';

export function searchImages(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits)
    .catch(error => {
      console.log('Error fetching images:', error.message);
      return [];
    });
}
