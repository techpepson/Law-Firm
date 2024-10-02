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

  // Change text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % homeData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
        <meta property="og:image" content="https://yourdomain.com/image.jpg" />
        <meta property="og:url" content="https://fortuna-legal.com/" />
      </Helmet>
      <div className="flex gap-10 flex-col relative bg-gradient-to-tr from-orange-200 to-slate-200 -z-[999]">
        <header>
          <Header />
        </header>
        <section>
          <div
            className={`${homePageStyles.slidingStyles} relative h-96 flex items-center`}
          >
            <div
              className={`${homePageStyles.videoStyles} h-full w-full object-center`}
            >
              {/*background video*/}
              <video muted autoPlay loop controls={false} src={cityVid}></video>
            </div>
            <div
              className={`${homePageStyles.videoStyles} h-full w-full`}
            ></div>
            <AnimatePresence>
              <Container className={``}>
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
        {/*world reach section*/}
        <Container>
          <section>
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
                we&apos;ll be there to support your legal needs. No matter the
                legal case and intensity you think the case is, Fortuna has got
                your back!
              </span>
            </div>
          </section>
        </Container>
        {/*attorneys section*/}

        <Container>
          <section>
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
                  committed to delivering exceptional service to our clients.
                  With diverse backgrounds and areas of expertise, we work
                  together to provide comprehensive legal solutions tailored to
                  your needs. Our attorneys bring a wealth of knowledge and
                  experience from various sectors, allowing us to offer
                  insightful advice and strategic counsel in both complex and
                  routine legal matters. Whether you're seeking corporate legal
                  services, litigation support, or personal legal advice, our
                  team is here to guide you through every step of the process.
                  What sets our team apart? Experience & Expertise: Our
                  attorneys have a proven track record in delivering favorable
                  outcomes for clients across a broad range of industries.
                  Client-First Approach: We take the time to understand each
                  client’s unique situation and goals, ensuring personalized
                  attention and tailored legal strategies. Collaborative Spirit:
                  We believe in the power of teamwork, combining our collective
                  knowledge to provide the best possible service. At [Law Firm
                  Name], we are more than just legal representatives; we are
                  partners in your success, ready to tackle any challenge with
                  dedication and professionalism.
                </p>
              </div>
              {/*image section of fortuna staff*/}
              <div>
                <FocusCardsDemo />
              </div>
            </div>
            {/*search attorney*/}
            <div className="flex w-full mt-5">
              <TextField.Root
                type="search"
                placeholder="Search Attorney by name"
              >
                <TextField.Slot />
                <button>{icons.searchIcon}</button>
              </TextField.Root>
            </div>
          </section>
        </Container>

        {/*section for practices*/}
        <div>
          <Container>
            <div className={`${homePageStyles.expertiseSection}`}>
              <Heading className={`${homePageStyles.headingVariant}`}>
                Our Practices
              </Heading>
              <div className="flex flex-col">
                <p className={`${homePageStyles.expertiseText}`}>
                  At Fortuna Law, internationally trained lawyers and
                  professionals apply an industry defining multi-disciplinary
                  approach to answer our client&apos;s most pressing needs. To
                  that end, we focus on matters that match our departmental
                  depth and sophisticated knowledge of our team to ensure the
                  highest level of excellence in service is delivered to each
                  and every client.
                </p>
                <Text className="text-red-500">
                  Click or tap an image to get details
                </Text>
              </div>
            </div>
            {/*container for the services section*/}
            <div>
              <LayoutGridDemo />
            </div>
            {/*infinite moving cards section*/}
            <section>
              <Container>
                <div>
                  <InfiniteMovingCardsDemo />
                </div>
              </Container>
            </section>
          </Container>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Home;
