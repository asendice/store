import axios from 'axios';

// api key AIzaSyAcRNeo2y1FR9xfGZT-9b3P-I3nkB7Q0h0
const KEY = "AIzaSyAcRNeo2y1FR9xfGZT-9b3P-I3nkB7Q0h0"

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
      part: 'snippet',
      type: 'video',
      maxResults: 25,
      key: KEY
  }
})