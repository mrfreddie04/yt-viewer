import {useState, useEffect} from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    console.log("EV",defaultSearchTerm);
    search(defaultSearchTerm);
  },[defaultSearchTerm]);  

  const search = async (term) => {
      const response = await youtube.get("/search", { params: { q: term } } );
      console.log("V",response.data.items);
      setVideos(response.data.items);
  }

  console.log("R",videos)
  return [videos, search];
}

export default useVideos;