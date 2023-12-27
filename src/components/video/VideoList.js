import './VideoList.scss';
import VideoItem from '../Video/VideoItem';
function VideoList({remain, handelClick}) {
    
    
    return (
        <div className='video__list'>
           {remain.map((video) => 
            <VideoItem
                key={video.id}
                image= {video.image}
                title= {video.title}
               channel= {video.channel}
               handel={() => handelClick(video)}
              
            />
            )}
        </div>
    )
    
};
export default VideoList;