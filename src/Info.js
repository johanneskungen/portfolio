import React from "react";
import { useAnimation, motion } from 'framer-motion'

function Info({ setPage }) {
  const rep = useAnimation()

  const exitAnimation = () => {
    rep.start({ opacity: 0, rotate: 360, transition: { duration: 1.5 } })
    setTimeout(() => {
      setPage(["home"])
    }, 1500)
  }

  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity: 1 }}>
      <motion.div animate={rep}> 
    <button onClick={() => exitAnimation()} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 bg-white w-32 flex items-center justify-center h-9 rounded-sm shadow-xl font-bold">Homepage</button>
      <div className="h-screen grid md:grid-cols-2 grid-cols-1 md:grid-rows-2">
        <div className="bg-black/50 flex items-center justify-center">
          <p className="text-white font-semibold text-lg">
            I started my journey as a web developer two years ago.
          </p>
        </div>
        <div className="bg-black text-white flex items-center justify-center flex-col">
          <p className="font-semibold text-lg">The learning process</p>
          <p className="text-sm text-center w-[65%]">
            I watched a ton of tutorials on youtube nad tried to code my opw
            small projects. I also completed some of the free courses that are
            available to do, like FreeCodeCamp.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="font-semibold text-lg">Built my first projects</p>
          <p className="text-sm text-center w-[65%]">
            I combined my skills within webscraping with my react skills and created a weather app that would compare the forecast from three fo sweden's biggest weather sites.
          </p>
        </div>
        <div className="bg-[#3BCA17] text-white flex items-center justify-center flex-col">
          <p className="font-semibold text-lg">Future plans?</p>
        </div>
      </div>
    </motion.div>
    </motion.div>
  );
}

export default Info;
