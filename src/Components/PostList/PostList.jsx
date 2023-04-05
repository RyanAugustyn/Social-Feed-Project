import React from 'react';
import Post from '../Post/Post';
import './PostList.css'


const PostList = (props) => {

    return(
        <div className='postList'>
            {props.mainPostList.map((post, index) => {
                return (
                    <Post key={index} postProperty={post} />
                );
            })}
        </div>
     );

    }

export default PostList;

