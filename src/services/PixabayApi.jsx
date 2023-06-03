import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api`;
const API_KEY = '34778993-135c0d8fc9cf3fbddda72c8be';

export default async function fetchImages(query, page) {
  const response = await axios.get(
    `/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
  );

  return response.data;
}
