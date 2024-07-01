"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className={`rounded px-2 font-extralight ${
        pathName === link.url && "bg-white text-black"
      } ${
        pathName !== link.url && "hover:bg-hover transition-all duration-200"
      }`}
    >
      <Link href={link.url}>{link.title}</Link>
    </motion.div>
  );
};

export default NavLink;
