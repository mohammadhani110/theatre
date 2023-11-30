"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./navbar";
import { AnimatePresence, motion } from "framer-motion";

export default function Wrapper({ children }) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname} className="relative overflow-hidden">
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
