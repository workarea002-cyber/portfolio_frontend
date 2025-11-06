"use client";
import { motion } from "motion/react";
import Image, { ImageLoaderProps } from "next/image";

import { images } from "@/constants";
import { urlFor } from "@/sanity/sanityImageUrl";
import { MotionWrap, SectionWrapper } from "@/wrapper";
import type { Experience, Skill } from "@/sanity/types";

interface SkillAndExperience {
  skills: Skill[];
  experience: Experience[];
}

const Skills = ({ skills, experience }: SkillAndExperience) => {
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      {/* app__skills-container */}
      <div className="w-full xl:w-4/5 flex lg:flex-row mt-12 flex-col">
        {/* app__skills-list */}
        <motion.div className="flex-1 flex-center flex-wrap lg:flex-start mr-0 lg:mr-12">
          {skills.map(({ _id, name, icon, bgColor }) => (
            // app__skills-item app__flex
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="flex-center flex-col text-center m-4 transition-all duration-300 ease-in-out"
              key={_id}
            >
              <div
                className={`flex-center w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] rounded-full ${bgColor && `bg-${bgColor}`} bg-primary hover:custom-shadow shadow-black/5 min-[2000px]:w-[150px] min-[2000px]:h-[150px] min-[2000px]:my-4 min-[2000px]:mx-8`}
              >
                <Image
                  src={images.placeholder}
                  width={300}
                  height={200}
                  alt={name}
                  loader={({ width, quality = 100 }: ImageLoaderProps) =>
                    urlFor(icon).width(width).quality(quality).url()
                  }
                  className="w-1/2 h-1/2"
                />
              </div>
              <p className="p-text font-medium mt-2 min-[2000px]:mt-4">
                {name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* app__skills-exp */}
        <motion.div className="flex-1 flex-start flex-col lg:mt-0 mt-8">
          {experience?.map(({ _id, works, year }) => (
            // app__skills-exp-item
            <motion.div key={_id} className="w-full flex-start flex-row my-4">
              {/* app__skills-exp-year */}
              <div className="mr-4 sm:mr-12">
                <p className="bold-text font-extrabold text-secondary">
                  {year}
                </p>
              </div>
              {/* app__skills-exp-works */}
              <motion.div className="flex-1">
                {works?.map(({ _id, role, company, description }) => (
                  // app__skills-exp-work
                  <motion.div
                    key={_id}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="flex-start flex-col mb-4 cursor-pointer"
                  >
                    <h4 className="bold-text font-medium">{role}</h4>
                    <p className="p-text font-normal text-gray mt-1">
                      {company}
                    </p>
                    <p className="p-text font-normal text-gray mt-1.5">
                      {description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(MotionWrap(Skills), "skills", "bg-white");
