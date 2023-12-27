import './Video.scss';
import heart from '../../Assets/Icons/likes.svg';
import eye from '../../Assets/Icons/views.svg';

function video ({title, channel, video, timestamp, likes, views, description, image, comments}) {
    return (
        <section className='video'>
            {/*<video className='video__post' controls poster={video}></video>*/}
            <img className='video__post' src={image} alt='user_view'></img>
            <h1 className='video__heading'>{title}</h1>
            <div className='video__decription'>
                <div className='video__container'>
                    <p className='video__maker'>By {channel}</p>
                    <p className='video__date'>{timestamp}</p>
                </div>
                <div className='video__container'>
                        <div className='video__container--views'>
                            <img className='views--img' src={eye} alt='user-view'></img>
                            <p className='views--number'>{views}</p>
                        </div>
                        <div className='video__container--likes'>
                            <img className='likes--img' src={heart} alt='user-likes'></img>
                            <p className='likes--number'>{likes}</p>
                        </div>
                </div>

            </div>
            <p className='video__info'>{description}</p>
        </section>
    )
};

export default video;