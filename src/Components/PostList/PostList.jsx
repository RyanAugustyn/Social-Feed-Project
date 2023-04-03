import React, { useState } from 'react';
import Post from '../Post/Post';


const PostList = (props) => {

    return(
        <div>
            {props.mainPostList.map((post, index) => {
                return (
                    <Post key={index} postProperty={post} />
                );
            })}
        </div>
     );

    }


 
export default PostList;

