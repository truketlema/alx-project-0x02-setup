import React from "react";
import Link from "next/link"; // ✅ Make sure this line is present

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ALX Project 2</h1>
      <nav>
        {/* ✅ Navigation links */}
        <Link href="/home" className="mr-4 hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
