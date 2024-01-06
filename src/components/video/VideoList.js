import { useState, useEffect } from "react";
import axios from "axios";
import "./VideoList.scss";
import VideoItem from "../Video/VideoItem";

function VideoList({ selectedVideoId }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos/?api_key=7e7da151-3bfe-4861-bd6f-dde6568e13aa`
      );
      setVideos(response.data);
    };
    getVideos();
  }, []);

  const remainVideos = videos.filter((video) => video.id !== selectedVideoId);

  return (
    <>
      <h3 className="videolist__header">NEXT VIDEOS</h3>
      <div className="video__list">
        {remainVideos.map((videoremain) => (
          <VideoItem
            key={videoremain.id}
            image={videoremain.image}
            title={videoremain.title}
            channel={videoremain.channel}
            video={videoremain}
            //handel={() => handelClick(video)}
          />
        ))}
      </div>
    </>
  );
}
export default VideoList;