import React from "react";
import picture from "./assets/amazonscanner.png";
import { useAnimation, motion } from "framer-motion";

function Projects({ setPage }) {
  const repo = useAnimation();
  const exitAnimation = (page) => {
    repo.start({ opacity: 0, transition: { duration: 1.2 } });
    setTimeout(() => {
      setPage([page]);
    }, 1200);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <motion.div animate={repo}>
        <div
          onClick={() => exitAnimation("home")}
          className="fixed top-10 ml-4 font-semibold border border-black/20 px-4 rounded-full h-7 cursor-pointer bg-blue-600"
        >
          back
        </div>
        <h1 className="font-semibold text-3xl text-black/70 text-center p-8">
          Amazon scanner
        </h1>
        <div className="flex flex-col justify-evenly w-screen">
          <div className="w-full grid place-items-center">
            <div className="2xl:mx-12 m-2 md:mx-12 lg:w-[55rem] md:mb-12">
              <img src={picture} alt="main" />
            </div>
          </div>
          <div
            className="w-full grid place-items-center mb-10 2xl:mb-24"
            id="textSection"
          >
            <div className="w-[93%] md:w-[80%] lg:w-[62%] xl:w-[55rem] flex flex-col">
              <h2 className="font-semibold text-center text-xl mt-4">
                My favourite project so far
              </h2>
              <br></br>
              <p>
                The amazon scanner is a project that I built a few months ago.
                It is an application where the user can type in an amazon url
                with a product that they want to watch. The user also specifies
                an amount which will trigger a function that send them a email
                when the price is below. The amazon scanner runs its scraping
                function every 30 minutes.<br></br>
                <br></br>The amazon scanner is built with Node JS on the backend
                with a tool called Puppeteer for scraping. The frontend is built
                with React JS combined with many different libraries and
                concepts such as Axios, React-Icons, States, custom Hooks and
                more.
              </p>
              <div className="flex flex-row justify-evenly w-screen mb-44 xl:mb-0">
                <button className="w-36 self-center mt-8 h-10 text-lg rounded-full shadow-xl border text-white border-black/20 bg-blue-600 font-semibold ">
                  <a href="mailto:johannes.foretag@gmail.com">contact me</a>
                </button>
                <button className="w-36 self-center mt-8 h-10 text-lg rounded-full shadow-xl border text-white border-black/20 bg-blue-600 font-semibold" onClick={() => exitAnimation("project2")}>next project</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
