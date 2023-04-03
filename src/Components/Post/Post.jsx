//template of what the post will look like 

import React, { useState } from 'react';

function handleSubmit(event){
    event.preventDefault();
}

const Post = (props) => {

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <h3>{props.postProperty.userName}</h3>
                <p>{props.postProperty.textBody}</p>
                <button>LIKE IMG</button>
            </div>
        </form>



    

    );
}
 
export default Post;
