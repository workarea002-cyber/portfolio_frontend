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
      className="flex-center flex-1 w-full h-full flex-col pt-24 px-4 pb-8 sm:px-8 min-[900px]:flex-row min-[900px]:pb-0"
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex-[0.60] flex-start self-start flex-col h-full min-[900px]:self-center min-[900px]:mr-4"
      >
        <div className="w-full flex-start flex-col min-[900px]:items-end">
          <div className="flex-center py-4 px-8 bg-white rounded-2xl flex-row w-auto shadow-lg shadow-gray-200">
            <span className="text-4xl">👋</span>

            <div className="ml-5">
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Micael</h1>
            </div>
          </div>

          <div className="flex-center flex-col mt-8 py-4 px-8 bg-white rounded-2xl w-auto shadow-lg shadow-gray-200">
            <p className="p-text text-right uppercase w-full">Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex-1 h-full flex-end relative"
      >
        <Image
          className="w-96 min-[900px]:w-full h-full object-contain z-1 mx-auto"
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
        className="flex-[0.60] flex flex-row justify-between items-start w-full h-full flex-wrap min-[900px]:flex-col"
      >
        {data.heroSkillImages.map(({ id, img }) => (
          <div
            key={id}
            className={`circle-cmp flex-center rounded-full bg-white shadow-lg shadow-gray-200 ${id === 1 && "w-20 h-20 sm:w-[100px] sm:h-[100px]"} ${id === 2 && "m-4 w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] min-[900px]:m-8"} ${id === 3 && "w-[70px] h-[70px] sm:w-20 sm:h-20"} m-3`}
          >
            <Image className="w-3/5 h-3/5" src={img} alt="circles" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
