import React from "react";
import { type ButtonProps } from "../../interfaces";

const sizeClasses: Record<ButtonProps["size"], string> = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({ size, shape, children }) => {
  return (
    <button
      className={`${sizeClasses[size]} bg-blue-600 text-white ${shape} hover:bg-blue-700 transition`}
    >
      {children}
    </button>
  );
};

export default Button;
