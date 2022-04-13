import React, { useContext, useState } from "react";
import { PostContext } from "../../../contexts/PostContextProvider";

const HomePostsForm = () => {
  const { addPost } = useContext(PostContext);
  const [post, setPost] = useState({ title: "", body: "" });
  const onChange = (value, filed) => {
    setPost((prevState) => ({ ...prevState, [filed]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addPost(post.title, post.body);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="bg-gray-200 p-5 rounded-md">
      <div className="p-10">
        <form className="" onSubmit={onSubmit}>
          <div className="w-full">
            <input
              type="text"
              className="border p-3 rounded-md focus:outline-none w-full"
              placeholder="Post Title"
              value={post.title}
              onChange={(e) => onChange(e.target.value, "title")}
              required
            />
          </div>
          <div className="w-full my-4">
            <textarea
              type="text"
              className="border p-3 rounded-md focus:outline-none w-full h-44"
              placeholder="Post Body"
              value={post.body}
              onChange={(e) => onChange(e.target.value, "body")}
              required
            ></textarea>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="h-full w-full border rounded-md p-3 text-white bg-gray-900"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default HomePostsForm;
