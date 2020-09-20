import React from 'react';
import { Button } from 'react-bootstrap';
import Post from './Post';

const PostList = (props) => {
    return (
        <>
            <Button onClick={props.show} variant="primary">{!props.status ? 'Show Posts' : 'Hide Posts'}</Button>
            {props.status &&
           props.posts.map(post=>{
               return <Post key={post.id} post={post} delete={props.delete}/>
           })}
        </>
    );
}
export default PostList;