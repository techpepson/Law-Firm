import React from "react";
import { footerData, mediaImages } from "../../data/navData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { footerStyles, headerStyles } from "../../styles/utilityStyles";
import { getYear } from "../../logic/getYear";

const Footer: React.FC = () => {
  return (
    <div className={`${footerStyles.footerGlobalContainer}`}>
      {/*footer section*/}
      <footer>
        {/*footer container*/}
        <div
          className={`${footerStyles.footerPositioning} w-full absolute bottom-0 bg-gradient-to-r from-orange-200 to-slate-100`}
        >
          {footerData.map((footer) => (
            <ul>
              <li>
                <Link
                  className={`${headerStyles.navTextStyles}`}
                  to={footer.link}
                >
                  {footer.title}
                </Link>
              </li>
            </ul>
          ))}
          {/*footer images section*/}
          <div className="flex gap-5 justify-center">
            {mediaImages.map((image) => (
              <Link to={image.link}>
                <motion.div
                  whileHover={{
                    opacity: 1, // Keep opacity or change as needed
                    transition: { duration: 0.3, ease: "easeInOut" },
                    scale: 0.8,
                  }}
                >
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-10 h-10 rounded-full"
                  />
                </motion.div>
              </Link>
            ))}
          </div>
          {/*copyright section*/}
          <div className="flex max-lg:flex-col gap-5 items-center">
            <section className="flex gap-2">
              <div>
                <span>&copy;</span>
                <span>{getYear()}</span>
              </div>
              <span>Fortuna Law</span>
              <span>All rights reserved.</span>
            </section>
            <span>Developed by Payless</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
