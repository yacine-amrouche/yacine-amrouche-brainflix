
import './App.css';
//import  { useState } from "react";
import Header from './components/header/Header';
import VideoSelected from './components/video/VideoSelected';
import CommentsForm from './components/CommentsForm/CommentsForm';
import CommentsList from './components/ CommentsList/CommentsList';
import VideoList from './components/video/VideoList';
import Videos from './Assets/Data/video-details.json';

function App() {
  //const [selectedVideo, setSelectedVideo] = useState(Videos)
  return (
   <>
   <Header />
   <VideoSelected Videos={Videos}/>
   <CommentsForm />
   <CommentsList />
   <VideoList Videos={Videos} />

   </>
  );
}

export default App;
