
// import './App.css';
import React from "react";
import UserInfo from "./components/UserInfo";
import PostStatistics from "./components/PostStatistikcs";
import Baby from "./assests/img/Baby.jpg"





const RAY_IMAGE = Baby;

const userData = {
    name: "Anakin skywalker",
    photo: RAY_IMAGE,
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
