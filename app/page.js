'use client'
import { AnimatePresence } from "framer-motion";
import ComingSoon from "./components/comingSoon";

export default function Home() {
  return (
    <AnimatePresence>
      <ComingSoon />
    </AnimatePresence>
  );
}
