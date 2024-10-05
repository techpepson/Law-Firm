import {
  Button,
  Card,
  Container,
  Heading,
  Select,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  homeTexts,
  servicesData,
  sponsorData,
  staffData,
} from "../data/homeData";
import "../App.css";
import {
  cityVid,
  lawHammer,
  lawStatue,
  lawyer,
  legalMachine,
  whiteCity,
} from "../assets/images";
import { Link } from "react-router-dom";
import { InfiniteMovingCardsDemo } from "./util/InfiniteMovingCardsDemo";
import { homePageStyles } from "../styles/homePageStyles";
import { icons } from "../assets/icons";
import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { Footer, Header } from "./component-exports";

const Home: React.FC = () => {
  //number animation values
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + "+");

  useEffect(() => {
    const controls = animate(count, 200, { duration: 3 });

    return () => controls.stop();
  }, []);

  const count2 = useMotionValue(0);
  const rounded2 = useTransform(count2, (latest) => Math.round(latest) + "+");

  useEffect(() => {
    const controls = animate(count2, 400, { duration: 3 });

    return () => controls.stop();
  }, []);

  const count3 = useMotionValue(0);
  const rounded3 = useTransform(count3, (latest) => Math.round(latest) + "+");

  useEffect(() => {
    const controls = animate(count3, 500, { duration: 3 });

    return () => controls.stop();
  }, []);

  const count4 = useMotionValue(0);
  const rounded4 = useTransform(count4, (latest) => Math.round(latest) + "+");

  useEffect(() => {
    const controls = animate(count4, 300, { duration: 3 });

    return () => controls.stop();
  }, []);

  return (
    <>
      <Helmet>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps:wght@400;900&family=Spicy+Rice&display=swap');
        </style>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps:wght@400;900&family=Spicy+Rice&display=swap');
        </style>
        <title>Home</title>
        <meta
          name="description"
          content="The official home page of Fortuna Legal Services."
        />
        <title>Home</title>
        <meta
          name="keywords"
          content="Fortuna, law, will drafting, attorney, lawyer, legal, lawyers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Fortuna Home" />
        <meta
          property="og:description"
          content="The official home page of Fortuna Legal Services."
        />
        <meta property="og:image" content="https://fortuna-legal.com/" />
        <meta property="og:url" content="https://fortuna-legal.com/" />
      </Helmet>
      {/*container for the home page */}
      <div>
        {/*section for the home page upper section*/}
        <section>
          {/*container for the upper section*/}
          <div className={`relative h-[42rem]`}>
            <div className="absolute w-full">
              <Header />
            </div>
            {/*image to use for the background*/}
            <div className={`${homePageStyles.imageContainerStyles} h-full`}>
              <img
                src={lawHammer}
                alt="an image of the scale of lawyers"
                className={`w-full h-full`}
              />
            </div>
            {/*upper section texts*/}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
              className="flex flex-col relative ml-24 top-36 max-md:ml-5"
            >
              {homeTexts.map((text) => (
                <div className="max-w-[75ch] text-wrap flex flex-col gap-5 justify-center">
                  <Heading className="leading-snug text-white text-5xl font-light antialiased font-spicy">
                    {text.heading}
                  </Heading>
                  <div className="max-w-[70ch]">
                    <Text className="text-white elsie-swash-caps-regular text-lg">
                      {text.description}
                    </Text>
                  </div>
                  <div>
                    <Link to="">
                      <Button>
                        <span className="cursor-pointer">Get Assistance</span>
                        <button>{icons.longRightArrow}</button>
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
        {/*section for the records*/}
        <section>
          {/*container for the records section*/}
          <Container>
            <motion.div className="flex justify-center items-center flex-col gap-5">
              {/*start year*/}
              <div>
                <span className="font-bold text-5xl antialiased elsie-swash-caps-regular">
                  Since 2014
                </span>
              </div>
              <div className="flex gap-10 max-md:grid max-md:grid-cols-2 max-sm:grid">
                {/*trust administrations*/}
                <Card className="w-full h-full border-solid shadow-lg">
                  <motion.div
                    whileHover={{ scale: 0.8 }}
                    className="flex flex-col justify-center items-center border-solid shadow-md cursor-pointer"
                  >
                    <motion.span className="font-bold text-6xl">
                      {rounded}
                    </motion.span>
                    <span className="font-thin">Trust Administrations</span>
                  </motion.div>
                </Card>
                {/*estate plans*/}
                <Card className="w-full h-full border-solid shadow-lg">
                  <motion.div
                    whileHover={{ scale: 0.8 }}
                    className="flex flex-col justify-center items-center border-solid cursor-pointer shadow-lg "
                  >
                    <motion.span className="font-bold text-6xl">
                      {rounded2}
                    </motion.span>
                    <span className="font-thin">Estate Plans</span>
                  </motion.div>
                </Card>
                {/*litigation clients*/}
                <Card className="w-full h-full border-solid shadow-lg">
                  <motion.div
                    whileHover={{ scale: 0.8 }}
                    className="flex flex-col justify-center items-center cursor-pointer border-solid shadow-lg"
                  >
                    <motion.span className="font-bold text-6xl">
                      {rounded3}
                    </motion.span>
                    <span className="font-thin">Litigation Clients</span>
                  </motion.div>
                </Card>
                {/*security cases*/}
                <Card className="w-full h-full border-solid shadow-lg">
                  <motion.div
                    className="flex flex-col justify-center items-center border-solid shadow-lg cursor-pointer"
                    whileHover={{ scale: 0.8 }}
                  >
                    <motion.span className="font-bold text-6xl">
                      {rounded4}
                    </motion.span>
                    <span className="font-thin">Security Cases</span>
                  </motion.div>
                </Card>
              </div>
            </motion.div>
          </Container>
        </section>
        {/*introduction section*/}
        <section>
          {/*container for the introduction section*/}
          <div className="mid-section-styles">
            <Container>
              <div className="flex max-lg:flex-col gap-5 mt-14 relative w-full h-full">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-col gap-5"
                >
                  <p className="font-light">INTRODUCTION</p>
                  <Heading>
                    <span className=" text-4xl elsie-swash-caps-regular">
                      Trust & Estate Litigation Attorneys Serving All of
                      Singapore
                    </span>
                  </Heading>
                  <p>
                    Fortuna&apos;s trust and estate attorneys represent
                    trustees, beneficiaries, and heirs throughout all of
                    Singapore, including Marina Bay, Raffles Place, Newton,
                    River Valley, Tampines, Pasir Ris, Bedok, Marine Parade,
                    Oakland, and Walnut Creek, SG. For more than 8 years, our
                    Contra Costa county attorneys have tried, litigated,
                    mediated, and settled cases involving every type of dispute
                    concerning:
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      <span>Probate Issues</span>
                    </li>
                    <li>
                      <span>Succession Planning</span>
                    </li>
                    <li>
                      <span>Inheritance Issues</span>
                    </li>
                    <li>
                      <span>Trust and will Contests</span>
                    </li>
                  </ul>
                  <p>
                    If you have been looking for estate administration attorneys
                    near you, Fortuna is always available at your doorstep.
                  </p>
                  <motion.div whileHover={{ scale: 0.98 }}>
                    <Link to="">
                      <Button className="cursor-pointer">
                        <Text>Contact Us</Text>
                        <button>{icons.longRightArrow}</button>
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
                {/*side image for the section*/}
                <div className="relative w-full h-full max-lg:hidden">
                  <motion.img
                    src={lawStatue}
                    alt="an image of a law statue"
                    className="w-full h-full max-lg:w-auto max-lg:h-auto rounded-2xl cursor-pointer"
                    whileHover={{ scale: 0.9 }}
                  />
                </div>
              </div>
            </Container>
            <div className="flex justify-center mt-14">
              <Heading className="text-3xl ">
                <span className="elsie-swash-caps-regular">Our Partners</span>
              </Heading>
              <div className="flex justify-center max-md:justify-start max-md:items-start gap-10 mt-24">
                {sponsorData.map((sponsor) => (
                  <div className="flex  gap-5">
                    <img
                      src={sponsor.image}
                      alt="an image of one of our sponsors"
                      className="w-32 h-32 rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/*display sponsors and partners*/}
        </section>

        {/*section for the mid level*/}
        <section>
          <div className="relative h-[55rem] bg-black bg-opacity-25 mt-10 flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute -z-[999] w-full h-full">
              <img
                src={lawHammer}
                alt="an image of the legal hammer of lawyers"
                className="w-full h-full object-cover" // Prevents overflow and ensures the image covers the container proportionally
              />
            </div>

            {/* Text Content */}
            <motion.div className="z-10 h-full flex justify-center items-center flex-col gap-5">
              {/* Ensures this div appears above the image */}
              <Heading className="text-white text-6xl">
                <span className="elsie-swash-caps-regular italic">
                  WE ARE KNOWN
                </span>
              </Heading>
              <p className="text-white text-3xl elsie-swash-caps-regular text-wrap">
                We are proud to call Singapore our home, where we grew up,
                attended school, and chose to raise our families. As your
                trusted legal partners, we deeply value the attorney-client
                relationship and hold your trust in our integrity and competence
                in the highest regard.
              </p>
            </motion.div>
          </div>
        </section>

        {/*section for practice areas*/}
        <section>
          <div className="bg-black bg-opacity-5 relative w-full h-full mt-10">
            {/*background image for the services section*/}
            <div className="absolute w-full h-full -z-[999]">
              <img
                src={lawyer}
                alt="an image of a lawyer in her office"
                className="w-full h-full"
              />
            </div>
            <Container>
              <div className="flex flex-col gap-5 mt-10">
                <Heading className="text-3xl font-light italic">
                  OUR SPECIALTIES
                </Heading>
                {/*container for the specialty texts and buttons*/}
                <div className="flex justify-between items-center max-md:flex-col max-md:gap-5">
                  <div className="flex flex-col gap-3">
                    <Heading className="flex justify-center font-light italic ">
                      <span className="elsie-swash-caps-regular">
                        Our Personalized Legal Services
                      </span>
                    </Heading>
                    <p className="max-w-[80ch] italic">
                      Whether you are facing a dispute with a trustee or
                      executor, need to create a comprehensive estate plan, or
                      require a review of an existing plan, we are here to
                      provide expert guidance and support tailored to your
                      needs.
                    </p>
                  </div>
                  <Button className="cursor-pointer">
                    <Text>View All</Text>
                    {icons.longRightArrow}
                  </Button>
                </div>
                {/*container for the images describing our services*/}
                <div className="grid grid-cols-2 max-md:flex max-md:flex-col max-md:gap-10 gap-5">
                  {servicesData.map((service) => (
                    <Link to={service.link}>
                      <div className="h-auto">
                        <motion.img
                          src={service.image}
                          alt={`an image of ${service.title}`}
                          className="w-34 h-34 max-md:w-full max-md:h-full rounded-lg"
                          initial={{ opacity: 0, y: 50 }} // Start off hidden and slightly below the viewport
                          animate={{ opacity: 1, y: 0 }} // Animate to fully visible and at normal position
                          transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition when component appears
                          whileHover={{
                            rotate: 5, // Slight rotation on hover
                            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add shadow for depth effect
                            opacity: 0.9, // Slight opacity change for a "glowing" effect
                          }}
                          whileTap={{
                            rotate: -5,
                            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add shadow for depth effect
                            opacity: 0.9, // Slight reverse rotation on tap/click
                          }}
                        />
                        <span className="text-xl font-spicy text-white shadow-lg">
                          {service.title}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/*section for free consultation*/}
        <section>
          <div className="relative h-[42rem]">
            <div className=" w-full absolute h-full -z-[999]  overflow-hidden">
              <video
                src={cityVid}
                autoPlay
                muted
                loop
                controls={false}
                className="object-cover w-full h-full max-md:hidden flex"
              ></video>
            </div>
            <div className=" w-full absolute h-full -z-[999]  overflow-hidden max-md:flex hidden">
              <img src={whiteCity} className="object-cover w-full h-full" />
            </div>

            <div className="flex max-lg:flex-col justify-center gap-5 items-center h-full bg-black bg-opacity-25">
              <Heading className="max-w-[60ch] ">
                <span className="elsie-swash-caps-regular text-6xl  text-white flex items-center justify-center">
                  Request a Free Consultation With Fortuna Legal Services
                </span>
              </Heading>
              <p className="text-white text-xl ">
                We&apos;ll respond to your inquiry within 24 hours.
              </p>
              <Button className="cursor-pointer">
                <Text>Contact Us Today</Text>
                <button>{icons.longRightArrow}</button>
              </Button>
            </div>
          </div>
        </section>

        {/*section for team members*/}
        <section>
          {/*container for team section*/}
          <div className="py-10">
            <Heading className="text-center text-4xl mb-8">Our Team</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {staffData.map((staff) => (
                <Link key={staff.name} to={staff.link}>
                  <motion.div
                    className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.img
                      src={staff.image}
                      alt={`An image of ${staff.name}`}
                      className="w-[32rem] h-[32rem] object-right-top rounded-lg shadow-lg"
                      whileHover={{ scale: 1.05 }} // Scale up on hover
                    />
                    <div className="p-4">
                      <p className="text-lg font-semibold">{staff.name}</p>
                      <p className="text-gray-500">{staff.title}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/*why choose us section*/}
        <section>
          {/*container for why choose us*/}
          <div className="py-10 bg-slate-400 bg-opacity-20 border-r border-solid rounded-br-full max-lg:rounded-br-3xl">
            <Heading className=" text-4xl mb-4">
              <span className="elsie-swash-caps-regular">Overview</span>
            </Heading>
            <Heading className="text-center text-3xl mb-8">
              <span className="elsie-swash-caps-regular">
                Why Should You Choose Fortuna Legal Services?
              </span>
            </Heading>
            <div className="max-w-3xl mx-auto">
              <motion.ul
                className="grid grid-cols-1 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {[
                  {
                    title: "Expertise",
                    description:
                      "Our attorneys have extensive experience in probate, inheritance, and succession law, providing you with the highest level of legal representation.",
                  },
                  {
                    title: "Compassion",
                    description:
                      "We understand that these matters can be emotionally challenging, and we approach each case with empathy and sensitivity.",
                  },
                  {
                    title: "Efficiency",
                    description:
                      "We strive to streamline the legal process, minimizing stress and maximizing efficiency.",
                  },
                  {
                    title: "Personalized Service",
                    description:
                      "We believe in building strong relationships with our clients, providing personalized attention and tailored solutions.",
                  },
                ].map((item) => (
                  <motion.li
                    key={item.title}
                    className="bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="font-semibold">{item.title}</span>:{" "}
                    {item.description}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </section>

        {/*overview variant section*/}
        <section>
          <div className="py-10 bg-orange-300 bg-opacity-25 rounded-bl-full mt-10">
            <Heading className="text-center text-4xl mb-6">
              <span className="elsie-swash-caps-regular">Overview</span>
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ul className="list-disc list-inside space-y-4 text-gray-800">
                  <li>
                    Our probate lawyers are experienced and knowledgeable about
                    all aspects of the probate process in Northern California.
                  </li>
                  <li>
                    Our Singapore lawyers have handled hundreds of cases, from
                    estate planning to elder abuse to trust litigation cases
                    involving breach of fiduciary duty.
                  </li>
                  <li>
                    We successfully litigated for and defended against will
                    contests and trust litigation involving claims of mental
                    incapacity, undue influence, fraud, duress, and forgery.
                  </li>
                  <li>
                    We don't just litigate trust and estate cases. Because we
                    also draft comprehensive estate plans, we understand how the
                    estate planning process should work, and therefore are in a
                    better position to attack or defend an estate plan when
                    litigation arises.
                  </li>
                  <li>
                    Reasonable prices. Years of experience. Let our Northern
                    California attorneys start working for you today.
                  </li>
                </ul>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 10 }}
                  src={legalMachine}
                  alt="an image of lawyers' scale"
                  className="w-full h-auto max-w-md rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/*section for testimonials*/}
        <section>
          {/*testimonials container*/}
          <div>
            <InfiniteMovingCardsDemo />
          </div>
        </section>

        {/*reach us section*/}
        <section>
          <div className="py-10">
            <div className="text-center mb-8">
              <Heading className="text-4xl mb-4">
                <span className="elsie-swash-caps-regular">Reach Us</span>
              </Heading>
              <Heading className="text-2xl">
                <span className="elsie-swash-caps-regular">
                  Schedule a Consultation With Fortuna Legal Services
                </span>
              </Heading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Unordered list data */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ul className="list-disc list-inside space-y-2 text-gray-800 mb-4">
                  <li>We have three attorneys to assist you</li>
                  <li>
                    We will return your initial call or email inquiry within one
                    hour
                  </li>
                </ul>
                {/* Disclaimer section */}
                <div className="text-center">
                  <Link
                    to="/disclaimer"
                    className="text-blue-500 hover:underline"
                  >
                    <p>Disclaimer</p>
                  </Link>
                </div>
              </motion.div>

              {/* Form field to book consultation */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <form action="">
                  {/* Name text field */}
                  <div className="mb-4">
                    <Text as="label" className="block mb-1">
                      Name*
                    </Text>
                    <TextField.Root
                      type="text"
                      placeholder="Enter your name"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  {/* Phone text field */}
                  <div className="mb-4">
                    <Text as="label" className="block mb-1">
                      Phone*
                    </Text>
                    <TextField.Root
                      placeholder="Enter phone number"
                      type="text"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  {/* Email text field */}
                  <div className="mb-4">
                    <Text as="label" className="block mb-1">
                      Email**
                    </Text>
                    <TextField.Root
                      type="email"
                      placeholder="Enter Email"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  {/* Select section */}
                  <div className="mb-4">
                    <Text as="label" className="block mb-1">
                      Practice Area*
                    </Text>
                    <Select.Root value="estate-admin">
                      <Select.Trigger className="p-2 w-full" />
                      <Select.Content>
                        <Select.Item value="estate-admin">
                          Estate Administration
                        </Select.Item>
                        <Select.Item value="trust-admin">
                          Trust Administration
                        </Select.Item>
                        <Select.Item value="will-drafting">
                          Will Drafting & Review
                        </Select.Item>
                        <Select.Item value="inheritance-disputes">
                          Inheritance Disputes
                        </Select.Item>
                        <Select.Item value="succession-planning">
                          Succession Planning
                        </Select.Item>
                      </Select.Content>
                    </Select.Root>
                    {/* Text area section */}
                    <div className="mb-4">
                      <Text as="label" className="block mb-1">
                        Case Description
                      </Text>
                      <TextArea
                        placeholder="Enter case description"
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <Button className="w-full">
                      Get Your Free Consultation
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
