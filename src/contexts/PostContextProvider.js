import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
export const PostContext = createContext();

function PostContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(false);
    try {
      const { data } = await axios.get("/posts");
      setPosts(data);
    } catch (e) {
      setLoading(true);
      console.log(e);
    }
  };

  const addPost = async (title, body) => {
    try {
      const request = await axios.post("/posts", {
        title: title,
        body: body,
      });
      setPosts([
        {
          // Because of using the fake api i added Math.radnom at end of id so it will not produce `same key` error
          id: request.data.id + Math.random(),
          title: request.data.title,
          body: request.data.body,
        },
        ...posts,
      ]);
      toast.success("Post added successfuly");
    } catch (e) {
      console.log(e);
    }
  };
  const removePost = async (id) => {
    const foundedPost = posts.find((post) => post.id === id);

    try {
      const request = await axios.delete(`/posts/${id}`);
      console.log(request);
      toast.error(
        `Post with title of ${
          foundedPost.title.substring(0, 10) + " ... "
        } has been deleted.`
      );
      setPosts(posts.filter((post) => post.id !== id));
    } catch (e) {
      console.log(e);
    }
  };
  //
  useEffect(() => {
    fetchPosts();
  }, [loading]);

  return (
    <div>
      <PostContext.Provider
        value={{ posts, loading, addPost, removePost }}
      >
        {children}
      </PostContext.Provider>
    </div>
  );
}

export default PostContextProvider;
