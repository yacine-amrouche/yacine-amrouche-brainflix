import './VideoItem.scss';

function VideoItem({image, title, channel, handel}){
    return(
        <div className="video__list" onClick={handel}>
            <div className='video__list--img'>
                 <img className="video__img" src={image} alt="user_video"></img>
            </div>
            
            <div className="video__list--info">
                <p className="video__title">{title}</p>
                <p className="video__channel">{channel}</p>

            </div>
        </div>
    )
};

export default VideoItem;