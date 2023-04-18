import React from "react"
import Post from "../Post/js/Post"
import NewPost from "../NewPost/js/NewPost"
import classes from "../css/Posts.module.css"



const Posts = (props) => {
   

    return (
        <div className={classes.posts}>
            <NewPost />
            <Post post={props.post}/>
        </div>
    )
}

export default Posts