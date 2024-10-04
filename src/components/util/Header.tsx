import React, { useState } from "react";
import { lawLogo } from "../../assets/images";
import { navData } from "../../data/navData";
import { Button, HoverCard, Text } from "@radix-ui/themes";
import { headerStyles } from "../../styles/utilityStyles";
import { Link } from "react-router-dom";
import { icons } from "../../assets/icons";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const toggleMobileView = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsMobile(!isMobile);
  };

  // Framer motion variants
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const iconVariants = {
    initial: { opacity: 0, scale: 0.5 },
    enter: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0.5, scale: 0.5, transition: { duration: 0.5 } },
  };

  return (
    <div className=" overflow-hidden top-0">
      <div className={`${headerStyles.globalHeaderPositioning}`}>
        <Link to="/">
          <img className="w-24 h-24" src={lawLogo} alt="company logo" />
        </Link>

        <div className={`${headerStyles.navContainerPositioning}`}>
          {navData.map((nav) => (
            <nav key={nav.trigger}>
              <button>
                <HoverCard.Root>
                  <HoverCard.Trigger>
                    <Button
                      variant="ghost"
                      className="text-lg cursor-pointer text-slate-900"
                    >
                      {nav.trigger}
                    </Button>
                  </HoverCard.Trigger>
                  <HoverCard.Content className="bg-white rounded-lg shadow-lg p-4">
                    {nav.content.map((content) => (
                      <Link key={content.title} to={content.link}>
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={variants}
                          className="flex flex-col gap-2"
                        >
                          <Text className="hover:text-blue-500 transition-colors duration-300">
                            {content.title}
                          </Text>
                        </motion.div>
                      </Link>
                    ))}
                  </HoverCard.Content>
                </HoverCard.Root>
              </button>
            </nav>
          ))}
          <div className="relative flex items-center">
            <Link to="">
              <button
                title="Know about us"
                className="bg-transparent text-slate-900 text-md cursor-pointer text-lg"
              >
                About Us
              </button>
            </Link>
          </div>
          <div className="relative flex items-center">
            <Link to="">
              <Button
                title="Know about us"
                className="bg-transparent text-slate-900 text-md cursor-pointer text-lg"
              >
                Contact Us
                <button>{icons.longRightArrow}</button>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile view section */}
      <div className={`${headerStyles.minScreenStyles}`}>
        <div className={`${isMobile && "hidden"}`}>
          <Link to="/">
            <img className="w-24 h-24" src={lawLogo} alt="company logo" />
          </Link>
        </div>
        <div className={`${headerStyles.minButtonStyles}`}>
          <button
            className={`${headerStyles.navTextStyles} transition-colors duration-300`}
            onClick={toggleMobileView}
          >
            {isMobile ? (
              <motion.span
                className="text-red-500"
                initial="initial"
                animate={isMobile ? "exit" : "enter"}
                variants={iconVariants}
              >
                {icons.crossIcon}
              </motion.span>
            ) : (
              <motion.span
                initial="initial"
                animate={isMobile ? "exit" : "enter"}
                variants={iconVariants}
                className="text-red-500"
              >
                {icons.barsIcon}
              </motion.span>
            )}
          </button>
        </div>

        {/* Mobile view content */}
        <div className="flex items-center justify-between w-full">
          <div>
            {isMobile && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  isMobile
                    ? { height: "100vh", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: { duration: 0.2, ease: "easeInOut" },
                }}
                className="fixed top-0 left-0 w-full h-full bg-slate-800 flex flex-col items-center justify-center z-50" // Full-screen overlay
              >
                <button
                  onClick={toggleMobileView}
                  className="absolute top-5 right-5 text-white"
                >
                  {/* Close button */}
                  <motion.span
                    initial="initial"
                    animate={isMobile ? "enter" : "exit"}
                    variants={iconVariants}
                    className="text-red-500 text-2xl"
                  >
                    {icons.crossIcon}
                  </motion.span>
                </button>
                <div className="flex flex-col items-center gap-4 text-white text-lg">
                  {navData.map((nav) => (
                    <nav key={nav.trigger}>
                      <HoverCard.Root>
                        <HoverCard.Trigger>
                          <Button
                            variant="ghost"
                            className="text-lg cursor-pointer text-white hover:bg-gray-700 transition-colors duration-300 p-2 rounded"
                          >
                            {nav.trigger}
                          </Button>
                        </HoverCard.Trigger>
                        <HoverCard.Content className="bg-white rounded-lg shadow-lg p-4">
                          {nav.content.map((content) => (
                            <Link key={content.title} to={content.link}>
                              <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={variants}
                                className="flex flex-col gap-2"
                              >
                                <Text className="hover:text-blue-500 transition-colors duration-300">
                                  {content.title}
                                </Text>
                              </motion.div>
                            </Link>
                          ))}
                        </HoverCard.Content>
                      </HoverCard.Root>
                    </nav>
                  ))}
                  <Button className="bg-transparent hover:bg-gray-700 text-white transition-colors duration-300">
                    About Us
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
          <motion.div
            className="relative right-0"
            whileHover={{ scale: 0.6, transition: { duration: 0.5 } }}
          >
            <Link to="/">
              <img
                className={`${
                  isMobile ? "flex " : "hidden"
                } w-48 h-48 rounded-full max-sm:hidden`}
                src={lawLogo}
                alt="company logo"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
