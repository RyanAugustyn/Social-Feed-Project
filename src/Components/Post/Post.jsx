import React, {state, useState} from 'react';
import './Post.css';
import LikeBtn from '../LikeBtn/LikeBtn';
import DislikeBtn from '../DislikeBtn/DislikeBtn';




function handleSubmit(event){
    event.preventDefault();
}

const Post = (props) => {

    const [likeStatus, setLikeStatus] = useState(0);

    
    return ( 
        <form onSubmit={handleSubmit} className='postBox'>
            <div className='postBoxDiv'>
                <div className='nameDate'>
                    <h3 className='postName'>{props.postProperty.userName}</h3>
                    <p>{props.postProperty.postTime}</p>
                </div>
                <div className='postText'>   
                    <p style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{props.postProperty.textBody}</p>
                </div>
                <div className='postBtns'>
                    <LikeBtn likeStatus={props.postProperty.toggleLike} setLikeStatus={props.postProperty.toggleFunc}/>
                    <DislikeBtn likeStatus={props.postProperty.toggleLike} setLikeStatus={props.postProperty.toggleFunc}/>
                </div>
            </div>
        </form>   

    );
}
 
export default Post;
