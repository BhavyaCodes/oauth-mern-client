import React, { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("/api/userinfo");
      const { imageUrl, name, posts } = res.data.user;
      setUser({ imageUrl, name });
      setUserPosts(posts);
    };
    getUser();
  }, []);

  const renderPosts = () => {
    if (userPosts) {
      return userPosts.map((post) => (
        <div key={post._id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ));
    } else return null;
  };

  return (
    <div>
      {user && (
        <div>
          <img alt="profile pic" src={user.imageUrl} />
          <h1>{user.name}</h1>
          {renderPosts()}
        </div>
      )}
    </div>
  );
}

export default Profile;
