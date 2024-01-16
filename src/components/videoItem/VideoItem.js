import './VideoItem.scss';
import { Link } from 'react-router-dom';

function VideoItem({video}){ //handel ,line 9 onClick={handel}
    
    return(
        <>
       
        <Link to={`/video/${video.id}`}
                className="video__list" >  
                <div className='video__list--img'>
                    <img className="video__img" src={video.image} alt="user_video"></img>
                </div>
                
                <div className="video__list--info">
                    <p className="video__title">{video.title}</p>
                    <p className="video__channel">{video.channel}</p>

                </div>
        
        </Link>
        </>
    )
};

export default VideoItem;