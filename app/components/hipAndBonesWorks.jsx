"use client";
import styles from "./hipAndBonesWorks.module.scss";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { hb1, hb2, hb3, hb4, hb5, hb6, hb7, hb8, hb9 } from "../data";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function HipAndBonesWork() {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <main
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={styles.main + ' my-44'}
    >
      <div ref={plane1} className={styles.plane}>
        <Image src={hb1} alt="image" width={400} />
        <Image src={hb2} alt="image" width={500} />
        <Image src={hb3} alt="image" width={325} />
      </div>
      <div ref={plane2} className={styles.plane}>
        <Image src={hb4} alt="image" width={350} />
        <Image src={hb5} alt="image" width={400} />
        <Image src={hb6} alt="image" width={325} />
      </div>
      <div ref={plane3} className={styles.plane}>
        <Image src={hb7} alt="image" width={250} />
        <Image src={hb8} alt="image" width={300} />
      </div>
      <div className={styles.title + ' flex flex-col items-center'}>
        <h1>Colab with HIP&BONES</h1>
        <p>TEXT about the colab</p>
        <Link className='flex items-center gap-2 mt-4 rounded-full border-[0.5px] py-2 px-4' href={'/'}>SEE MORE <ArrowTopRightIcon /></Link>
      </div>
    </main>
  );
}
