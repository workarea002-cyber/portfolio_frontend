"use client";
import Image, { ImageLoaderProps } from "next/image";
import { motion, TargetAndTransition } from "motion/react";
import { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { data, images } from "@/constants";
import type { Project } from "@/sanity/types";
import { urlFor } from "@/sanity/sanityImageUrl";
import { MotionWrap, SectionWrapper } from "@/wrapper";

const Work = ({ projects }: { projects: Project[] }) => {
  const [filterWorks, setFilterWorks] = useState<Project[]>(projects);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState<TargetAndTransition>({
    y: 0,
    opacity: 1,
  });

  useEffect(() => {
    setFilterWorks(projects);
  }, [projects]);

  const handleWorkFilter = ({ name }: { name: string }) => {
    setActiveFilter(name);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (name === "All") {
        setFilterWorks(projects);
      } else {
        setFilterWorks(
          projects.filter((project) => project.tags.includes(name))
        );
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span>
      </h2>

      {/* app__work-filter */}
      <div className="flex justify-start items-center flex-row flex-wrap mt-16 mb-8">
        {data.workTech.map(({ name }, index) => (
          // app__work-filter-item
          <div
            key={name + index}
            onClick={() => handleWorkFilter({ name })}
            className={`flex-center p-text py-2 px-4 rounded-lg font-extrabold cursor-pointer transition-all duration-300 ease-in-out m-2 hover:bg-secondary hover:text-white ${activeFilter === name ? "bg-secondary text-white" : "bg-white text-black"}`}
          >
            {name}
          </div>
        ))}
      </div>

      {/* app__work-portfolio */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex-start flex-wrap"
      >
        {filterWorks.map(
          ({
            _id,
            title,
            imgUrl,
            description,
            projectLink,
            codeLink,
            tags,
          }) => (
            // app__work-item
            <div
              key={_id}
              className="flex-center w-full grow sm:w-[35%] flex-col m-4 lg:m-8 p-4 rounded-lg bg-white text-black cursor-pointer transition-all duration-300 ease-in-out  hover:custom-shadow shadow-black/5 min-[2000px]:p-5 min-[2000px]:rounded-lg"
            >
              {/* app__work-img */}
              <div className="flex-center w-full relative">
                <Image
                  src={images.placeholder}
                  width={300}
                  height={200}
                  alt={title}
                  loader={({ width, quality = 100 }: ImageLoaderProps) =>
                    urlFor(imgUrl).width(width).quality(quality).url()
                  }
                  className="aspect-3/2 rounded-lg object-cover w-full"
                />

                {/* app__work-hover */}
                <div className="flex-center gap-1 m-2 absolute top-0 right-0 rounded-lg transition-all duration-300 ease-in-out">
                  <a href={projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.1 }}
                      className="flex-center w-7 h-7 rounded-full bg-linear-to-tr from-gray-500 to-zinc-950  text-white font-extrabold cursor-pointer transition-all duration-300 ease-in-out"
                    >
                      <AiFillEye className="w-1/2 text-white" />
                    </motion.div>
                  </a>

                  <a href={codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="flex-center w-7 h-7 rounded-full bg-linear-to-tr from-gray-500 to-zinc-950 text-white font-extrabold cursor-pointer transition-all duration-300 ease-in-out"
                    >
                      <AiFillGithub className="w-1/2 text-white" />
                    </motion.div>
                  </a>
                </div>
              </div>

              <div className="flex-start p-2 w-full relative flex-col">
                <h4 className="bold-text mt-4 min-[2000px]:mt-12">{title}</h4>
                <p className="p-text mt-2.5 line-clamp-2">{description}</p>

                <div className="flex flex-wrap w-full mt-4 gap-1">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-white rounded flex-center border border-lightGray py-1 px-1.5 gap-1.5"
                    >
                      <Image
                        src={images[tag.toLowerCase() as keyof typeof images]}
                        width={24}
                        height={24}
                        alt={tag}
                      />
                      <p className="p-text rounded-full text-xs">{tag}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </motion.div>
    </>
  );
};

export default SectionWrapper(MotionWrap(Work), "work");
