import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import PROJECTS from "../projects.json";
import { useRouter } from "next/router";
import Image from "next/image";

function Projects() {
  const router = useRouter();
  const p = PROJECTS.projects;
  return (
    <section id="p" className="w-[750px] mt-32 mb-80">
      <div>
        <h1 className="font-bold text-2xl text-indigo-600 ">Projects</h1>
        <p className="text-gray-500 text-base w-[80%] mt-2">
          During the last couple of months, I have been busy with building
          websites and web applications, here a few of them:
        </p>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {p.map((app) => (
            <div
              className="cursor-pointer hover:scale-105 duration-300 max-w-sm h-[23rem] bg-white flex flex-col rounded overflow-hidden shadow-lg"
              key={app.id}
              onClick={() => router.push(app.link)}
            >
              <div className="border h-36 relative w-full">
                <Image fill src={app.img}  alt="project" />
              </div>
              <div className="flex flex-col justify-evenly h-[13rem]">
                <div className="px-6 py-4">
                  <p className="font-bold text-gray-700 text-xl mb-2">
                    {app.title}
                  </p>
                  <p className="text-gray-700 text-sm">{app.description}</p>
                </div>
                <div className="flex items-center justify-center">
                  {app.libraries.map((l) => (
                    <button key={l.length * Math.random()} className="p-button">
                      #{l}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

const LinkButtons = () => {
  return (
    <>
      <button className="p-button" onClick={() => router.push(app.github)}>
        Source Code
      </button>
      <button className="p-button" onClick={() => router.push(app.link)}>
        Go to Website
      </button>
    </>
  );
};
