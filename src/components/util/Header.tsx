import React from "react";
import { lawLogo } from "../../assets/images";
import { navData } from "../../data/navData";
import { Button, HoverCard, Text } from "@radix-ui/themes";
import { headerStyles } from "../../styles/utilityStyles";
import { Link } from "react-router-dom";
import { icons } from "../../assets/icons";
import { motion } from "framer-motion";
import { RootState, AppDispatch } from "../../store/config/store.config";
import { useSelector, useDispatch } from "react-redux";
import { toggleMobileState } from "../../store/mobileView.reducer";

const Header: React.FC = () => {
  const { isMobile } = useSelector((store: RootState) => store.mobileView);

  const dispatch = useDispatch<AppDispatch>();

  const toggleMobileView = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(toggleMobileState());
  };
  // Framer motion variants
  const iconVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0.5, transition: { duration: 0.5 } },
  };

  return (
    <div className="overflow-hidden sticky top-0 z-50 backdrop-blur-md">
      <motion.div
        className={`${headerStyles.globalHeaderPositioning} bg-zinc-900`}
        initial={{ opacity: 0, y: -100 }} // Start off-screen
        animate={{ opacity: 1, y: 0 }} // Slide into view
        exit={{ opacity: 0, y: -100 }} // Slide out of view
        transition={{ type: "spring", stiffness: 300 }} // Smooth animation
      >
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
                      className="text-lg cursor-pointer text-white"
                    >
                      {nav.trigger}
                    </Button>
                  </HoverCard.Trigger>
                  <HoverCard.Content className="bg-white rounded-lg shadow-lg p-4">
                    {nav.content.map((content) => (
                      <Link key={content.title} to={content.link}>
                        <motion.div
                          initial={{ opacity: 0, y: -50 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -50 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="flex flex-col gap-10 m-10"
                        >
                          <Text className="hover:text-blue-500 flex transition-colors duration-300">
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
          <motion.div
            className="relative flex items-center"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/about">
              <button
                title="Know about us"
                className="bg-transparent text-white text-md cursor-pointer text-lg"
              >
                About Us
              </button>
            </Link>
          </motion.div>
          <div className="relative">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">
                <Button
                  title="Know about us"
                  className="bg-transparent text-white text-md cursor-pointer text-lg"
                >
                  Contact Us
                  <button>{icons.longRightArrow}</button>
                </Button>
              </Link>
              <Button className="bg-transparent text-white font-bold">
                <span>CALL US: +233551875432</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mobile view section */}
      <div
        className={`overflow-hidden bg-slate-900 bg-opacity-70 lg:hidden ${
          isMobile && "h-full"
        }`}
      >
        <motion.button
          onClick={toggleMobileView}
          className="text-white"
          initial="initial"
          animate={isMobile ? "exit" : "enter"}
          variants={iconVariants}
        >
          {isMobile ? icons.crossIcon : icons.barsIcon}
        </motion.button>
        {/* Mobile view content */}
        <motion.div
          className="backdrop-blur-2xl"
          initial={{ opacity: 0, y: -100 }} // Starts off-screen
          animate={{ opacity: 1, y: 0 }} // Slides in to final position
          exit={{ opacity: 0, y: -100 }} // Slides back out when exiting
          transition={{ type: "spring", stiffness: 300 }} // Spring transition for smooth effect
        >
          {isMobile && (
            <div className={`${headerStyles.mobileViewPositioning}`}>
              {navData.map((nav) => (
                <nav key={nav.trigger}>
                  <button>
                    <HoverCard.Root>
                      <HoverCard.Trigger>
                        <Button
                          variant="ghost"
                          className="text-lg cursor-pointer text-white"
                        >
                          {nav.trigger}
                        </Button>
                      </HoverCard.Trigger>
                      <HoverCard.Content className="bg-white rounded-lg shadow-lg p-4">
                        {nav.content.map((content) => (
                          <Link key={content.title} to={content.link}>
                            <motion.div
                              initial={{ opacity: 0, y: -50 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -50 }}
                              transition={{ type: "spring", stiffness: 300 }}
                              className="flex flex-col gap-10 m-10"
                            >
                              <Text className="hover:text-blue-500 flex transition-colors duration-300">
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
              <motion.div
                className="relative flex items-center"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about">
                  <button
                    title="Know about us"
                    className="bg-transparent text-white text-md cursor-pointer text-lg"
                  >
                    About Us
                  </button>
                </Link>
              </motion.div>
              <div className="relative">
                <motion.div
                  className="flex items-center gap-5 flex-col"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/contact">
                    <Button
                      title="Know about us"
                      className="bg-transparent text-white text-md cursor-pointer text-lg"
                    >
                      Contact Us
                      <button>{icons.longRightArrow}</button>
                    </Button>
                  </Link>
                  <Button className="bg-transparent text-white font-bold">
                    <span>CALL US: +233551875432</span>
                  </Button>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
