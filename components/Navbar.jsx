import { useRouter } from "next/router";
import React from "react";

function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex p-8 px-14 justify-between items-center text-gray-500 shadow-xl">
      <h1 className="font-semibold text-xl cursor-pointer">Johannes</h1>
      <div className="flex gap-24">
        <h1 className="font-semibold text-lg cursor-pointer hover:underline underline-offset-2 duration-100">
          contact
        </h1>
        <h1
          className="font-semibold text-lg cursor-pointer hover:underline underline-offset-2 duration-100"
          onClick={() => router.push("#p")}
        >
          work
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;
