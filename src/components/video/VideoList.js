import './VideoList.scss';
import VideoItem from '../video/VideoItem';
function VideoList({Videos}) {
    
    return (
        <div className='video__list'>
           {Videos.map((video) => 
            <VideoItem
                image= {video.image}
                title= {video.title}
               channel= {video.channel}
                
            />
            )}
        </div>
    )
    
};
export default VideoList;