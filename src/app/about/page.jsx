"use client";
import { motion, useInView, useScroll } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Brain from "@/components/brain";
import { useEffect, useRef, useState } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillsRef = useRef();
  const isSkillsRefInView = useInView(skillsRef, {
    once: true,
  });
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, {
    once: true,
  });

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./about.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Failed to fetch or parse the data:", error);
      }
    };

    fetchData();
  }, [data]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-8 xl:1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {data && <p className="text-lg font-extralight">{data.biography}</p>}
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillsRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillsRefInView ? { x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillsRefInView ? { x: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex gap-4 flex-wrap"
            >
              {data &&
                data.skills.map((skill) => (
                  <motion.div
                    whileHover={{
                      backgroundColor: "#495057",
                      color: "#F8F9FA",
                    }}
                    key={skill}
                    className="rounded p-2 text-sm select-none bg-dark-1 text-light-1"
                  >
                    {skill}
                  </motion.div>
                ))}
            </motion.div>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48 select-none"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {data &&
                data.experiences.map((experience, i) => (
                  <ExperienceCard experience={experience} index={i} key={i} />
                ))}
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 xl:1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceCard = ({ experience, index }) => {
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <div className="flex justify-between h-auto">
      {/* LEFT */}
      <motion.div
        initial={{ backgroundColor: "#212529" }}
        whileHover={index % 2 === 0 && { backgroundColor: "#343A40" }}
        onMouseEnter={index % 2 === 0 ? () => setActiveIdx(index) : () => {}}
        onMouseLeave={index % 2 === 0 ? () => setActiveIdx(-1) : () => {}}
        className="w-5/12 rounded-xl p-4"
      >
        {index % 2 === 0 && (
          <>
            {/* DATE */}
            <div className="text-light-4 text-xs font-semibold">
              {experience.date}
            </div>
            {/* TITLE */}
            <div className="text-custom-white border-l-4 border-custom-white pl-4 mt-4 font-semibold">
              {experience.title}
            </div>
            {/* COMPANY */}
            <div className="mt-2 rounded text-xs text-light-3">
              {experience.company}
            </div>
          </>
        )}
      </motion.div>

      {/* CENTER */}
      <div className="w-1/6 flex justify-center">
        {/* LINE */}
        <div
          className={`w-1 h-full ${
            index === activeIdx ? "bg-dark-2" : "bg-dark-1"
          } rounded relative transition-all duration-[0.3s]`}
        >
          {/* LINE CIRCLE */}
          <div
            className={`absolute w-4 h-4 rounded-full ${
              index === activeIdx ? "bg-light-4" : "bg-dark-2"
            } -left-[6px] transition-all duration-[0.3s]`}
          ></div>
        </div>
      </div>

      {/* RIGHT */}
      <motion.div
        initial={{ backgroundColor: "#212529" }}
        whileHover={index % 2 === 1 && { backgroundColor: "#343A40" }}
        onMouseEnter={index % 2 === 1 ? () => setActiveIdx(index) : () => {}}
        onMouseLeave={index % 2 === 1 ? () => setActiveIdx(-1) : () => {}}
        transition={{ duration: 0.3 }}
        className="w-5/12 rounded-xl p-4"
      >
        {index % 2 === 1 && (
          <>
            {/* DATE */}
            <div className="text-light-4 text-xs font-semibold">
              {experience.date}
            </div>
            {/* TITLE */}
            <div className="text-custom-white border-l-4 border-custom-white pl-4 mt-4 font-semibold">
              {experience.title}
            </div>
            {/* COMPANY */}
            <div className="mt-2 rounded text-xs text-light-3">
              {experience.company}
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default AboutPage;
