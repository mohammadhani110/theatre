"use client";
import React from "react";
import Head from "next/head";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import PageLayout from "../components/pageLayout";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      {/* container */}
      <PageLayout>
        <div className="max-w-full w-full">
          <div class="flex items-center w-100 justify-center lg:min-h-screen bg-[#290808]">
            <div class="w-full px-6 py-12 bg-black  md:w-4/5 lg:w-3/5 2xl:w-2/4">
              <h2 class="mb-6 text-3xl md:text-4xl lg:text-5xl xl:text-7xl antialiased font-Bold uppercase text-center text-white">
                Contact Us
              </h2>
              <form class="mx-16 space-y-8" onSubmit={handleSubmit(onSubmit)}>
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
                  class="block w-40 px-2 py-4 mt-2 font-semibold text-black bg-white rounded-full"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Contact;
