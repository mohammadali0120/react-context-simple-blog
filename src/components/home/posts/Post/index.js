import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../../../../contexts/PostContextProvider";

const HomePostsPost = () => {
  const { posts } = useContext(PostContext);
  const [foundedPost, setFoundedPost] = useState("");
  const params = useParams();

  const getPost = (id) => {
    if (posts.length >= 1) {
      setFoundedPost(
        posts.find((post) => post.id.toString() === params.postId)
      );
    }
  };

  useEffect(() => {
    getPost();
  }, [posts]);

  return <div>{JSON.stringify(foundedPost)}</div>;
};

export default HomePostsPost;
