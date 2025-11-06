"use client";
import { motion } from "motion/react";

import type { About } from "@/sanity/types";
import { MotionWrap, SectionWrapper } from "@/wrapper";
import { urlFor } from "@/sanity/sanityImageUrl";
import { images } from "@/constants";
import Image, { ImageLoaderProps } from "next/image";

const About = ({ abouts }: { abouts: About[] }) => {
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      {/* app__profiles */}
      <div className="flex justify-center items-start flex-wrap mt-8">
        {abouts.map(({ _id, title, imgUrl, description }) => (
          // app__profile-item
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="w-full m-4 grow flex-start flex-col sm:w-[35%] lg:m-8 2xl:w-[20%] max-w-[390px]"
            key={_id}
          >
            <Image
              src={images.placeholder}
              width={300}
              height={200}
              alt={title}
              loader={({ width, quality = 100 }: ImageLoaderProps) =>
                urlFor(imgUrl).width(width).quality(quality).url()
              }
              className="aspect-3/2 w-full rounded-lg object-cover"
            />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(MotionWrap(About), "about", "bg-white");
