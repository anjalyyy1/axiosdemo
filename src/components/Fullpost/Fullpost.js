import React from 'react';
import './Fullpost.css';
const Fullpost =(props) => {
   let post = <p style={{textAlign: 'center'}}>Please select a post</p>
   if(props.id){
    post = (
        <div className='fullpost'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className='delete' onClick={props.delete}>Delete</button>
        </div>
    );
   } 
   return post;
}

export default Fullpost;
