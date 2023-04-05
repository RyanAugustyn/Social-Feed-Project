import React, { useState } from 'react';
import './DislikeBtn.css'

const DislikeBtn = (props) => {
    const [dislike, setDislike] = useState(false);

    
    function handleClick(){
        props.setLikeStatus(2)
        if(props.likeStatus === 1){
            setDislike(false);
        } else{
            setDislike(!dislike);
            
        }
        
        console.log(props.likeStatus);
    }

    return ( 
        <div>
            <button className='btn btn-primary' id='dislikeBtn'
            onClick={handleClick}>
                {dislike ? "DISLIKED!!!" : "Dislike?"}
            </button>
        </div>
     );
}
 
export default DislikeBtn;