import React from "react";
import axios from "axios";

import useInputState from "../hooks/useInputState";

function PostForm() {
  const [title, handleTitleChange, resetTitle] = useInputState("");
  const [body, handleBodyChange, resetBody] = useInputState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "/api/post",
      {
        title,
        body,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    resetTitle();
    resetBody();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={handleTitleChange} />
      <textarea value={body} onChange={handleBodyChange} />
      <button className="btn btn-primary" type="submit">
        Post
      </button>
    </form>
  );
}

export default PostForm;
