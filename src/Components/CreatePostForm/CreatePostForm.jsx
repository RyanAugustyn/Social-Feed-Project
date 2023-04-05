import React, { useState } from 'react';
import './CreatePostForm.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const CreatePostForm = (props) => {
    const [userName, setUserName] = useState('');
    const [textBody, setTextBody] = useState('');


    function handleSubmit(event){
        event.preventDefault();
        let now = Date();
        let time = now.toLocaleString();
        time=time.substring(0, time.indexOf('-'));
        let newPost = {
            userName: userName,
            textBody: textBody,
            postTime: time, 
        };
        props.addNewPost(newPost);
        setUserName('');
        setTextBody('');
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