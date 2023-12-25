import './CommentsList.scss';
import Comment from '../Comment/Comment';

function CommentsList(){
    const comments = [
        {id: 1, name: 'Micheal Lyons', timestamp: '08/09/2021', 
        comment: 'They BLEW the ROOF off at their last event once everyone started figuring out they were going. This is still simply the greatest opening of an event I haveEVER witnessed' },
        {id: 2, name: 'Gary Wong', timestamp: '07/15/2021', 
        comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish Ican ride like him one day so I can reallyenjoy myself!' },
        {id: 3, name: 'Theodore Duncan', timestamp: '07/11/2021', 
        comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!' },
    ];
   
    return(
        <div className='comments__container'>
            {comments.map((comment) => 
            <Comment
                key= {comment.id}
                name= {comment.name}
                timestamp= {comment.timestamp}
                comment= {comment.comment}
            />
            )}
        </div>
    )
};

export default CommentsList;