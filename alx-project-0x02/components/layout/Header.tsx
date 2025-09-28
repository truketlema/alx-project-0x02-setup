import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 p-4 shadow-md">
      <nav className="flex gap-4">
        <Link href="/home" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link href="/about" className="text-blue-600 hover:underline">
          About
        </Link>
        <Link href="/posts" className="text-blue-600 hover:underline">
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
