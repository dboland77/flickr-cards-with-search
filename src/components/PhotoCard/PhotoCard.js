import React from 'react';
import styles from "./PhotoCard.module.css"
 

const PhotoCard = ({photo}) => {
  const {title, link,description,author,tags} = photo;
  console.log(link)
  return (
    <div className="card">
    <img src={link} alt = {title}/>
    <div className="container">
   </div>
  </div>
  )
}

export default PhotoCard
