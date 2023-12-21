import './Video.scss';
import heart from '../../Assets/Icons/likes.svg';
import eye from '../../Assets/Icons/views.svg';

function video () {
    return (
        <section className='video'>
            <video className='video__post' controls poster='true'></video>
            <h1 className='video__heading'>BMX Rmapage: 2021 highlights</h1>
            <div className='video__decription'>
                <div className='video__container'>
                    <p className='video__maker'>By Red Crow</p>
                    <p className='video__date'>07/11/2021</p>
                </div>
                <div className='video__container'>
                        <div className='video__container--views'>
                            <img className='views--img' src={eye}></img>
                            <p className='views--number'>1,001,023</p>
                        </div>
                        <div className='video__container--likes'>
                            <img className='likes--img' src={heart}></img>
                            <p className='likes--number'>110,985</p>
                        </div>
                </div>

            </div>
            <p className='video__info'>
                On a gusty day in Southern Utah, a group of 25
                daring mountain bikers blew the doors off what
                is possible on two wheels, unleashing some of
                the biggest moments the sport has ever seen.
                While mother nature only allowed for one full run
                before the conditions made it impossible to ride,
                that was all that was needed for event veteran
                Kyle Strait, who won the event for the second
                time -- eight years after his first Red Cow
                Rampage title

            </p>
        </section>
    )
};

export default video;