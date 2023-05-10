import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import PROJECTS from "../projects.json";
import { useRouter } from "next/router";

function Projects() {
  const router = useRouter();
  const p = PROJECTS.projects;
  return (
    <section id="p" className="w-[750px] mt-32 mb-80">
      <div>
        <h1 className="font-bold text-2xl text-indigo-400 ">Projects</h1>
        <p className="font-semibold text-sm w-[50%] mt-2">
          During the last couple of months, I have been busy with uilding
          websites and web applications here a few of them:
        </p>
        <div className="grid grid-cols-3 gap-4 text-sm mt-4">
          {p.map((app) => (
            <div
              className="flex flex-col gap-3 cursor-pointer border p-2 rounded shadow-md text-black bg-white"
              key={app.id}
            >
              <p className="text-lg font-semibold">{app.title}</p>
              <p className="font-thin">{app.description}</p>
              <div className="flex gap-2">
                <button
                  className="p-button"
                  onClick={() => router.push(app.github)}
                >
                  Source Code
                </button>
                <button
                  className="p-button"
                  onClick={() => router.push(app.link)}
                >
                  Go to Website
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
