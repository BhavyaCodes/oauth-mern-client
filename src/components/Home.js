import React from "react";
import axios from "axios";

import PostList from "./PostList";
import PostForm from "./PostForm";

function Home() {
  const handleClick = async () => {
    const res = await axios.get("/api/ping", { withCredentials: true });
    console.log(res.data);
  };
  return (
    <div>
      home
      <button onClick={handleClick}>Click me!</button>
      <PostForm />
      <PostList />
    </div>
  );
}

export default Home;
