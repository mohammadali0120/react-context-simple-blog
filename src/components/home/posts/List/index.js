import React, { useContext, useState } from "react";
import { PostContext } from "../../../../contexts/PostContextProvider";
import GlobalModal from "../../../global/Modal";
import HomePostsListDetail from "./Detail";

const HomePostsList = () => {
  const { posts, loading, removePost } = useContext(PostContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postId, setPostId] = useState(0);

  const onRemove = (e) => {
    setIsModalOpen(true);
    setPostId(e);
  };
  const onConfirm = () => {
    removePost(postId);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mt-3">
        {loading && posts.length <= 0 ? (
          <div>Loading...</div>
        ) : !loading && posts.length <= 0 ? (
          <div>There is no post.</div>
        ) : !loading && posts.length >= 1 ? (
          <ul>
            {posts.map((post, index) => {
              return (
                <HomePostsListDetail
                  key={post.id}
                  post={{ info: post, index: index }}
                  onRemovePost={onRemove}
                />
              );
            })}
          </ul>
        ) : (
          <div> </div>
        )}
      </div>
      <GlobalModal
        closeModal={() => setIsModalOpen(false)}
        onConfirm={onConfirm}
        isModalOpen={isModalOpen}
        body="Are you sure that you wanna delete this post?"
        confirmText="Yes"
        cancelText="No"
      />
    </>
  );
};

export default HomePostsList;
