import React, { useContext } from "react";
import { PostContext } from "../../../contexts/PostContextProvider";

const HomePostsCount = () => {
  const { posts } = useContext(PostContext);
  return (
    <div className="bg-gray-200 w-2/3 mx-auto mb-4 p-2 rounded-md">
      <h1 className="font-bold text-xl text-center">Posts List</h1>
      <p className="mt-4 text-gray-500">
        Current posts length:
        <strong className="text-gray-800">{posts.length}</strong>
      </p>
    </div>
  );
};

export default HomePostsCount;
