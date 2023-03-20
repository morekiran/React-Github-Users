import React from "react";
import "./Card.css"

const Card = ({userName,profileUrl,avatarUrl}) => {

    return (
        <div class="card">
        <img class="userProfile"
        src={avatarUrl} 
        alt="Profile-pic"
        width="40%"
        />
        <h3 class="username">{userName}</h3>
        <a class="visitprofileBtn" href={profileUrl} 
         target="_blank"
         rel="noreferrer noopener">
        Visit Profile</a>
       </div>
    
 )
}

export default Card;