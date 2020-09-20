import React, { Component } from 'react';
import {Button,Form} from 'react-bootstrap';
class PostForm extends Component {
    state={ 
        post: ''
    }

    postsChangeHandler=(e)=>{
        console.log(e.target.value)
        this.setState({post: e.target.value})
    }
    createPostHandler=(e)=>{
        e.preventDefault()
        alert('submitted')
        const post = this.state.post
        if(post.length>3){
                console.log('click')
                this.props.add(post)
                this.setState({post:''})
        }
    }
    render() {
        return (
           <Form onSubmit={this.createPostHandler}>
               <h3>Write a post</h3>
               <input type="text" className="form-control" value={this.state.post} onChange={this.postsChangeHandler}/>
               <Button type='submit' variant="info" className='at-2'>Submit</Button>
           </Form>
        );
    }
}


export default PostForm;