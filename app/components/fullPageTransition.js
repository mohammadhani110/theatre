"use client";
import React, { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";

const FullPageTransition = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateTransition = async () => {
      // Animate the white background from left to right

      await animate(
        "#first",
        {
          // x: ["0%", "100%", "100%", "-100%"],
          x: "100%",
        },
        { duration: 2, delay: 1, ease: [0.22, 1, 0.36, 1] }
      );

      await Promise.all([
        animate(
          "#first",
          {
            x: "-100%",
          },
          { duration: 2, ease: [0.22, 1, 0.36, 1] }
        ),
        animate(
          "#second",
          {
            // x: ["0%", "-100%", "-100%", "0%"],
            x: ["0%", "-100%"],
          },
          {
            duration: 2,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }
        ),
      ]);
      await Promise.all([
        animate(
          "#maskedLogo",
          {
            scale: [0, 100],
            // background: "transparent",
          },
          { duration: 5, ease: [0.22, 1, 0.36, 1] }
        ),
        animate(
          "#first",
          {
            x: ["-50%", "-100%"],
            background: "black",
          },
          { duration: 2, ease: [0.22, 1, 0.36, 1] }
        ),
        animate(
          "#second",
          {
            x: ["-50%", "0%"],
            background: "black",
          },
          {
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          }
        ),
      ]);

      // setMaskedLogo(true);
    };
    // if (!maskedLogo) animateTransition();
    animateTransition();
  }, [scope?.current]);

  return (
    <div
      ref={scope}
      className="relative w-screen h-screen overflow-hidden grid place-content-center"
    >
      <div className="h-full w-full bg-white absolute" id="first"></div>

      <div
        className="h-full w-full bg-black -right-full origin-right absolute"
        id="second"
      ></div>

      <div
        id="maskedLogo"
        style={{
          width: 360,
          height: 520,
          position: "absolute",
          background: "white",
          alignSelf: "center",
          justifySelf: "center",
          clipPath:
            "polygon(10% 25%, 35% 25%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)",
        }}
      />

      {/* <div className="grid place-content-center absolute bg-black w-full h-screen">
        <motion.div
          animate={{
            scale: [0, 100],
          }}
          transition={{
            type: "ease",
            duration: 2,
          }}
          style={{
            width: 250,
            height: 250,
            background: "white",
            clipPath:
              "polygon(10% 25%, 35% 25%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)",
          }}
        />
      </div> */}
    </div>
  );
};

export default FullPageTransition;
