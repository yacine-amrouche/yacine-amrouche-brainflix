
import './App.css';
import  { useState } from "react";
import Header from './components/header/Header';
import VideoSelected from './components/Video/VideoSelected';
import VideoList from './components/Video/VideoList';
import Videos from './Assets/Data/video-details.json';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(Videos[0]);
  const remainVideos = Videos.filter(
    (video) => video.id !== selectedVideo.id
  );
  return (
   <>
   <Header />
   <VideoSelected 
   videoItem={selectedVideo}/>
  
   <VideoList handelClick={setSelectedVideo} remain={remainVideos}/>

   </>
  );
}

export default App;
