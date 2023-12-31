import './CommentsList.scss';
import Comment from '../Comment/Comment';

function CommentsList({comments}){
   
    return(
        <div className='comments__container'>
            {comments.map((comment) => 
            <Comment
                key= {comment.id}
                name= {comment.name}
                timestamp= {new Date(comment.timestamp).toDateString()}
                comment= {comment.comment}
            />
            )}
        </div>
    )
};

export default CommentsList;