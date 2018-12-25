import React, { Component } from 'react';
import './Newpost.css';
import axios from 'axios';
class Newpost extends Component {
    state = { 
        title:'',
        content:'',
        author:'Anjali' 
    }
    postDataHandler = () => {
        console.log('hfbbhfbhvbfh');
        const post = {
            title: this.state.title,
            body: this.state.content,
            author : this.state.author
        }
        axios.post('https://jsonplaceholder.typicode.com/posts',post)
        .then((response)=>{
            console.log(response);
            //201 status code is successful
        })
    }
    
    render() { 
        return ( 
            <div className="newpost">
                <h2>Add a Post</h2>
                <h3>Title</h3>
                <input type='text' name='title' value={this.state.title} onChange={(e) => this.setState({title:e.target.value})}/>
                <h3>Content</h3>
                <input type='text' name='content' value={this.state.content} onChange={(e) => this.setState({content:e.target.value})}/>
                <h3>Author</h3>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}
 
export default Newpost;