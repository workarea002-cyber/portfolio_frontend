import Image from "next/image";
import { Variants } from "motion";
import * as motion from "motion/react-client";

import { data, images } from "@/constants";
import { SectionWrapper } from "@/wrapper";

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
    // app__header app__flex
    <div className="flex-center flex-1 w-full h-full flex-col pt-24 px-4 pb-8 sm:px-8 xl:flex-row xl:pb-0">
      {/* app__header-info */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex-[0.45] flex-start self-start flex-col h-full lg:mr-4"
      >
        {/* app__header-badge */}
        <div className="w-full flex-start flex-col xl:items-end">
          {/* badge-cmp app__flex */}
          <div className="flex-center py-4 px-8 bg-white rounded-2xl flex-row w-auto custom-shadow shadow-black/5">
            <span className="text-4xl">👋</span>

            <div className="ml-5">
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Micael</h1>
            </div>
          </div>

          {/* tag-cmp app__flex" */}
          <div className="flex-center flex-col mt-8 py-4 px-8 bg-white rounded-2xl w-auto custom-shadow shadow-black/5">
            <p className="p-text text-right uppercase w-full">Web Developer</p>
          </div>
        </div>
      </motion.div>

      {/* app__header-img */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex-1 w-full h-full flex-end relative"
      >
        <Image
          loading="eager"
          fetchPriority="high"
          className="object-contain z-1 mx-auto"
          src={images.profile}
          alt="profile_bg"
        />

        {/* overlay_circle */}
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute left-0 right-0 bottom-0 z-0 w-full h-11/12"
        >
          <Image
            src={images.circle}
            alt="profile_circle"
            className="w-full h-11/12"
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView="whileInView"
        className="flex-[0.55] flex flex-row justify-between items-start w-full flex-wrap xl:flex-col"
      >
        {data.heroSkillImages.map(({ id, img }) => (
          <div
            key={id}
            className={`circle-cmp flex-center rounded-full bg-white custom-shadow shadow-black/5 ${id === 1 && "w-20 h-20 sm:w-[100px] sm:h-[100px]"} ${id === 2 && "m-4 w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] xl:m-8"} ${id === 3 && "w-[70px] h-[70px] sm:w-20 sm:h-20"} m-3`}
          >
            <Image className="w-3/5 h-3/5" src={img} alt="circles" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Hero, "home");
