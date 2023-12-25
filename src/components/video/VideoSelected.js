import Video from '../video/Video';

function VideoSelected({Videos}){
    return(
        <div className='video__selected'>
            {Videos.map((video) =>
            <Video
            video= {video.video}
            title= {video.title}
            channel= {video.channel}
            views= {video.views}
            description={video.description}
            timestamp={video.timestamp}
            likes={video.likes}

            />
            )}
        </div>
     




 )};
 export default VideoSelected;


