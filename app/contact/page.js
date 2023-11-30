"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Wrapper from "../components/wrapper";
import { useAnimate, motion } from "framer-motion";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

// const variants = {
//   initial: {
//     x: "-100%",
//   },
//   hidden: {
//     y: 0,
//     height: 0,
//     width: 0,
//     transition: {
//       duration: 1,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
//   visible: {
//     y: 0,
//     // padding: "3rem 1.5rem",
//     height: ["0px", "5px"],
//     width: ["0%", "60%"],
//     transition: {
//       duration: 1,
//       delay: 0.25,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
//   invisible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       delay: 0.25,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

const Contact = () => {
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateTransition = async () => {
      await animate(
        "#line",
        {
          scale: [0, 1],
          opacity: 1,
        },
        { duration: 2, ease: [0.22, 1, 0.36, 1] }
      );
      await animate(
        "#line",
        {
          rotate: [0, 90],
          // scale: [1, 0.5],
          scale: [1, 0.5],
        },
        { duration: 2, ease: [0.22, 1, 0.36, 1] }
      );

      await animate(
        "#line",
        {
          scaleX: [0, 200],
          // scaleY: 1,
        },
        { duration: 2, ease: [0.22, 1, 0.36, 1] }
      );

      await Promise.all([
        animate(
          scope.current,
          {
            background: "black",
            height: 536,
            marginTop: "6.5rem",
            marginBottom: "4.5rem",
            display: "block",
          },
          { duration: 1, ease: [0.22, 1, 0.36, 1] }
        ),

        animate(
          "#line",
          {
            display: "none",
          },
          { duration: 2, ease: [0.22, 1, 0.36, 1] }
        ),
      ]);
      // await animate(
      //   "h2",
      //   {
      //     y: [75, 0],
      //   },
      //   { duration: 1, ease: [0.22, 1, 0.36, 1] }
      // );
      await animate(
        "form",
        {
          opacity: 1,
          display: "block",
          // marginInline: "2rem",
          y: [100, 0],
        },
        { duration: 2, ease: [0.22, 1, 0.36, 1] }
      );
    };
    animateTransition();
  }, [scope?.current]);

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Wrapper>
        <div className="max-w-full w-full">
          <div className="flex items-center w-100 justify-center lg:min-h-screen bg-[#290808]">
            <div
              ref={scope}
              className="grid place-content-center w-full relative px-6 py-12 bg-transparent md:w-4/5 lg:w-3/5 2xl:w-2/4 "
            >
              {/* <div class="rotation-wrapper-outer">
                <div class="rotation-wrapper-inner"> */}
              <div
                id="line"
                className=" bg-black -mt-5 self-center absolute opacity-0 h-2 w-full"
              ></div>
              {/* </div>
              </div> */}
              <h2 className="mb-6 relative z-10 text-3xl md:text-4xl lg:text-5xl xl:text-7xl antialiased font-Bold uppercase text-center text-white">
                Contact Us
              </h2>
              <form
                className="space-y-8 opacity-0 hidden mx-8"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mb-4">
                  <label htmlFor="name" className="uppercase text-sm">
                    Name
                  </label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field, fieldState }) => (
                      <input
                        type="text"
                        id="name"
                        {...field}
                        className={`w-full p-2 text-sm border-b-2 border-gray-400 outline-none bg-black opacity-50 focus:border-white focus:opacity-100 ${
                          fieldState.error && "border-red-500"
                        }`}
                      />
                    )}
                  />
                  {formState.errors.name && (
                    <p className="text-red-500">
                      {formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="uppercase text-sm">
                    Email
                  </label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState }) => (
                      <input
                        type="email"
                        id="email"
                        {...field}
                        className={`w-full p-2 text-sm border-b-2 border-gray-400 outline-none bg-black opacity-50 focus:border-white focus:opacity-100 ${
                          fieldState.error && "border-red-500"
                        }`}
                      />
                    )}
                  />
                  {formState.errors.email && (
                    <p className="text-red-500">
                      {formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="uppercase text-sm">
                    Message
                  </label>
                  <Controller
                    name="message"
                    control={control}
                    render={({ field, fieldState }) => (
                      <textarea
                        id="message"
                        rows="1"
                        {...field}
                        className={`resize-none w-full p-2 text-sm border-b-2 border-gray-400 outline-none bg-black opacity-50 focus:border-white focus:opacity-100  ${
                          fieldState.error && "border-red-500"
                        }`}
                        style={{ whiteSpace: "normal" }}
                      />
                    )}
                  />
                  {formState.errors.message && (
                    <p className="text-red-500">
                      {formState.errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="block w-40 px-2 py-4 mt-2 font-semibold text-black bg-white rounded-full"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;
