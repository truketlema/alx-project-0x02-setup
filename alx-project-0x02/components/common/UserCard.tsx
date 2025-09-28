import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded p-4 mb-4 shadow-md bg-white">
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="mb-1">Email: {email}</p>
      <p className="text-sm text-gray-500">
        Address: {address.street}, {address.suite}, {address.city},{" "}
        {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
