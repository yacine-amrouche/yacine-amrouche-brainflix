import './UploadPage.scss';
import uploadVideo from '../../Assets/Images/Upload-video-preview.jpg'
import publish from '../../Assets/Icons/publish.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function UploadPage(){
    const [title, setTitel] = useState('');
    const [channel, setChannel] = useState('');
    const [image, setImage] = useState('');
   

  
    const handelSubmit = async (e) =>{
       e.preventDefault();
       console.log(title, channel, image);
       try{
        const response = await axios.post(`http://localhost:8080/videos`, {title: title, channel: channel, image:image});
        console.log(response.data)
       } catch (err){
        console.log(err);
       }
    };
    return(
        <>
        <h1 className='upload__heading'>Upload Video</h1>
        <div className='upload'>
                <div className='upload__img'>
                    <p className='img--heading'>VIDEO THUMBNAIL</p>
                    <img className='img--image' src={uploadVideo} alt='uploadvideo' value={image} onChange={(e) => setImage(e.target.value)} ></img>
                </div>
                <div className='upload__form'>
                        <form className='upload__form--main'onSubmit={handelSubmit} >
                                <p className='form__titel'>TITLE YOUR VIDEO</p>
                                <input value={title} onChange={(e) => setTitel(e.target.value)} className='form__input--titel' placeholder='Add a title to your video'>
                                </input>
                                <p className='form__titel'>ADD A VIDEO DESCRIPTION</p>
                                <input value={channel} onChange={(e) => setChannel(e.target.value)} className='form__input' placeholder='Add a description to your video'>
                                </input>
                            
                        </form>
                </div>
        </div>        
        <div className='form__btn'>
                            <Link to="/submitpage" ><button onClick={handelSubmit} className='form__button'>
                                    <img src={publish} alt='user plus' className='btn--img'></img>
                                    PUBLISH
                                </button></Link> 
                                <button className='form__button--cancel'>CANCEL</button>
               
        </div>
                          
       
        </>
    )
}
export default UploadPage;