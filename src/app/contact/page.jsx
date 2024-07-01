"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = "Say hello ";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col items-center lg:flex-row px-4 sm:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
            ☕️
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-2/3 lg:w-1/2 bg-hover rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Ethan,</span>
          <motion.textarea
            whileFocus={{ borderColor: "#ADB5BD" }} // light-4
            rows={6}
            className="bg-transparent border-b-2 pb-2 border-dark-2 outline-none resize-none font-thin"
            name="user_message"
          />
          <span>My mail address is: </span>
          <motion.input
            whileFocus={{ borderColor: "#ADB5BD" }} // light-4
            type="text"
            className="bg-transparent border-b-2 pb-2 border-dark-2 outline-none font-thin"
            name="user_email"
          />
          <button className="bg-light-1 rounded font-semibold text-black p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
