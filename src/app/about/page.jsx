"use client";
import { motion, useInView, useScroll } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Brain from "@/components/brain";
import { useRef } from "react";

const AboutPage = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C/C++",
    "C#",
    "React",
    "Angular",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
  ];

  const experiences = [
    {
      title: "title",
      company: "company",
      description: "description",
      date: "2024 - Present",
    },
    {
      title: "title",
      company: "company",
      description: "description",
      date: "2024 - Present",
    },
    {
      title: "title",
      company: "company",
      description: "description",
      date: "2024 - Present",
    },
  ];

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
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, maxime expedita? Porro amet beatae voluptate, alias
              laborum deleniti inventore, accusantium numquam veritatis placeat
              vero suscipit? Ducimus illum aliquam iste voluptatibus!
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SIGN */}
            <div className="self-end">Signature</div>
            {/* BIOGRAPHY SCROLL SVG */}
            <DotLottieReact
              className="w-10 h-10"
              src="/scroll-down.json"
              loop
              autoplay
            />
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
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black "
                >
                  {skill}
                </div>
              ))}
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <DotLottieReact
              className="w-10 h-10"
              src="/scroll-down.json"
              loop
              autoplay
            />
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
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
              {experiences.map((experience, i) => (
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
  return (
    <div className="flex justify-between h-48">
      {/* LEFT */}
      <div className="w-1/3">
        {index % 2 === 0 && (
          <>
            {/* TITLE */}
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              {experience.title}
            </div>
            {/* DESCRIPTION */}
            <div className="p-3 text-sm italic">{experience.description}</div>
            {/* DATE */}
            <div className="p-3 text-red-400 text-sm font-semibold">
              {experience.date}
            </div>
            {/* COMPANY */}
            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
              {experience.company}
            </div>
          </>
        )}
      </div>

      {/* CENTER */}
      <div className="w-1/6 flex justify-center">
        {/* LINE */}
        <div className="w-1 h-full bg-gray-600 rounded relative">
          {/* LINE CIRCLE */}
          <div className="absolute w-5 h-5 rounded-full ring-4 ring-4ed-400 bg-white -left-2"></div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-1/3">
        {index % 2 === 1 && (
          <>
            {/* TITLE */}
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-e-lg">
              {experience.title}
            </div>
            {/* DESCRIPTION */}
            <div className="p-3 text-sm italic">{experience.description}</div>
            {/* DATE */}
            <div className="p-3 text-red-400 text-sm font-semibold">
              {experience.date}
            </div>
            {/* COMPANY */}
            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
              {experience.company}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
