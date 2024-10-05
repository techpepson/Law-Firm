import React from "react";
import * as Form from "@radix-ui/react-form";
import { motion } from "framer-motion";
import { Footer, Header } from "./component-exports";
import "../App.css";
import { icons } from "../assets/icons";
import { Helmet } from "react-helmet";

const ContactUs: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta
          name="description"
          content="The official contact us page of Fortuna Legal Services."
        />
        <meta
          name="keywords"
          content="Fortuna, law, will drafting,contact,  attorney, lawyer, legal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Contact Us" />
        <meta
          property="og:description"
          content="The official about page of Fortuna Legal Services."
        />
        <meta property="og:image" content="https://fortuna-legal.com/contact" />
        <meta property="og:url" content="https://fortuna-legal.com/contact" />
      </Helmet>
      <Header />
      <motion.div
        className="px-5 py-10 contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-bold text-center mb-8 text-white oleo-script-regular"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
          <p className="oleo-script-regular">
            Reach Out to Fortuna Legal Via This Form
          </p>
        </motion.h1>
        <Form.Root className="max-w-lg mx-auto bg-white shadow-lg p-8 rounded-lg">
          <Form.Field className="mb-6" name="name">
            <motion.div
              className="flex flex-col gap-2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Form.Label className="text-gray-700 text-sm font-semibold">
                Name
              </Form.Label>
              <Form.Control asChild>
                <motion.input
                  className="border border-gray-300 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  type="text"
                  placeholder="Your Name"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </Form.Control>
            </motion.div>
          </Form.Field>

          <Form.Field className="mb-6" name="email">
            <motion.div
              className="flex flex-col gap-2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Form.Label className="text-gray-700 text-sm font-semibold">
                Email
              </Form.Label>
              <Form.Control asChild>
                <motion.input
                  className="border border-gray-300 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  type="email"
                  placeholder="Your Email"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              </Form.Control>
            </motion.div>
          </Form.Field>

          <Form.Field className="mb-6" name="message">
            <motion.div
              className="flex flex-col gap-2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Form.Label className="text-gray-700 text-sm font-semibold">
                Message
              </Form.Label>
              <Form.Control asChild>
                <motion.textarea
                  className="border border-gray-300 px-4 py-2 rounded-md h-32 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="Your Message"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
              </Form.Control>
            </motion.div>
          </Form.Field>

          <Form.Submit asChild type="button">
            <motion.button
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg w-full text-lg font-semibold hover:bg-indigo-700 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Send Message
            </motion.button>
          </Form.Submit>
        </Form.Root>
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Location */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <button className="p-2 bg-indigo-600 text-white rounded-full">
              {icons.locationIcon}
            </button>
            <p className="text-gray-800 font-semibold">
              50 Raffles Place L19 & L30, Singapore, 048623
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <button className="p-2 bg-indigo-600 text-white rounded-full">
              {icons.phoneIcon}
            </button>
            <p className="text-gray-800 font-semibold">+233123456789</p>
          </motion.div>
          <motion.div
            className="flex items-center space-x-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <button className="p-2 bg-indigo-600 text-white rounded-full">
              {icons.email}
            </button>
            <p className="text-gray-800 font-semibold">
              fortuna-legal@gmail.com
            </p>
          </motion.div>

          {/* Office */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <button className="p-2 bg-indigo-600 text-white rounded-full">
              {icons.officeIcon}
            </button>
            <p className="text-gray-800 font-semibold">
              Raffles Place, Singapore (Main Office)
            </p>
          </motion.div>
        </motion.div>
        );
      </motion.div>
      <Footer />
    </>
  );
};

export default ContactUs;
