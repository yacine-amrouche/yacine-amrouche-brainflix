import Video from "../Video/Video";
import CommentsForm from "../CommentsForm/CommentsForm";
import CommentsList from "../ CommentsList/CommentsList";

function VideoSelected({ videoItem }) {
  const {
    video,
    title,
    channel,
    views,
    description,
    timestamp,
    likes,
    image,
    comments=[],
  } = videoItem;
  return (
    <>
      <div className="video__selected">
        <Video
          video={video}
          title={title}
          channel={channel}
          views={views}
          description={description}
          timestamp={new Date(timestamp).toDateString()}
          likes={likes}
          image={image}
        />
      </div>
      <CommentsForm />
      <CommentsList comments={comments} />
    </>
  );
}
export default VideoSelected;


