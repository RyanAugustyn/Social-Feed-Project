import React, { useState } from 'react';
import './LikeBtn.css'

const LikeBtn = (props) => {
    const [like, setLike] = useState(false);

    return ( 
        <div className='likeBtn'>
            <button className='btn btn-primary'
            onClick={() => setLike((current) => !current)}>
                {like ? "LIKED!" : "Like?"}
            </button>
        </div>
     );
}
 
export default LikeBtn;