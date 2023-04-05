import React, { useState } from 'react';
import './LikeBtn.css'

const LikeBtn = (props) => {
    const [color, setColor] = useState(false);


    function handleClick(){
        props.setLikeStatus(!props.likeStatus);
        if(props.dislikeStatus){
            props.setDislikeStatus(false);
        }
        if(color == ''){
            setColor('likeBtn');
        }
        else if(color == 'likeBtn'){
            setColor('');
        }
    }

    return ( 
        <div className='likeBtn'>
            <button className='btn btn-primary' id={color}
            onClick={handleClick}>
                {props.likeStatus ? "LIKED!" : "Like?"}
            </button>
        </div>
     );
}
 
export default LikeBtn;