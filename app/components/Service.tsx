"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
interface ServiceProps {
  titlePart: string[];
  description: string;
  loc: string;
}
const Service: React.FC<ServiceProps> = ({ titlePart, description, loc }) => {
  const { ref, inView } = useInView({
    // rootMargin: "300px 0px 0px 0px",
    triggerOnce: false,
  });

  const imageVariants = {
    hidden: { opacity: 1, x: "-30%", transition: { duration: 1.0 } },
    visible: { opacity: 1, x: "0%", transition: { duration: 1.0 } },
  };
  return (
    <>
      <div className="container pt-5 ">
        <h2 className="text-2xl  text-black">
          <span>{titlePart[0]}</span>
          <span className="font-bold"> {titlePart[1]}</span>
        </h2>
        <div className="grid grid-cols-5 items-center">
          <article className="text-black px-3 col-span-3">
            {description}
          </article>
          <motion.div
            ref={ref}
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="col-span-2"
          >
            <Image
              src={loc}
              alt="idk"
              width={300}
              height={300}
              className="w-full overflow-hidden h-full"
            />
          </motion.div>
        </div>
      </div>
      <div className=" w-[88vw] h-[2px] bg-gray-300 mt-4"></div>
    </>
  );
};

export default Service;
