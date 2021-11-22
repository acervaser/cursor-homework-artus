
 import './App.css';
import React from "react";
import UserInfo from "./components/UserInfo";
import PostStatistics from "./components/PostStatistikcs";
import Baby from "./assests/img/baby_yoda.jpg";
import Yoda from "./assests/img/Yoda.jpg";

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";




const userData = {
    name: "Baby Yoda",
    photo: Baby,
    nickname: "@baby_yoda"
};

const postData = {
    content: "My dear father, I miss you so much...",
    image: Yoda,
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
                <UserInfo name={userData.name} image={ANAKIN_IMAGE} nickname={userData.nickname} />
                <span className="post-date">{postData.date}</span>
                <span className="post-content">{postData.content}</span>
            </div>

            <img className="post-image" srs={postData.image} alt="Some post" />
            <PostStatistics comments={statisticsData.comments} shares={statisticsData.shares} likes={statisticsData.likes} />
        </div>
    );
};

export default App
