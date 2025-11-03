"use client";
import Image, { ImageLoaderProps } from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { data } from "@/constants";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/sanityImageUrl";
import SectionWrapper from "@/wrapper/SectionWrapper";

interface Work {
  _id: string;
  name: string;
  imgUrl: SanityImageSource; // you can refine later to SanityImageSource
  description?: string;
}

const Work = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [filterWorks, setFilterWorks] = useState<Work[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWorks(data);
    });
  }, []);

  const handleWorkFilter = ({ name }: { name: string }) => {};

  return (
    <div>
      <h2 className="head-text">
        My Creative <span>Portfolio</span>
      </h2>

      <div className="app__work-filter">
        {data.workTech.map(({ name }, index) => (
          <div
            key={name + index}
            onClick={() => handleWorkFilter({ name })}
            className={`app__work-filter-item flex-center p-text ${activeFilter === name && "active"}`}
          >
            {name}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWorks.map((work) => (
          <div key={work._id} className="app__work-item flex-center">
            <div className="app__work-img flex-center">
              <Image
                src="nothing"
                width={300}
                height={200}
                alt=""
                loader={({ width, quality = 100 }: ImageLoaderProps) =>
                  urlFor(work.imgUrl).width(width).quality(quality).url()
                }
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Work, "work");
