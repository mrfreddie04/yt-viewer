import axios from "axios";

const API_KEY = "AIzaSyAPjcpNoPXsIV7wzQSLbcje1rWd8AnhSUc";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export default axios.create({
  baseURL: BASE_URL,
  params: { 
    part: "snippet",
    type: "video",
    maxResults: "5",
    key: API_KEY
  }
});
