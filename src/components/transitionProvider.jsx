"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-custom-bg"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "110vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-8xl cursor-default z-50 w-fit h-fit bg-transparent"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, display: "none" }}
          exit={{ opacity: 0, display: "none" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName === "/" ? "home" : pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40"
          initial={{ height: "110vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="w-screen h-24 absolute top-0 z-10">
          <Navbar />
        </div>
        <div className="absolute top-24 h-[calc(100vh-96px)] w-screen">
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
