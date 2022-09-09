import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./Home";
import Projects from "./Projects";
import Project2 from "./Project2";
function App() {
  const [page, setPage] = useState(["home"]);

  return (
    <AnimatePresence>
      <motion.div key='x'>
        {page.includes("home") && <Home key="page1" setPage={setPage} />}
      </motion.div>
      <motion.div>
        {page.includes("projects") && <Projects key="page3" setPage={setPage}/>}
      </motion.div>
      <motion.div>
        {page.includes("project2") && <Project2 key="page4" setPage={setPage} />}
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
