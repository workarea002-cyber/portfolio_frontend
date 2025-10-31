"use client";
import Image from "next/image";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { useState } from "react";
import { motion } from "motion/react";

import { data, images } from "@/constants/index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <nav className="w-full flex justify-between items-center py-4 px-8 bg-white/25 backdrop-blur-xs border border-white/5 fixed z-2">
        <div className="flex justify-start items-center">
          <Image className="w-24 h-5" src={images.logo} alt="" />
        </div>

        <ul className="flex-1 flex justify-center items-center max-[900px]:hidden">
          {data.navLinks.map(({ name }) => (
            <li
              className="mx-4 cursor-pointer flex justify-center items-center flex-col p-text group"
              key={name}
            >
              <div className="w-[5] h-[5] bg-transparent rounded-full group-hover:bg-secondary mb-1" />
              <a
                className="text-gray flex-col uppercase font-medium transition-all duration-300 ease-in-out hover:text-secondary"
                href={`#${name}`}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        <div className="w-8 h-8 rounded-full relative flex items-center justify-center bg-secondary  min-[900px]:hidden">
          <HiMenuAlt4
            className="text-white w-7 h-7"
            onClick={() => setToggle(true)}
          />

          {toggle && (
            <motion.div
              className="fixed top-0 bottom-0 right-0 z-5 p-4 w-4/5 h-screen flex justify-end items-end flex-col bg-white shadow-lg"
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX
                className="w-7 h-7 text-secondary my-2 mx-4"
                onClick={() => setToggle(false)}
              />
              <ul className="flex justify-start items-start flex-col h-full w-full">
                {data.navLinks.map(({ name }) => (
                  <li className="m-4 cursor-pointer" key={name}>
                    <a
                      className="text-gray flex-col uppercase font-medium transition-all duration-300 ease-in-out hover:text-secondary"
                      href={`#${name}`}
                      onClick={() => setToggle(false)}
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
