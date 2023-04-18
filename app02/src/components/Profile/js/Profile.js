import React from "react"
import classes from "../css/Profile.module.css"


const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://avatars.mds.yandex.net/i?id=a665ee081a03ee8bdfaa8366925a1edd-6946760-images-thumbs&n=13&exp=1"
                    alt="background" className={classes.walperpapir} />
            </div>
            <div className={classes.profile}>
                <img src="https://sun1-18.userapi.com/s/v1/if1/1xGqkPOAXdV3j5pBAqbHo5fp4bb3E0QVl7u9Y7iWHoz7Kgj_DdQgpuI37wSZmJLt5XHhHRKz.jpg?size=251x251&quality=96&crop=20,20,251,251&ava=1" alt="ava" className={classes.avatar} />
                <p>Это Теребонька</p>
                <p>20 year old</p>
            </div>
        </div>
    )
}
export default Profile