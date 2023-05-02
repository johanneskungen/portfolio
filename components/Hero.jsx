import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineCode } from "react-icons/hi";
import { useRouter } from "next/router";

function Hero() {
  const router = useRouter();
  return (
    <main className="h-[200vh]">
      <div className="absolute w-24 flex gap-3 h-4 bottom-8 left-[50%] translate-x-[-50%]">
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </div>
      <div className="grid h-[80vh] place-items-center">
        <div className="flex flex-col items-start gap-4">
          <h1 className="font-semibold md:text-5xl text-2xl">
            Johannes Eriksson, full stack developer
          </h1>
          <div className="flex gap-2">
            <button
              onClick={() =>
                router.push(
                  "https://github.com/johanneskungen?tab=repositories"
                )
              }
              className="hero-button"
            >
              See my Github <AiFillGithub size={30} />
            </button>
            <button className="hero-button">
              See my work <HiOutlineCode size={30} />
            </button>
          </div>
        </div>
      </div>
      <div>{/* Projects */}</div>
    </main>
  );
}

export default Hero;
