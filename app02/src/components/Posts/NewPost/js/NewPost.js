import React from 'react';
import classes from '../css/NewPost.module.css';


const NewPost = () => {
    return (
        <div className={classes.newPost}>
            <p>Новый пост теребоньки</p>
            <textarea name="" id="" cols="90" rows="2"></textarea><br />
            <button type="button">Опубликовать</button>
        </div>
    )
}


export default NewPost