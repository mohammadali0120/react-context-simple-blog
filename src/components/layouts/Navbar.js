import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../contexts/PostContextProvider";

const LayoutNavbar = () => {
  const { posts } = useContext(PostContext);
  const [links, setLinks] = useState([
    { id: 1, to: "/", text: "Home" },
    { id: 2, to: "/posts", text: "Posts" },
  ]);
  return (
    <div className="bg-gray-200 w-full p-2 ">
      <ul className="flex items-center">
        {links.map((link) => (
          <li key={link.id} className="mr-2">
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
};

export default LayoutNavbar;
