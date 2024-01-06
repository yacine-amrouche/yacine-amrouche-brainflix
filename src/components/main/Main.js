
import './Main.scss';
import  { useState, useEffect } from "react";
import VideoSelected from '../Video/VideoSelected';
import VideoList from '../Video/VideoList';
//import Videos from '../../Assets/Data/video-details.json';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Main() {
  const [videos, setVideos] = useState([]);
  const {idParams} = useParams();
  console.log(idParams)
  

  //const defaultVideoId = Videos[0].id;
  let defaultVideoId = null;

  

  const videoIdToDisplay = idParams ?? defaultVideoId;

 const selectedVideo = videos.find(video=>video.id === videoIdToDisplay)


 // const [selectedVideo, setSelectedVideo] = useState(Videos[0]); handelClick={setSelectedVideo}
  const remainVideos = videos.filter(
   (video) => video.id !== videoIdToDisplay
  );
  useEffect(() =>{
    const getVideos = async () => {
      const response = await  axios.get('https://project-2-api.herokuapp.com/videos/?api_key=7e7da151-3bfe-4861-bd6f-dde6568e13aa');
      console.log(response)
      setVideos(response)
    }
    getVideos()
  }, []);
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