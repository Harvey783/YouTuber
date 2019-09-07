import axios from 'axios';
const KEY = 'AIzaSyD3dTpaUqaFRGTjnoHy63WKXVUbQNY5alY';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    maxResults: 5,
    key: KEY,
    part: 'snippet'
  }
});
