"use client";
import Link from "next/link";
import Service from "./components/Service";
import { AnimatePresence } from "framer-motion";
export default function Home() {
  const services = [
    {
      titlePart: ["PROJECT", "PLANNING"],
      description:
        "We strive to offer you the most comprehensive project planning services. Our team meticulously evaluates your requirements, budget constraints, and aesthetic preferences to create a tailored plan that aligns with your vision. From conceptualization to detailed scheduling, we are committed to ensuring a seamless and efficient planning process that sets the foundation for a successful project.",
      loc: "/homeWhite.jpg",
    },
    {
      titlePart: ["ARCHITECTURAL", "DESIGN"],
      description:
        "Embark on a journey of architectural excellence with our dedicated design team. Our architects bring innovation and creativity to every project, crafting spaces that harmonize functionality, aesthetics, and sustainability. Whether you're dreaming of a modern masterpiece or a timeless classic, we collaborate closely with you to turn your architectural vision into reality, ensuring each design element reflects your unique style and requirements.",
      loc: "/home1.jpg",
    },
    {
      titlePart: ["INTERIOR", "DESIGN"],
      description:
        "Transform your living and working spaces into captivating environments with our exceptional interior design services. Our team of skilled designers pays meticulous attention to every detail, from furniture selection to color schemes, lighting, and spatial arrangement. We believe in creating interiors that not only reflect your personality and taste but also enhance functionality and comfort. Elevate your surroundings with our thoughtful and stylish interior designs.",
      loc: "/home2.jpg",
    },
    // You can continue adding more service objects with descriptive paragraphs
  ];

  const title: any[] = ["PROJECT", "PLANNING"];
  return (
    <main className=" w-[95vw] ">
      <div
        className="w-[95vw] h-[60vh] flex items-center overflow-hidden justify-around mx-auto text-black font-bold"
        style={{
          backgroundImage: "url(/home.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="relative text-white text-4xl uppercase ">
          What do we do ?
          <span className=" w-20 absolute -bottom-3 mt-4 left-6 bg-white h-1"></span>
        </div>
        <div className="text-white  hover:animate-bounce  hover:ease-in  text-2xl ">
          <Link className="relative " href={"/"}>
            <span className=" w-16 absolute top-0 right-20 mt-4 bg-white h-1"></span>
            <span className=" w-16 absolute top-0 left-20 mt-4 bg-white h-1"></span>
            HOME
          </Link>
        </div>
      </div>
      <section className="bg-white px-10 pt-5 h-full">
        <AnimatePresence>
          {services.map((service, index) => (
            <Service
              key={index}
              titlePart={service.titlePart}
              description={service.description}
              loc={service.loc}
            />
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
}
