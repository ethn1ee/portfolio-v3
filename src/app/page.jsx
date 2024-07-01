"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [hero, setHero] = useState(0);

  return (
    <motion.div
      className="h-full w-full relative flex items-center overflow-x-clip"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* GRID CONTAINER */}
      <div className="ml-[46vw] max-h-full shrink-0">
        <div className="grid grid-flow-row gap-6 -rotate-6">
          {Array.from({ length: 2 }).map((_, row) => (
            <div key={row} className="grid grid-flow-col auto-cols-min gap-4">
              {Array.from({ length: 5 }).map((_, col) => (
                <motion.div
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 0.97 }}
                  key={col}
                  className={`bg-dark-2 lg:h-64 xl:h-72 rounded-2xl ${
                    (row + col) % 3 === 0
                      ? "lg:w-[455px] xl:w-[512px]"
                      : (row + col) % 3 === 1
                      ? "lg:w-64 xl:w-72"
                      : "lg:w-36 xl:w-40"
                  }`}
                ></motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -top-24 pt-24 lg:bg-dark-1 h-screen w-screen lg:w-[50vw] flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:pl-20 xl:pl-48 text-xl overflow-hidden items-center">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-medium">
            Lorem ipsum dolor sit.
          </h1>
          {/* DESCRIPTION */}
          <p className="md:text-xl"></p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black bg-white text-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
