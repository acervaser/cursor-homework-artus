import React from "react";

const PostStatistics = ({comments, shares, likes}) => {
    return(
        <div className="statisticks">
        <span className="statistics-comments">{comments}</span>
        <span className="statistics-shares">{shares}</span>
        <span className="statistics-shares">{likes}</span>
        </div>
    );
};

export default PostStatistics;