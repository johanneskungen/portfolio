import React from "react";
import { motion, useAnimation } from "framer-motion";
import wave from './assets/wave.png'
import Svg from './Svg'

function Home({ setPage }) {
  const repo = useAnimation();
  const exitAnimation = (page) => {
    repo.start({ opacity: 0, transition: { duration: 1.2 } });
    setTimeout(() => {
      setPage([page]);
    }, 1200);
  };

  return (
    <motion.div
      animate={repo}
      className="relative w-screen h-screen overflow-x-clip"
    >
      <div className="hidden md:block absolute top-0 left-0 -z-10">
        <Svg />
      </div>
      <img src={wave} alt="background" className="md:hidden absolute -z-10 h-[120vh] w-[100vw] top-0 left-0"/>

      <motion.div
        initial={{ y: -600 }}
        animate={{
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.65,
            duration: 1.5,
            delay: 0.5,
          },
        }}
        exit={{ opacity: 0 }}
        className="overflow-x-clip w-screen h-screen flex flex-col items-center"
      >
        
        <h1 className="text-center text-5xl font-bold mt-64">
          My name is <span className="gr">Johannes</span>
        </h1>
        <p className="text-black/40 font-semibold text-xl mx-10 text-center mt-1">
          I wish you a warm welcome to my portfolio-site!
        </p>
        <p className="text-black/40 font-semibold text-sm text-center w-80 md:w-96">
          Here you will find all about me, how you can contact me, my best
          projects and so on.
        </p>
        <div>
          <div className="flex flex-row w-[20rem] md:w-[25rem] justify-evenly">
            <button
              onClick={() => exitAnimation("projects")}
              className="mt-12 bg-black text-white rounded-full h-10 w-24 md:w-32 text-[13px] md:text-sm font-semibold"
            >
              {"<Projects />"}
            </button>
            <button className="mt-12 bg-black text-white rounded-full h-10 w-24 md:w-32 text-[13px] md:text-sm font-semibold">
              <a href="mailto:johannes.foretag@gmail.com">{"<Mail />"}</a>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
