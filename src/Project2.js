import React from 'react'
import { motion, useAnimation } from 'framer-motion'

function Project2({ setPage }) {
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
            className="fixed top-10 right-4 font-semibold border border-black/20 px-2 rounded-full cursor-pointer bg-red-600"
          >
            X
          </div>
          <h1 className="font-semibold text-3xl text-black/70 text-center p-8">
            Weather compare
          </h1>
          <div className="flex flex-col justify-evenly w-screen">
            <div className="w-full grid place-items-center">
              <div className="2xl:mx-12 m-2 md:mx-12 lg:w-[55rem] md:mb-12">
                <img src={''} alt="main" />
              </div>
            </div>
            <div
              className="w-full grid place-items-center mb-10 2xl:mb-24"
              id="textSection"
            >
              <div className="w-[93%] md:w-[80%] lg:w-[62%] xl:w-[55rem] flex flex-col">
                <h2 className="font-semibold text-center text-xl mt-4">
                  Weather comparer
                </h2>
                <br></br>
                <p>
                  The weather comparer is a site that I built some weeks ago. The user enters their country and city, then it will scrape three of the biggest weather sites in sweden and compare the results.<br></br>
                  <br></br>The weather comparer is built with Node JS on the backend
                  with a tool called Puppeteer for scraping. The frontend is built
                  with React JS combined with many different libraries and
                  concepts such as Axios, React-Icons, States, custom Hooks and
                  more.
                </p>
                <div className="flex justify-center gap-8">
                <button className="w-36 self-center mt-8 h-10 text-lg rounded-full shadow-xl border text-white border-black/20 bg-blue-600 font-semibold" onClick={() => exitAnimation("projects")}>previous project</button>
                  <button className="w-36 self-center mt-8 h-10 text-lg rounded-full shadow-xl border text-white border-black/20 bg-blue-600 font-semibold ">
                    <a href="mailto:johannes.foretag@gmail.com">contact me</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
}

export default Project2