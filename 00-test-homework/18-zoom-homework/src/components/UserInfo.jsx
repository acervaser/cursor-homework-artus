import React from "react";

const UserInfo = ({ name, image, nickname}) => {
    return(
<>
    <img className="user-image" src={image} alt="user" />
    <div className="user-name">
      {name}  
    </div>
    <a className="user-nickname" href="#">{nickname}</a>
</>
    );
};
export default UserInfo