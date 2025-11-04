"use client";
import { useEffect, useState } from "react";
import Image, { ImageLoaderProps } from "next/image";
import { motion, stagger, TargetAndTransition } from "motion/react";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/sanityImageUrl";
import SectionWrapper from "@/wrapper/SectionWrapper";

interface Skills {
  name: string;
  icon: SanityImageSource; // you can refine later to SanityImageSource
  bgColor?: string;
}
interface Experiences {
  year: string;
  works: string[];
}

const Skills = () => {
  const [skills, setSkills] = useState<Skills[]>([]);
  const [experiences, setExperiences] = useState<Experiences[]>([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const experienceQuery = '*[_type == "experiences"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
      console.log(skills);
    });
    client.fetch(experienceQuery).then((data) => {
      setExperiences(data);
      console.log(experiences);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      {/* app__skills-container */}
      <div className="w-full lg:w-4/5 flex flex-row mt-12">
        {/* app__skills-list */}
        <motion.div className="flex-1 flex-center flex-wrap lg:flex-start mr-0 lg:mr-20">
          {skills.map(({ name, icon, bgColor }) => (
            // app__skills-item app__flex
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="flex-center flex-col text-center m-4 transition-all duration-300 ease-in-out"
              key={name}
            >
              <div
                className={`flex-center w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] rounded-full bg-[#fef4f5] bg-${bgColor} hover:shadow-lg min-[2000px]:w-[150px] min-[2000px]:h-[150px] min-[2000px]:my-4 min-[2000px]:mx-8`}
              >
                <Image
                  src="/assets/placeholder.svg"
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
        <motion.div className="">
          {experiences.map((experience) => (
            <motion.div>
              {/* app__skills-exp-works */}
              <motion.div>
                {experience.works.map(() => (
                  // app__skills-exp-work
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className=""
                  ></motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
