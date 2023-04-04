import React from 'react';
import './Post.css';
import LikeBtn from '../LikeBtn/LikeBtn';

function handleSubmit(event){
    event.preventDefault();
}

const Post = (props) => {

    return ( 
        <form onSubmit={handleSubmit} className='postBox'>
            <div className='postBoxDiv'>
                <div>
                    <h3 className='postName'>{props.postProperty.userName}</h3>
                </div>
                <div>   
                    <p className='postText'>{props.postProperty.textBody}</p>
                </div>
                <div>
                    <LikeBtn />
                </div>
            </div>
        </form>   

    );
}
 
export default Post;
