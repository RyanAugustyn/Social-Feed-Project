import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import NavBar from "./Components/NavBar/NavBar";
import PostList from './Components/PostList/PostList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  const [posts, setPosts] = useState([]);

  function addNewPost(post){
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div  className='border'>
      <NavBar />
      <div className='inputForm'>
        <CreatePostForm addNewPost={addNewPost}/>
      </div>
      <PostList mainPostList = {posts}/>
    </div>
  );
}

export default App;
