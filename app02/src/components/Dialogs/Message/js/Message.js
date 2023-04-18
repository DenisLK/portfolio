import React from "react";
import classes from "../css/Message.module.css"


const Message = (props) => {


    const messages = props.message.map(m => <p key={m.id}>{m.text}</p>);
    
    return (
        <div  className={classes.message}>{messages}</div>
    )
}
export default Message