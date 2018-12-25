import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import Fullpost from '../../components/Fullpost/Fullpost';
import Newpost from '../../components/Newpost/Newpost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state= {
        posts: [],
        clickedPostId : null,
        error: false
    }
    componentDidMount() {
        // we can cause side effects here in compdidmount function
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Anjali'
                }
            })
            console.log(response.data);
            this.setState({
                posts: updatedPosts
            })
        })
        .catch((err)=> {
            console.log(err);
            this.setState({
                error: true
            })
        })
    }
    postClickHandler = (id,title,body) => {
        this.setState({
            clickedPostId : id,
            title: title,
            body: body
        })
    }

    deletePosthandler = (id) => { 
        console.log('post deleteed');
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            console.log(response);
        });
    }
    render () {
        // we make a variable posts and override it only when thr are no errors
        let posts = <p style={{textAlign:'center'}}>Something went wrong</p>
        if(!this.state.error) {
             posts = this.state.posts.map((post)=>{
                return <Post 
                title={post.title} 
                key={post.id} 
                author={post.author}
                clicked={() => this.postClickHandler(post.id,post.title,post.body)}/>;
            });
        }
        
        return (
            <div>
                <section className="Posts"> 
                    {posts}
                </section>
                <section>   
                    <Fullpost id={this.state.clickedPostId} title={this.state.title} content={this.state.body} delete={() => this.deletePosthandler(this.state.clickedPostId)}/>
                </section>
                <section>
                    <Newpost />
                </section>
            </div>
        );
    }
}

export default Blog;