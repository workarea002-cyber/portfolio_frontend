"use client";
import Image, { ImageLoaderProps } from "next/image";
import { motion, stagger, TargetAndTransition } from "motion/react";
import { useEffect, useState } from "react";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { data } from "@/constants";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/sanityImageUrl";
import SectionWrapper from "@/wrapper/SectionWrapper";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

interface Work {
  _id: string;
  title: string;
  imgUrl: SanityImageSource; // you can refine later to SanityImageSource
  description?: string;
  projectLink?: string;
  codeLink?: string;
  tags: string[];
}

interface animateCard {
  y: number;
  opacity: number;
}

const Work = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [filterWorks, setFilterWorks] = useState<Work[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState<TargetAndTransition>({
    y: 0,
    opacity: 1,
  });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWorks(data);
    });
  }, []);

  const handleWorkFilter = ({ name }: { name: string }) => {
    setActiveFilter(name);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (name === "All") {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tags.includes(name)));
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
        className="flex-center flex-wrap"
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
              className="flex-center max-w-2xs w-full grow sm:w-[35%] lg:w-[25%] flex-col m-4 lg:m-8 p-4 rounded-lg bg-white text-black cursor-pointer transition-all duration-300 ease-in-out hover:card-shadow min-[2000px]:h-[470px] min-[2000px]:p-5 min-[2000px]:rounded-lg"
            >
              {/* app__work-img */}
              <div className="flex-center w-full aspect-video relative min-[2000px]:h-[350px]">
                <Image
                  src="/assets/placeholder.svg"
                  width={300}
                  height={200}
                  alt={title}
                  loader={({ width, quality = 100 }: ImageLoaderProps) =>
                    urlFor(imgUrl).width(width).quality(quality).url()
                  }
                  className="aspect-video rounded-lg object-cover"
                />
                {/* app__work-hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    delayChildren: stagger(0.5),
                  }}
                  className="flex-center absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-black/50 rounded-lg transition-all duration-300 ease-in-out"
                >
                  <a href={projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="flex-center w-[50px] h-[50px] rounded-full bg-black/50 text-white m-4 font-extrabold cursor-pointer transition-all duration-300 ease-in-out"
                    >
                      <AiFillEye className="w-1/2 text-white" />
                    </motion.div>
                  </a>
                  <a href={codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="flex-center w-[50px] h-[50px] rounded-full bg-black/50 text-white m-4 font-extrabold cursor-pointer transition-all duration-300 ease-in-out"
                    >
                      <AiFillGithub className="w-1/2 text-white" />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="flex-center p-2 w-full relative flex-col">
                <h4 className="bold-text mt-4 min-[2000px]:mt-12">{title}</h4>
                <p className="p-text mt-2.5">{description}</p>

                <div className="flex-center absolute py-2 px-4 rounded-lg bg-white -top-6">
                  <p className="p-text">{tags[0]}</p>
                </div>
              </div>
            </div>
          )
        )}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Work, "work");
