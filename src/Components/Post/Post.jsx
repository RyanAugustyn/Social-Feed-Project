import React, { useState } from 'react';
import './Post.css';
import LikeBtn from '../LikeBtn/LikeBtn';
import DislikeBtn from '../DislikeBtn/DislikeBtn';




function handleSubmit(event){
    event.preventDefault();
}




const Post = (props) => {

const [likeDislike, setLikeDislike] = useState(0);


    return ( 
        <form onSubmit={handleSubmit} className='postBox'>
            <div className='postBoxDiv'>
                <div>
                    <h3 className='postName'>{props.postProperty.userName}</h3>
                    <p>{props.postProperty.postTime}</p>
                </div>
                <div className='postText'>   
                    <p >{props.postProperty.textBody}</p>
                </div>
                <div className='postBtns'>
                    <LikeBtn setLikeDislike={setLikeDislike}/>
                    <DislikeBtn />
                </div>
            </div>
        </form>   

    );
}
 
export default Post;
