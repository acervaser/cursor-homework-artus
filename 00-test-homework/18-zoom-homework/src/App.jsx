
import './App.css';
import React from "react";
import UserInfo from "./components/UserInfo";
import PostStatistics from "./components/PostStatistikcs";
import Baby from "./assests/img/baby_yoda.jpg";
import Yoda from "./assests/img/Yoda.jpg";

const BABY_IMAGE = Baby;

const YODA_IMAGE = Yoda;




const userData = {
    name: "Baby Yoda",
    photo: BABY_IMAGE,
    nickname: "@baby_yoda"
};

const postData = {
    content: "My dear father, I miss you so much...",
    image: YODA_IMAGE,
    date: "26 feb"
};

const statisticsData = {
    comments: 482,
    shares: 146,
    likes: 887,
}
const App = () => {
    return (
        <div className="post">
            <div className="wrapper">
                <UserInfo name={userData.name} image={userData.photo} nickname={userData.nickname} />
                <span className="post-date">{postData.date}</span>
                <span className="post-content">{postData.content}</span>
            </div>

            <img className="post-image" src={postData.image} alt="Some post" />
            <PostStatistics comments={statisticsData.comments} shares={statisticsData.shares} likes={statisticsData.likes} />
        </div>
    );
};

export default App
