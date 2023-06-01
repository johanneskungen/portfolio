import { useRouter } from "next/router";
import React from "react";
import { BsCodeSlash } from "react-icons/bs";

function Navbar() {
  const listStyle = "font-semibold cursor-pointer border-b border-indigo-600";
  const router = useRouter();
  return (
    <nav className="flex p-8 md:px-14 justify-between items-center text-gray-500">
      <h1 className="font-semibold text-lg cursor-pointer flex items-center gap-2">
        Johannes E <BsCodeSlash />
      </h1>
      <div className="flex gap-8 md:gap-24 text-sm">
        <h1 className={listStyle}>contact</h1>
        <h1 className={listStyle} onClick={() => router.push("#p")}>
          work
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;
