import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FlipWordsDemo } from "./util/FlipWordsDemo";
import { ExpandableCardDemo } from "./util/ExpandableCard";
import { motion } from "framer-motion";
import { Footer, Header } from "./component-exports";
import { Select, Text } from "@radix-ui/themes";
import { attorneyData } from "../data/attorneyData";
import { selectStyles } from "../styles/utilityStyles";

const People: React.FC = () => {
  //use state definitions for the service type selection
  const [service, setService] = useState<string>("estate-administration");

  // Framer Motion Variants for animations
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animations of child elements
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <Helmet>
        <title>Our People</title>
        <meta
          name="description"
          content="The official people page of Fortuna Legal Services."
        />
        <meta
          name="keywords"
          content="Fortuna, law, will drafting, attorney, lawyer, legal, lawyers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Fortuna Home" />
        <meta
          property="og:description"
          content="The official people page of Fortuna Legal Services."
        />
        <meta property="og:image" content="https://fortuna-legal.com/people" />
        <meta property="og:url" content="https://fortuna-legal.com/people" />
      </Helmet>

      {/* People Container */}
      <div className="flex flex-col overflow-hidden gap-10 bg-gradient-to-br from-orange-50 to-slate-100 py-10 px-5 lg:px-20">
        {/* Head Section */}
        <motion.section
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* FlipWords Demo */}
          <FlipWordsDemo />
        </motion.section>

        {/* Staff Cards Section */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={cardContainerVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={cardVariant}>
            <ExpandableCardDemo />
          </motion.div>

          <motion.div
            variants={cardContainerVariant}
            className={selectStyles.selectContainer}
          >
            <span className="text-lg font-bold text-orange-600">
              Select a Service to See Available Attorneys
            </span>
            <Select.Root
              value={service}
              onValueChange={(value) => {
                setService(value);
              }}
            >
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="estate-administration">
                  <Text>Estate Administration</Text>
                </Select.Item>
                <Select.Item value="inheritance-disputes">
                  <Text>Inheritance Disputes</Text>
                </Select.Item>
                <Select.Item value="succession-planning">
                  Succession Planning
                </Select.Item>
                <Select.Item value="will-drafting">
                  <Text>Will Drafting</Text>
                </Select.Item>
                <Select.Item value="trust-administration">
                  <Text>Trust Administration</Text>
                </Select.Item>
              </Select.Content>
            </Select.Root>
            {/*map overthe attorney data*/}
            <motion.div
              variants={cardVariant}
              className={`${selectStyles.mappedContent} grid grid-cols-2 gap-5 max-md:grid-cols-1`}
            >
              {attorneyData.filter((attorney) =>
                attorney.practice.includes(service)
              ).length > 0 ? (
                attorneyData
                  .filter((attorney) => attorney.practice.includes(service))
                  .map((attorney) => (
                    <div key={attorney.name} className=" gap-3 flex flex-col">
                      <div>
                        <img
                          src={attorney.image}
                          className="rounded-full w-44 h-44"
                          alt={`image of ${attorney.name}`}
                        />
                      </div>
                      <div>
                        <Text as="label" className="font-bold antialiased">
                          Name:{" "}
                        </Text>
                        <span>{attorney.name}</span>
                      </div>
                      <div>
                        <Text as="label" className="font-bold antialiased">
                          Position:{" "}
                        </Text>
                        <span>{attorney.position}</span>
                      </div>
                      <div>
                        <Text as="label" className="font-bold antialiased">
                          Email:{" "}
                        </Text>
                        <span>{attorney.email}</span>
                      </div>
                      <div>
                        <Text as="label" className="font-bold antialiased">
                          Phone:{" "}
                        </Text>
                        <span>{attorney.phone}</span>
                      </div>
                    </div>
                  ))
              ) : (
                <div>No Attorney provides such service</div>
              )}
            </motion.div>
          </motion.div>

          {/* Add more cards if needed */}
        </motion.section>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default People;
