"use client";

import { artists } from "../../data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useEffect } from "react";
import Parallax from "../../components/parallax";

export default function Gallery({ params }) {
  const { slug } = params;
  const artist = artists.find((artist) => artist.slug === slug);
  const artistWork = artist.works;

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50% 0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  // Verificar si se encontró un artista con el slug proporcionado
  if (!artist) {
    return <p>Artista no encontrado</p>;
  }

  return (
    <div className="py-10 md:py-24">
      <motion.div
        ref={ref}
        className="relative h-[550px] flex flex-col justify-center text-white text-center bg-contain bg-no-repeat bg-center overflow-hidden"
        style={{ backgroundImage: `url(${artist.photo})` }}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl leading-tight font-bold mb-4 md:mb-8 text-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
          >
            {artist.name}
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
          >
            {artist.lastName}
          </motion.span>
        </motion.h2>
        <motion.p
          className="text-base md:text-lg mb-8 text-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
        >
          {artist.role}
        </motion.p>
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 30 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1.0 }}
        >
          <Image
            src={artist.signature}
            width={250}
            height={100}
            alt="signature"
          />
        </motion.div>
      </motion.div>
      <div className="flex justify-center">
        <motion.p
          className="md:w-2/3 my-48"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
        >
          {artist.bio}
        </motion.p>
      </div>

      {/* Agrega más propiedades según las que tenga tu objeto 'artist' */}

      <div className="">
        <Parallax works={artistWork} />
      </div>
    </div>
  );
}
