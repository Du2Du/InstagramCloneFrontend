import React from "react";
import { api } from "../../../../../../services/api";
import { FiMoreHorizontal, FiSend } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";

export const Post: React.FC = () => {
  const post = api;
  return (
    <>
      {post?.PostInfo.map((user) => (
        <div id="box-post">
          <div className="post-top text-truncate">
            <img src={user.url} className="profile" />
            <p>{user.name}</p>
            <FiMoreHorizontal size={20} style={{ cursor: "pointer" }} />
          </div>
          <div className="post">
            <img src={user.post} className="post" />
          </div>
          <div className="comments">
            <div>
              <AiOutlineHeart size={25} />
              <FaRegComment size={25} />
              <FiSend size={25} />
            </div>
            <div>
              <BsBookmark size={25} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
