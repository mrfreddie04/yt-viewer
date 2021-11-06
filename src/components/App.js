import React, {useState, useEffect} from "react";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [videos, search] = useVideos("history of the universe");
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(()=>{
    console.log("AV");
    setSelectedVideo(videos[0]);
  },[videos]);

  console.log("Render");
  return(
    <div className="ui container" style={{marginTop: "10px"}}>
      <SearchBar onFormSubmit={search}/> 
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={selectedVideo}/>
          </div>  
          <div className="six wide column">
            <VideoList 
              videos={videos} 
              onVideoSelect={setSelectedVideo} 
            />
          </div>
        </div>
      </div>
    </div>
  );  
}

export default App;

// class App1 extends React.Component {
//   state = {
//             videos: [], 
//             selectedVideo: null,
//             err: ""
//           };

//   onTermSubmit = async (term) => {
//     try {
//       const response = await youtube.get("/search", { params: { q: term } } )
//       if(response.status !== 200) throw new Error( response.statusText || "Failed to get videos");      
//       this.setState({
//         videos: response.data.items,
//         selectedVideo: response?.data?.items[0] ?? null
//       });
      
//     } catch(err) {
//       this.setState({err: err.message});
//     } 
//   }

//   onVideoSelect = (video) => {
//     console.log("From onVideoSelect:",video);
//     this.setState({selectedVideo: video});
//   }

//   componentDidMount() {
//     this.onTermSubmit("history of the universe");
//   }

//   render() {
//     return(
//       <div className="ui container" style={{marginTop: "10px"}}>
//         <SearchBar onFormSubmit={this.onTermSubmit}/> 
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="ten wide column">
//               <VideoDetail video={this.state.selectedVideo}/>
//             </div>  
//             <div className="six wide column">
//               <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// } 


