import './SubmitPage.scss';
import submit from '../../Assets/Icons/submit-successfully.svg';



function SubmitPage(){
    return(
        <>
        <div className='sumbit'>
            <img className='submit__img' src={submit} alt='user-submit'></img>
            <h1 className='submit__header'>THANK YOU!</h1>
            <p className='submit__info'>your video has been submitted</p>
        </div>
        </>
          

    )
}
export default SubmitPage;