"use client";

import { ABCFavorit } from "../_components/Fonts";
import { motion, useInView } from "motion/react";
import Project from "./Project";
import NoiseBG from "../_components/NoiseBG";
import Image from "next/image";
import { useRef } from "react";
import { myEasing } from "../_components/Easing";
import Link from "next/link";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface ProjectCardProps {
  project: Project;
  setActiveIndex: (index: number) => void;
  activeIndex: number;
}

const ProjectCard = ({
  project,
  setActiveIndex,
  activeIndex,
}: ProjectCardProps) => {
  const isActive = activeIndex === project.id;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      animate={{
        width: isActive ? "100%" : 200,
        transition: {
          ease: myEasing,
          duration: 0.5,
        },
      }}
      onClick={() => setActiveIndex(isActive ? -1 : project.id)}
      className={
        ABCFavorit.extended.className +
        " shrink-0 max-w-[520px] h-screen relative cursor-pointer overflow-visible box-border"
      }
    >
      {/* NOISE */}
      <motion.div
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{
          ease: myEasing,
          duration: 1,
          delay: 0.5 + 0.1 * project.id,
        }}
      >
        <motion.div
          whileHover={isActive ? {} : { opacity: 0.6 }}
          animate={{ opacity: isActive ? 0 : isInView ? 0.4 : 0 }}
        >
          <NoiseBG />
        </motion.div>
      </motion.div>

      {/* DATE */}
      <motion.p
        animate={{ opacity: isActive ? 1 : 0 }}
        className={
          ABCFavorit.mono.className +
          " absolute -top-6 left-3 text-xs text-gray-200"
        }
      >
        {project.time}
      </motion.p>

      {/* BORDER */}
      <motion.div
        animate={{ height: isInView ? "100%" : 0 }}
        transition={{
          ease: myEasing,
          duration: 1,
          delay: 0.5 + 0.1 * project.id,
        }}
        className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-gray-300 to-transparent"
      />

      {/* CONTENT */}
      <div className="relative w-full h-full pb-[200] overflow-hidden flex flex-col justify-center items-center">
        {/* HEADER */}
        <div className="flex justify-between w-full absolute top-0 left-0 p-4 z-10">
          <div
            style={{
              justifyContent: isActive ? "flex-start" : "space-between",
            }}
            className="flex w-full h-fit  leading-none"
          >
            <span className="mr-4 text-gray-300 text-xs">{project.id + 1}</span>
            <motion.h2
              layout
              animate={{
                fontWeight: isActive ? 700 : 400,
              }}
              transition={{
                ease: myEasing,
                duration: 0.5,
              }}
              className="inline font-bold"
            >
              {project.title}
            </motion.h2>
          </div>

          <motion.ul
            animate={{
              opacity: isActive ? 1 : 0,
              width: isActive ? "auto" : 0,
            }}
            transition={{ ease: myEasing, duration: 0.5 }}
            className={
              ABCFavorit.mono.className +
              " text-right text-xs text-gray-100 text-nowrap"
            }
          >
            {project.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </motion.ul>
        </div>

        {/* IMAGES */}
        {isActive && (
          <div className="w-[400px] h-[440px] relative z-10">
            {project.images.length === 2 && (
              <>
                <ImageContainer image={project.images[0]} order={1} />
                <ImageContainer image={project.images[1]} order={2} />
              </>
            )}
          </div>
        )}

        {/* DESCRIPTION */}
        {isActive && (
          <div className="w-full box-border px-6 pb-10 flex flex-col gap-10 absolute bottom-10 left-0 z-10">
            <div className="flex justify-between w-full">
              <h3 className="font-bold text-gray-300">ABOUT</h3>
              <p className="text-gray-100 text-xs w-3/5">{project.desc}</p>
            </div>

            <div className="flex justify-between w-full">
              <h3 className="font-bold text-gray-300">MADE WITH</h3>
              <p className="text-gray-100 text-xs w-3/5">
                {project.tech.map((tech, index) => (
                  <span key={index}>
                    {tech}
                    {index !== project.tech.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </div>

            <div className="flex justify-between w-full">
              <h3 className="font-bold text-gray-300">VISIT</h3>
              <ul className="text-gray-100 text-xs w-3/5">
                {project.links.map((link, index) => (
                  <motion.li
                    whileHover={{ gap: "12px", color: "#aaaaaa" }}
                    key={index}
                    className="flex items-center gap-0"
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      {link.name}
                    </Link>
                    <ChevronRightIcon />
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

interface ImageContainerProps {
  image: { src: string; alt: string; orientation: "landscape" | "portrait" };
  order: 1 | 2;
}

const ImageContainer = ({ image, order }: ImageContainerProps) => {
  const size = {
    landscape: { width: 360, height: 258 },
    portrait: { width: 167, height: 360 },
  };

  const position = {
    1: { top: 0, left: 0, zIndex: 20 },
    2: { bottom: 0, right: 0 },
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ ease: myEasing, duration: 0.5 }}
      style={{ ...size[image.orientation], ...position[order] }}
      className="absolute shadow-2xl rounded-md overflow-hidden"
    >
      <Image src={image.src} alt={image.alt} fill className="object-cover" />
    </motion.div>
  );
};

export default ProjectCard;
