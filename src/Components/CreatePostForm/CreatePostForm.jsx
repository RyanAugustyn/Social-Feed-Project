import React, { useState } from 'react';
import './CreatePostForm.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const CreatePostForm = (props) => {
    const [userName, setUserName] = useState('');
    const [textBody, setTextBody] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            userName: userName,
            textBody: textBody
        };
        props.addNewPost(newPost);
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit} className='formBox'>
                <div className='form-group'>
                    <label>Name</label>
                    <input type='text' className='form-control' value={userName} onChange={(event) => setUserName(event.target.value)}/>
                </div>
                <div className='form-group, textBoxGrouping'>
                    <label>Post Here</label>
                    <input type='text' className='form-control' style={{height: 70}} value={textBody} onChange={(event) =>setTextBody(event.target.value)}/>
                    
                </div>
                <div>
                    <button type='submit' className='btn btn-primary submitBtn'>Shout!</button>
                </div>
            </form>
        </div>
     );
}
 
export default CreatePostForm;


//2 input fields (name and body), each bound to its own state variable