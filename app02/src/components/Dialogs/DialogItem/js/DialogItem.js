import React from "react"
import { NavLink } from "react-router-dom"
import classes from "../css/Dialog.module.css"



const DialogItem = (props) => {

    let dialog = props.dialog.map(d => 
    <p key={d.id}><NavLink className={classes.link} to={`/Dialogs/ ${d.id}`}>{d.name}</NavLink></p>)
    return (
        <div className={classes.dialog}>{dialog}</div>
    )
}
export default DialogItem   