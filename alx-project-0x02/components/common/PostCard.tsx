import React from "react";
import { type PostProps } from "../../interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, body }) => {
  return (
    <div className="border rounded p-4 mb-4 shadow-md bg-white">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="mb-2">{body}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
