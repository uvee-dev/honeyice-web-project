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

  if (!artist) {
    return <p>Artista no encontrado</p>;
  }

  return (
    <div className="py-10 md:py-24 flex flex-col md:flex-row">
      {/* Columna Fija con la foto y firma del artista */}
      <div className="h-[550px] md:w-[30%] flex-shrink-0 mb-8 md:mb-0 text-white text-center bg-contain bg-no-repeat bg-center overflow-y-visible sticky top-40">
        <div className="h-full flex flex-col justify-end items-center">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
          >
            <Image
              src={artist.photo}
              width={550}
              height={700}
              alt="artist-photo"
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-5 -right-10 overflow-visible left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 30 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 1.0 }}
          >
            <Image
              src={artist.signature}
              width={300}
              height={150}
              alt="signature"
            />
          </motion.div>
        </div>
      </div>

      {/* Columna con scroll que inicialmente muestra la información del artista */}
      <div className="md:w-[70%] flex flex-col justify-center items-center overflow-y-auto">
        <motion.div
          ref={ref}
          className="md:w-2/3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl leading-tight font-bold mb-1 md:mb-2 text-shadow">
            <span className="block">
              {artist.name} {artist.lastName}
            </span>
          </h2>
          <p className="text-base md:text-lg mb-8 text-shadow italic font-light">{artist.role}</p>
          <p>{artist.bio}</p>
        </motion.div>

        {/* Parallax debajo de la información del artista */}
        <div className="md:w-2/3">
          <Parallax works={artistWork} />
        </div>
      </div>
    </div>
  );
}