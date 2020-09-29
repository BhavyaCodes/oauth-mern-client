import React, { useState, useEffect } from "react";
import axios from "axios";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("/api/posts");
      setPosts(res.data);
    };
    getPosts();
  }, []);

  const renderPosts = () => {
    return posts.map((post) => (
      <div key={post._id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ));
  };

  return <div>{renderPosts()}</div>;
}

export default PostList;
