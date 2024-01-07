import './UploadPage.scss';
import uploadVideo from '../../Assets/Images/Upload-video-preview.jpg'
import publish from '../../Assets/Icons/publish.svg'
import { Link } from 'react-router-dom';

function UploadPage(){
    return(
        <>
        <h1 className='upload__heading'>Upload Video</h1>
        <div className='upload'>
                <div className='upload__img'>
                    <p className='img--heading'>VIDEO THUMBNAIL</p>
                    <img className='img--image' src={uploadVideo} alt='uploadvideo'></img>
                </div>
                <div className='upload__form'>
                        <form className='upload__form--main'>
                                <p className='form__titel'>TITLE YOUR VIDEO</p>
                                <textarea className='form__input--titel'placeholder='Add a title to your video'>
                                </textarea>
                                <p className='form__titel'>ADD A VIDEO DESCRIPTION</p>
                                <textarea className='form__input'placeholder='Add a description to your video'>
                                </textarea>
                            
                        </form>
                </div>
        </div>        
        <div className='form__btn'>
                            <Link to="/submitpage" ><button className='form__button'>
                                    <img src={publish} alt='user plus' className='btn--img'></img>
                                    PUBLISH
                                </button></Link> 
                                <button className='form__button--cancel'>CANCEL</button>
               
        </div>
                          
       
        </>
    )
}
export default UploadPage;