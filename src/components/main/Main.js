
import './Main.scss';
import  { useState } from "react";
import VideoSelected from '../Video/VideoSelected';
import VideoList from '../Video/VideoList';
import Videos from '../../Assets/Data/video-details.json';
import { useParams } from 'react-router-dom';


function Main() {
  const {idParams} = useParams();
  console.log(idParams);

  const defaultVideoId = Videos[0].id;
  

  const videoIdToDisplay = idParams ?? defaultVideoId;

 const selectedVideo = Videos.find(video=>video.id === videoIdToDisplay)


 // const [selectedVideo, setSelectedVideo] = useState(Videos[0]); handelClick={setSelectedVideo}
  const remainVideos = Videos.filter(
   (video) => video.id !== videoIdToDisplay
  );
  return (
   <>
  
  
   <div className='app__video'>
        <video className='app__post' controls poster={selectedVideo.image}></video>
    </div>
   <div className='app__main'>
        <div className='app__main-selected'><VideoSelected  videoItem={selectedVideo}/></div>
        <div className='app__main-list'><VideoList  remain={remainVideos}/></div>
    </div>
   

   </>
  );
}

export default Main;