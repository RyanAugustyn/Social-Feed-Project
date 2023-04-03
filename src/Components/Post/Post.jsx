//template of what the post will look like 

import React, { useState } from 'react';
import CreatePostForm from '../CreatePostForm/CreatePostForm';

function handleSubmit(event){
    event.preventDefault();
}

const Post = (props) => {


    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <h3>{props.userName}</h3>
                <p>{props.textBody}</p>
                <button>LIKE IMG</button>
            </div>
        </form>



    

    );
}
 
export default Post;
