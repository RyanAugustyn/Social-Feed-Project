import React, { useState } from 'react';

const DislikeBtn = (props) => {
    const [dislike, setDislike] = useState(false);

    function pressLike(likeStatus){
        if (likeStatus == 0){

        }
    }

    return ( 
        <div>
            <button className='btn btn-primary'
            onClick={() => setDislike((current) => !current)}>
                {dislike ? "DISLIKED!!!" : "Dislike?"}
            </button>
        </div>
     );
}
 
export default DislikeBtn;