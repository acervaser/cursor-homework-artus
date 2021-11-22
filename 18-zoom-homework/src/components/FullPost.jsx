import React from "react";
import UserInfo from "./UserInfo";

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const userData = {
    name: "Anakin skywalker",
    photo: ANAKIN_IMAGE,
    nickname: "@dart_vader"
};

const postData = {
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    data: "26 feb" 
}

const UserPost = ({ content, image, date }) => {
    return (
        <div className="post">
            <div className="wrapper">
                <UserInfo name={userData.name} image={userData.photo} nickname={userData.nickname}/>
                <span className="content">{content}</span>
                <img className="post-image" srs={image} alt="user's photo" />
            </div>
            <img className=""
        </div>
    );
};
