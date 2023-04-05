import React, { useState } from 'react';
import './LikeBtn.css'

const LikeBtn = (props) => {
    const [like, setLike] = useState(false);


    function handleClick(){
        props.setLikeStatus(1);
        if(props.likeStatus === 2){
            setLike(false);
        } else{
            setLike(!like);  
        }
        console.log(props.likeStatus);
    }

    return ( 
        <div className='likeBtn'>
            <button className='btn btn-primary' id='likeBtn'
            onClick={handleClick}>
                {props.likeStatus ? "LIKED!" : "Like?"}
            </button>
        </div>
     );
}
 
export default LikeBtn;