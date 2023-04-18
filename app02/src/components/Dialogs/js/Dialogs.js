import React from "react";
import classes from "../css/Dialogs.module.css";
import DialogItem from "../DialogItem/js/DialogItem"
import Message from './../Message/js/Message';







const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <DialogItem dialog ={props.dialog}/>
            </div>
            <div className={classes.messages}>
            <Message message = {props.message}/>
            </div>
        </div>
    )
}
export default Dialogs
