import React, { useState } from 'react';
import Post from '../Post/Post';


const PostList = (props) => {

    //[entryList, setEntryList] = useState();

    return(
        <div>
        {props.mainPostList.map((entry) => {
            return(
                <div>{entry}</div>
            )})
        }
        </div>
    );

    }


 
export default PostList;

