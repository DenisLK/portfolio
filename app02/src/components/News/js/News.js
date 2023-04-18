import React from "react";
import classes from '../css/News.module.css'

const News = (props) => {
  return(
      <div className={classes.newsCont}>
          <img src="https://e7.pngegg.com/pngimages/412/292/png-clipart-newspaper-breaking-news-others-miscellaneous-text.png" alt="News"/>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit, ipsum molestiae repudiandae saepe totam voluptate. Atque commodi, culpa distinctio dolor excepturi laborum officiis omnis placeat quia sed veniam voluptatibus?</span>
      </div>
  )
}
export default News