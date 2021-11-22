
// import './App.css';
import React from "react";
import UserInfo from "./components/UserInfo";
import PostStatistics from "./components/PostStatistikcs";


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
    date: "26 feb"
}

const statisticsData = {
    comments: 482,
    shares: 146,
    likes: 887,
}
const App = ({ content, image, date }) => {
    return (
        <div className="post">
            <div className="wrapper">
                <UserInfo name={userData.name} image={userData.photo} nickname={userData.nickname} />
                <span className="post-data">{postData.date}</span>
                <span className="post-content">{postData.content}</span>
            </div>

            <img className="post-image" srs={postData.image} alt="Some post" />
            <PostStatistics comments={statisticsData.comments} shares={statisticsData.shares} likes={statisticsData.likes} />
        </div>
    );
};

export default App
