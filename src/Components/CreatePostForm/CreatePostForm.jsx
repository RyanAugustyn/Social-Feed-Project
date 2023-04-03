import React, { useState } from 'react';

const CreatePostForm = (props) => {
    const [userName, setUserName] = useState('');
    const [textBody, setTextBody] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            userName: userName,
            textBody: textBody
        };
        console.log(newPost);
        props.addNewPost(newPost);
    }

    return ( 
        <form onSubmit={handleSubmit} >
            <div>
                <label>Name</label>
                <input type='text' value={userName} onChange={(event) => setUserName(event.target.value)}/>
            </div>
            <div>
                <label>Post Here</label>
                <input type='text' value={textBody} onChange={(event) =>setTextBody(event.target.value)}/>
            </div>
            <button type='submit'>Shout!</button>
        </form>
     );
}
 
export default CreatePostForm;


//2 input fields (name and body), each bound to its own state variable