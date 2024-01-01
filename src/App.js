
import './App.css';
import './app.scss';
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
   <div className='app__video'>
        <video className='app__post' controls poster={selectedVideo.image}></video>
    </div>
   <div className='app__main'>
        <div className='app__main-selected'><VideoSelected  videoItem={selectedVideo}/></div>
        <div className='app__main-list'><VideoList handelClick={setSelectedVideo} remain={remainVideos}/></div>
    </div>

   </>
  );
}

export default App;
