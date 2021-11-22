import React from "react";



const UserInfo = ({ name, image,nickname }) => {
    return(
<div className="user_info">
    <img className="user_image" srs={image} alt="user's photo" />
    <div className="user_name">
      {name}  
    </div>
    <a className="user_nickname" href="#">{nickname}</a>
</div>
    );
};
export default UserInfo