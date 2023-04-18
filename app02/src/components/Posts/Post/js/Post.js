import React from 'react';
import classes from '../css/Post.module.css'






const Post = (props) => {
   


    let post = props.post.map(post => <div className={classes.post} key={post.id}>
        <img src={post.url} alt={post.alt} className={classes.avatar} />
        <p className={classes.text}>{post.message} likes={post.likesCount}</p>
    </div>)
    return (
        <div>
            {post}
        </div>
    )
}
export default Post