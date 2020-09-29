import React from "react";

import PostList from "./PostList";
import PostForm from "./PostForm";

function Home() {
  return (
    <div>
      <PostForm />
      <PostList />
    </div>
  );
}

export default Home;
