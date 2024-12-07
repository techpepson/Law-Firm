import React from "react";
import { footerData } from "../../data/navData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { footerStyles, headerStyles } from "../../styles/utilityStyles";
import { getYear } from "../../logic/getYear";

const Footer: React.FC = () => {
  return (
    <motion.div
      className={`${footerStyles.footerGlobalContainer}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Footer Section */}
      <footer>
        {/* Footer Container */}
        <div
          className={` w-full relative bottom-0 bg-gradient-to-r from-slate-200 to-slate-200`}
        >
          <motion.div
            className={`${footerStyles.footerPositioning} w-full relative bottom-0 bg-gradient-to-r from-slate-200 to-slate-200`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Footer Links */}
            <motion.ul
              className="flex justify-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
            >
              {footerData.map((footer, index) => (
                <motion.li key={index} whileHover={{ scale: 1.1 }}>
                  <Link
                    className={`${headerStyles.navTextStyles}`}
                    to={footer.link}
                  >
                    {footer.title}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          {/* Copyright Section */}
          <motion.div
            className="flex max-lg:flex-col gap-5 items-center justify-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <section className="flex gap-2 text-center ">
              <div>
                <span>&copy;</span>
                <span>{getYear()}</span>
              </div>
              <span>Fortuna Law</span>
              <span>All rights reserved.</span>
            </section>
          </motion.div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
