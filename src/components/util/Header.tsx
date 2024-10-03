import React, { useState } from "react";
import { lawLogo } from "../../assets/images";
import { hoverCardData, navData } from "../../data/navData";
import { Button, HoverCard, Text, Tooltip } from "@radix-ui/themes";
import { headerStyles } from "../../styles/utilityStyles";
import { Link } from "react-router-dom";
import { icons } from "../../assets/icons";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  //use state definitions for toggling mobile views
  const [isMobile, setIsMobile] = useState<boolean>(false);

  //toggle function for the mobile view
  const toggleMobileView = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsMobile(!isMobile);
  };

  //framer motion variants
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
    <div className="bg-gradient-to-br from-hoverColor-primary to-slate-100 overflow-hidden top-0">
      {/*header for large screens*/}
      <div className={`${headerStyles.globalHeaderPositioning}`}>
        <Link to="/">
          <img className="w-24 h-24" src={lawLogo} alt="company logo" />
        </Link>

        {/*navs for the heading texts*/}
        <div className={`${headerStyles.navContainerPositioning}`}>
          {navData.map((nav) => (
            <nav key={nav.heading}>
              <Tooltip content={nav.title}>
                <button>
                  <Link to={nav.link}>
                    <Button
                      variant="ghost"
                      className={`${headerStyles.navTextStyles} cursor-pointer`}
                    >
                      {nav.heading}
                    </Button>
                  </Link>
                </button>
                {/*hover card section*/}
              </Tooltip>
            </nav>
          ))}
          {/*hover card section*/}
          {/* <nav>
            <div>
              <HoverCard.Root>
                <HoverCard.Trigger>
                  <Button
                    variant="ghost"
                    className={`${headerStyles.navTextStyles} cursor-pointer`}
                  >
                    <Text>FORTUNA HUBS</Text>
                  </Button>
                </HoverCard.Trigger>
                <HoverCard.Content>
                  <motion.div
                    className={`${headerStyles.hoverCardStyles} `}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "100%", opacity: 1 }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: { duration: 0.2, ease: "easeInOut" },
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {hoverCardData.map((data) => (
                      <Link to={data.link}>
                        <Button
                          key={data.heading}
                          variant="ghost"
                          className={`cursor-pointer ${headerStyles.navTextStyles}`}
                        >
                          {data.heading}
                        </Button>
                      </Link>
                    ))}
                  </motion.div>
                </HoverCard.Content>
              </HoverCard.Root>
            </div>
          </nav> */}
          {/*search icon*/}
          <button className="text-hoverColor-primary">
            {icons.searchIcon}
          </button>
        </div>
      </div>

      {/*mobile view section*/}
      <div className={`${headerStyles.minScreenStyles}`}>
        <div className={`${isMobile && "hidden"} `}>
          <Link to="/">
            <img className="w-24 h-24" src={lawLogo} alt="company logo" />
          </Link>
        </div>
        <div className={`${headerStyles.minButtonStyles}`}>
          <button className={`${headerStyles.navTextStyles}`}>
            {icons.searchIcon}
          </button>
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

        {/*mobile view content*/}
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
                variants={variants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-slate-500"
              >
                <div className={`flex flex-col gap-3`}>
                  {/*navs for the heading texts*/}

                  <div
                    className={`${headerStyles.mobileViewPositioning} gap-5 left-5 fixed top-2`}
                  >
                    {navData.map((nav) => (
                      <nav key={nav.heading}>
                        <Tooltip content={nav.title}>
                          <button>
                            <Link to={nav.link}>
                              <Button
                                variant="ghost"
                                className={`hover:text-orange-900 transition-colors duration-300 text-white $ {headerStyles.navTextStyles} cursor-pointer`}
                              >
                                {nav.heading}
                              </Button>
                            </Link>
                          </button>
                          {/*hover card section*/}
                        </Tooltip>
                      </nav>
                    ))}
                    {/*hover card section*/}
                    {/* <nav>
                      <div>
                        <HoverCard.Root>
                          <HoverCard.Trigger>
                            <Button
                              variant="ghost"
                              className={`${headerStyles.navTextStyles} cursor-pointer`}
                            >
                              <Text className="text-white hover:text-orange-900 transition-colors duration-300">
                                FORTUNA HUBS
                              </Text>
                            </Button>
                          </HoverCard.Trigger>
                          <HoverCard.Content className="border-hoverColor-primary">
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={
                                isMobile
                                  ? { height: "100%", opacity: 1 }
                                  : { height: 0, opacity: 0 }
                              }
                              exit={{
                                height: 0,
                                opacity: 0,
                                transition: {
                                  duration: 0.2,
                                  ease: "easeInOut",
                                },
                              }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              variants={variants}
                              className={`${headerStyles.hoverCardStyles}`}
                            >
                              {hoverCardData.map((data) => (
                                <Link to={data.link} key={data.heading}>
                                  <Button
                                    variant="ghost"
                                    className={`hover:text-orange-900 cursor-pointer ${headerStyles.navTextStyles}`}
                                  >
                                    {data.heading}
                                  </Button>
                                </Link>
                              ))}
                            </motion.div>
                          </HoverCard.Content>
                        </HoverCard.Root>
                      </div>
                    </nav> */}
                    {/*search icon*/}
                  </div>
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
                } w-96 h-96 rounded-full max-sm:hidden`}
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
