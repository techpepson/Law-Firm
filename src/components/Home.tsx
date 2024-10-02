import { Container, Heading, Text, TextField } from "@radix-ui/themes";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { homeData } from "../data/homeData";
import { FocusCardsDemo } from "./util/FocusCardDemo";
import { icons } from "../assets/icons";
import { LayoutGridDemo } from "./util/LayoutGridDemo";
import { InfiniteMovingCardsDemo } from "./util/InfiniteMovingCardsDemo";
import { homePageStyles } from "../styles/homePageStyles";
import { cityVid } from "../assets/images";
import { Footer, Header } from "./component-exports";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  const [index, setIndex] = useState(0);

  // Change text every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % homeData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Helmet>
        <title>Fortuna Home</title>
        <meta
          name="description"
          content="The official landing page of Fortuna Legal Services."
        />
        <meta
          name="keywords"
          content="Fortuna, law, will drafting, attorney, lawyer, legal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Fortuna Home" />
        <meta
          property="og:description"
          content="The official landing page of Fortuna Legal Services."
        />
        <meta property="og:image" content="https://fortuna-legal.com/" />
        <meta property="og:url" content="https://fortuna-legal.com/" />
      </Helmet>

      {/* Main motion container */}
      <motion.div className="flex gap-10 flex-col relative bg-gradient-to-tr from-orange-200 to-slate-200 -z-[999]">
        <header>
          <Header />
        </header>

        {/* Sliding video section with animated text */}
        <section>
          <div
            className={`${homePageStyles.slidingStyles} relative h-96 flex items-center`}
          >
            <div className={`${homePageStyles.videoStyles} h-full w-full`}>
              <video muted autoPlay loop controls={false} src={cityVid}></video>
            </div>
            <div
              className={`${homePageStyles.videoStyles} h-full w-full`}
            ></div>
            <AnimatePresence>
              <Container>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 1 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col text-center items-center relative justify-center"
                >
                  <Heading className={`${homePageStyles.headingStyles} `}>
                    {homeData[index].title}
                  </Heading>
                  <span className={`${homePageStyles.textStyes}`}>
                    {homeData[index].description}
                  </span>
                </motion.div>
              </Container>
            </AnimatePresence>
          </div>
        </section>

        {/* World reach section with fade-in animation */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Container>
            <div className={`${homePageStyles.expertiseSection}`}>
              <Heading className={`${homePageStyles.headingVariant}`}>
                Regional Expertise and Personalized Legal Solutions
              </Heading>
              <span className={`${homePageStyles.expertiseText}`}>
                Fortuna Legal Services is rooted in a deep understanding of the
                legal landscape across the country, allowing us to offer
                tailored solutions for individuals and businesses. With a
                commitment to personalized service, we focus on building lasting
                relationships and delivering practical, results-driven legal
                counsel. As we grow, we aim to expand our partnerships and
                networks, ensuring that wherever your business takes you,
                we&apos;ll be there to support your legal needs.
              </span>
            </div>
          </Container>
        </motion.section>

        {/* Our People section with staggered card animation */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <Container>
            <div className={``}>
              <div className={`${homePageStyles.expertiseSection}`}>
                <Heading
                  className={`${homePageStyles.headingVariant} text-2xl`}
                >
                  OUR PEOPLE
                </Heading>
                <p className={`${homePageStyles.expertiseText} mb-5`}>
                  At Fortuna, our people are the foundation of our success. We
                  are a team of skilled attorneys and legal professionals
                  committed to delivering exceptional service to our clients...
                </p>
              </div>
              <div>
                <FocusCardsDemo />
              </div>
              {/* Search attorney */}
              <div className="flex w-full mt-5">
                <TextField.Root
                  type="search"
                  placeholder="Search Attorney by name"
                >
                  <TextField.Slot />
                  <button>{icons.searchIcon}</button>
                </TextField.Root>
              </div>
            </div>
          </Container>
        </motion.section>

        {/* Our Practices section with staggered fade-in animation */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <div>
            <Container>
              <div className={`${homePageStyles.expertiseSection}`}>
                <Heading className={`${homePageStyles.headingVariant}`}>
                  Our Practices
                </Heading>
                <div className="flex flex-col">
                  <p className={`${homePageStyles.expertiseText}`}>
                    At Fortuna Law, internationally trained lawyers and
                    professionals apply a multi-disciplinary approach to answer
                    our client&apos;s most pressing needs. Our team ensures the
                    highest level of excellence in service.
                  </p>
                  <Text className="text-red-500">
                    Click or tap an image to get details
                  </Text>
                </div>
              </div>
              <div>
                <LayoutGridDemo />
              </div>
            </Container>
          </div>
        </motion.section>

        {/* Infinite moving cards section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Container>
            <div>
              <InfiniteMovingCardsDemo />
            </div>
          </Container>
        </motion.section>

        <footer>
          <Footer />
        </footer>
      </motion.div>
    </>
  );
};

export default Home;
