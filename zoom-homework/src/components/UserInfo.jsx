import React from "react";

const UserInfo = ({ name, image,nickname }) => {
    return(
<div className="user-info">
    <img className="user-image" srs={image} alt="user's photo" />
    <div className="user-name">
      {name}  
    </div>
    <a className="user-nickname" href="#">{nickname}</a>
</div>
    );
};
export default UserInfo