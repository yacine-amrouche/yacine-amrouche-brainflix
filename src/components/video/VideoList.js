import './VideoList.scss';
import './VideoList.scss';
import VideoItem from '../Video/VideoItem';
function VideoList({remain}) { //handelClick
    
    
    return (
        
        <>
        <h3 className='videolist__header'>NEXT VIDEOS</h3>
        <div className='video__list'>
           {remain.map((videoremain) => 
            <VideoItem
                key={videoremain.id}
                image= {videoremain.image}
                title= {videoremain.title}
               channel= {videoremain.channel}
               video={videoremain}
               //handel={() => handelClick(video)}
              
            />
            )}
        </div>
        </>
    )
    
};
export default VideoList;