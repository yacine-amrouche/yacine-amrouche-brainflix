import './CommentsList';

function CommentsList(){
    const comments = [
        {name: 'Micheal Lyons', timestamp: '08/09/2021', 
        comment: 'They BLEW the ROOF off at their last event once everyone started figuring out they were going. This is still simply the greatest opening of an event I haveEVER witnessed' },
        {name: 'Gary Wong', timestamp: '07/15/2021', 
        comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish Ican ride like him one day so I can reallyenjoy myself!' },
        {name: 'Theodore Duncan', timestamp: '07/11/2021', 
        comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!' },
    ];
    console.log(comments);
    return(
        <div className='comments__container'>
            {comments.map((comment) => 
            <comment
                name= {comment.name}
                timestamp= {comment.timestamp}
                comment= {comment.comment}
            />
            )}
        </div>
    )
};

export default CommentsList;