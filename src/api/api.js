import axios from 'axios';
const KEY = 'AIzaSyAfOb0wmpjqxGRC9pSSzlzgP8m_54xy_E8';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    maxResults: 5,
    key: KEY,
    part: 'snippett'
  }
});
