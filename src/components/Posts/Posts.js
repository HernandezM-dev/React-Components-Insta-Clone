import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  // console.log('from posts', posts);

  return (
    <div className="posts-container-wrapper">
      {/* map through the posts here to return a Post component */}
      {/* Check the implementation of Post to see what props it requires! */}
      {
        posts.map(post =>
          <Post post={post} likePost={likePost}/>
        )
      }
    </div>
  );
};

export default Posts;
