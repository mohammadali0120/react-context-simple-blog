import React from "react";
import propTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePostsListDetail = ({ post, onRemovePost }) => {
  return (
    <li
      className={
        "flex justify-between items-center p-2 border rounded-md relative z-10" +
        " " +
        (post.info.id === 1 ? "my-3" : "mb-3") +
        " " +
        (post.index % 2 !== 0 ? "bg-gray-100" : "")
      }
    >
      <Link to={"/post/" + post.info.id} className="flex w-11/12 text-justify ">
        <div className="w-1/2">
          <span>{post.info.title}</span>
        </div>
        <div className="w-1/2">
          <span>{post.info.body}</span>
        </div>
      </Link>
      <div className="flex justify-center w-1/12">
        <div>
          <FaTrash
            onClick={() => onRemovePost(post.info.id)}
            className="cursor-pointer text-red-600 text-lg"
          />
        </div>
      </div>
    </li>
  );
};

HomePostsListDetail.propTypes = {
  onRemovePost: propTypes.func.isRequired,
  post: propTypes.object.isRequired,
};

export default HomePostsListDetail;
