import React from "react";
import HomePostsCount from "./Count";
import HomePostsForm from "./Form";
import HomePostsList from "./List/index";

const HomePosts = () => {
  return (
    <div>
      <HomePostsCount />
      <HomePostsForm />
      <HomePostsList />
    </div>
  );
};

export default HomePosts;
