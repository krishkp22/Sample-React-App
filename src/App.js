import cuid from 'cuid';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
//import { Button , Card} from 'react-bootstrap'
import PostForm from './PostForm/PostForm';
import PostList from './PostList/PostList';
import StarWars from './StarWars/StarWars';
class App extends Component {
  state={ 
    posts:[
      {
        id: '1',
        text: 'Helloworld'
      },
      {
        id: '2',
        text: 'Hello'
      },
      {
        id: '3',
        text: 'Bye-Bye'
      }
    ],
    showPosts: false
  }
  showPostsHandler = () => {
    const show=this.state.showPosts
    this.setState({showPosts: !show})
  }
  addPost=(text) => {
        console.log('create '+ text)
        const new_post = {
          id:cuid(),
          text:text,
        }
        const posts=[...this.state.posts, new_post]
        this.setState({posts})
  }
  deletePostHandler=(id)=>{
    console.log(id)
    let posts=[...this.state.posts]
    posts= posts.filter(post => post.id !== id)
    this.setState({posts})
  }
  render() {
    return (
        <Container>
                <PostForm add={this.addPost}/>
                <hr />
                <PostList 
                posts={this.state.posts} 
                status={this.state.showPosts} 
                show={this.showPostsHandler}
                delete={this.deletePostHandler} 
                />
                <hr/>
                <StarWars/>
        </Container>
    );
  }
}

export default App;
