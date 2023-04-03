import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import NavBar from "./Components/NavBar/NavBar";
import Post from './Components/Post/Post';
import PostList from './Components/PostList/PostList';


function App() {

  const [posts, setPosts] = useState([]);

  function addNewPost(post){
    let tempPosts = [post, ...posts];
    console.log(tempPosts);
    setPosts(tempPosts);
  }


  return (
    <div >
      <NavBar />
      <CreatePostForm addNewPost={addNewPost}/>
      <PostList mainPostList ={posts}/>

    </div>
  );
}

export default App;
