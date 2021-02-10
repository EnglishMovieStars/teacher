import axios from 'axios';
const KEY = 'AIzaSyCUt9h05toXEgczS4viCr4ZtsUgl7PUrgo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})