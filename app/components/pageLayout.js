"use client";
import { useRouter } from "next/navigation";
import Navbar from "./navbar";
import { AnimatePresence, motion, stagger } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const variants = {
  initial: {
    x: "-100%", // Start from the left
  },
  ltr: {
    x: 0, // Slide to the center
    transition: {
      duration: 1, // Animation duration
    },
  },
  rtl: {
    x: "-100%", // Slide to the right
    transition: {
      duration: 1, // Animation duration
    },
  },
};
const maskVariants = {
  initial: {
    x: "100%", // Start from the left
  },
  rtl: {
    x: "-100%", // Slide to the center
    transition: {
      duration: 2,
    },
  },
  ltr: {
    x: "100%", // Slide to the right
    transition: {
      duration: 2,
      // Animation duration
    },
  },
};
export default function PageLayout({ children }) {
  const router = useRouter();
  const [animationState, setAnimationState] = useState("ltr");
  const [maskAnimationState, setMaskAnimationState] = useState("rtl");
  const [isMaskAnimation, setIsMaskAnimation] = useState(false);

  const handleAnimation = () => {
    // Trigger the second animation after a delay
    // if (animationState === "rtl") {
    //   setIsMaskAnimation(true);
    // }
    setTimeout(() => {
      setAnimationState("rtl");
      setIsMaskAnimation(true);
      console.log("animationState", animationState);
    }, 2000); // Adjust the delay as needed
    if (isMaskAnimation && maskAnimationState === "rtl") {
      setMaskAnimationState("ltr");
    }
    // setTimeout(() => {
    //   setMaskAnimationState("ltr");
    // }, 2000); // Adjust the delay as needed
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname} className="relative overflow-hidden">
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
        {/* <div className="z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <Image
            src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={100}
            height={84}
            className="maskBg"
          />
        </div>
        <motion.div
          className={`slide-${
            animationState === "ltr" ? "out-left" : "in-right"
          } bg-white z-20`}
          initial="initial"
          animate={animationState}
          variants={variants}
          onAnimationComplete={handleAnimation}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        {isMaskAnimation && (
          <motion.div
            className={`slide-${
              maskAnimationState === "rtl" ? "in-right" : "out-right "
            } bg-[#0f0f0f] `}
            initial="initial"
            animate={maskAnimationState}
            variants={maskVariants}
            onAnimationComplete={handleAnimation}
            transition={{
              duration: 3,
              delay: maskAnimationState === "rtl" ? 0 : 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          ></motion.div>
        )} */}
        {/* <motion.div
          className="slide-out-left bg-white z-20"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className="slide-in-left bg-white z-20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          animat
        ></motion.div>

        <motion.div
          className="slide-out-left bg-white delay-[3000]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0 }}
        ></motion.div>
        <motion.div
          className="slide-in-left bg-white delay-[3000]"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0 }}
        ></motion.div> */}

        {/* 

        <motion.div
          className="slide-out-right bg-[#0f0f0f]"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{
            duration: 3,
            ease: [0.22, 1, 0.36, 1],
            delay: 2,
          }}
        ></motion.div>
        <motion.div
          className="slide-out-right bg-[#0f0f0f]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{
            duration: 3,
            ease: [0.22, 1, 0.36, 1],
            delay: 2,
          }}
        ></motion.div> */}
      </motion.div>
    </AnimatePresence>
  );
}
