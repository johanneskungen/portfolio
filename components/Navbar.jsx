import React from "react";

function Navbar() {
  return (
    <nav className="flex p-8 px-14 justify-between items-center shadow-xl">
      <h1 className="font-semibold text-xl cursor-pointer">Johannese</h1>
      <div className="flex gap-24">
        <h1 className="font-semibold text-lg cursor-pointer hover:underline underline-offset-2 duration-100">contact</h1>
        <h1 className="font-semibold text-lg cursor-pointer hover:underline underline-offset-2 duration-100">work</h1>
      </div>
    </nav>
  );
}

export default Navbar;
