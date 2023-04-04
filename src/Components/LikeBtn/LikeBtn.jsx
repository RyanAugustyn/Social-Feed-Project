import React, { useState } from 'react';

const LikeBtn = (props) => {
    const [like, setLike] = useState(0);

    function pressLike(likeStatus){
        if (likeStatus == 0){

        }
    }

    return ( 
        <div>
            <div className='form-check'>
                <input type="radio" id='like'name='likegroup'></input>
                <label for='like'><img src="../../../public/mod-like-btn" alt="like button" /></label>
            </div>
            <div className='form-check'>
                <input type="radio" id='dislike'name='likegroup'></input>
                <label for='dislike'>DISLIKE IMG</label>
            </div>
            
        </div>
     );
}
 
export default LikeBtn;