import { data, images } from "@/constants";
import { Variants } from "motion";
import * as motion from "motion/react-client";
import Image from "next/image";

const scaleVariants: Variants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <div
      id="home"
      className="flex-center flex-1 w-full h-full flex-row pt-24 px-8 pb-0 max-xl:flex-col max-sm:pt-24 max-sm:px-4 max-sm:pb-8"
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex-[0.65] flex justify-start items-start flex-col h-full my-0 mx-8 xl:mx-20 max-md:mx-0 self-start"
      >
        <div className="w-full flex justify-end items-end flex-col max-xl:justify-start max-xl:items-start">
          <div className="flex-center py-4 px-8 bg-white rounded-2xl flex-row w-auto shadow-lg shadow-gray-200">
            <span className="text-4xl">👋</span>

            <div className="ml-5">
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Micael</h1>
            </div>
          </div>

          <div className="flex-center flex-col mt-12 py-4 px-8 bg-white rounded-2xl w-auto shadow-lg shadow-gray-200">
            <p className="p-text text-right uppercase w-full">Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex-1 h-full flex justify-end items-end relative max-xl:my-8 max-xl:mx-0"
      >
        <Image
          className="w-full object-contain z-1"
          src={images.profile}
          alt="profile_bg"
        />

        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            className="absolute left-0 right-0 bottom-0 z-0 w-full h-11/12"
            src={images.circle}
            alt="profile_circle"
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView="whileInView"
        className="flex-[0.75] flex flex-col justify-between items-start h-full ml-4 max-xl:w-full max-xl:flex-row max-xl:flex-wrap max-xl:ml-0"
      >
        {data.heroSkillImages.map(({ id, img }) => (
          <div
            key={id}
            className={`circle-cmp flex-center rounded-full bg-white shadow-lg shadow-gray-200 ${id === 1 && "w-[100px] h-[100px] max-md:w-20 max-md:h-20"} ${id === 2 && "m-7 w-[150px] h-[150px] max-md:w-[110px] max-md:h-[110px]"} ${id === 3 && "w-[70px] h-[70px]"} max-xl:m-4`}
          >
            <Image className="w-3/5 h-3/5" src={img} alt="circles" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
