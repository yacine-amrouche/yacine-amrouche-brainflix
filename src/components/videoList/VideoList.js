import { useState, useEffect } from "react";
import axios from "axios";
import "./VideoList.scss";
import VideoItem from "../videoItem/VideoItem";

function VideoList({ selectedVideoId }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const response = await axios.get(
        `http://localhost:8080/videos`
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