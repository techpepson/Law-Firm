import React from "react";
import { motion } from "framer-motion";
import { Footer, Header } from "./component-exports";
import { disclaimer } from "../assets/images";
import { Container } from "@radix-ui/themes";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Disclaimer: React.FC = () => {
  return (
    <>
      <Header />
      <div className="p-5 text-white bg-black bg-opacity-80 relative w-full h-full overflow-hidden">
        <div className="absolute w-full h-full -z-[999]">
          <img
            src={disclaimer}
            alt="an image of a person issuing a disclaimer"
            className="w-full h-full"
          />
        </div>
        <Container>
          <div className="">
            <motion.h1
              className="text-3xl font-bold mb-5 oleo-script-regular"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              Disclaimer
            </motion.h1>
            <motion.p
              className="mb-4"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              The information provided by Fortuna Legal Services on this website
              is for general informational purposes only. All information on the
              Site is provided in good faith, however we make no representation
              or warranty of any kind, express or implied, regarding the
              accuracy, adequacy, validity, reliability, availability or
              completeness of any information on the Site.
            </motion.p>
            <motion.p
              className="mb-4 "
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Under no circumstance shall we have any liability to you for any
              loss or damage of any kind incurred as a result of the use of the
              site or reliance on any information provided on the site. Your use
              of the site and your reliance on any information on the site is
              solely at your own risk.
            </motion.p>
            <motion.h2
              className="text-2xl font-bold mt-5 mb-3 oleo-script-regular"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              No Attorney-Client Relationship
            </motion.h2>
            <motion.p
              className="mb-4"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              The use of the website or contacting us through the website does
              not create an attorney-client relationship between you and Fortuna
              Legal Services. An attorney-client relationship is only
              established through a signed engagement agreement with our firm.
            </motion.p>
            <motion.h2
              className="text-2xl font-bold mt-5 mb-3 oleo-script-regular"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Legal Advice
            </motion.h2>
            <motion.p
              className="mb-4"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              The information on this website is not intended to be a substitute
              for professional legal advice. You should consult with a qualified
              attorney for advice regarding your individual situation. The law
              is constantly changing, and the information provided on this site
              may not reflect the most current legal developments.
            </motion.p>
            <motion.h2
              className="text-2xl font-bold mt-5 mb-3 oleo-script-regular"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              External Links
            </motion.h2>
            <motion.p
              className="mb-4"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Our website may contain links to third-party websites that are not
              owned or controlled by Fortuna Legal Services. We have no control
              over, and assume no responsibility for, the content, privacy
              policies, or practices of any third-party websites. We encourage
              you to review the privacy policies and terms of use of any
              third-party websites that you visit.
            </motion.p>
            <motion.h2
              className="text-2xl font-bold mt-5 mb-3 oleo-script-regular"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Changes to This Disclaimer
            </motion.h2>
            <motion.p
              className="mb-4"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              We may update our Disclaimer from time to time. We will notify you
              of any changes by posting the new Disclaimer on this page. You are
              advised to review this Disclaimer periodically for any changes.
              Changes to this Disclaimer are effective when they are posted on
              this page.
            </motion.p>
            <motion.h2
              className="text-2xl font-bold mt-5 mb-3 oleo-script-regular"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              Contact Us
            </motion.h2>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              If you have any questions about this Disclaimer, please contact us
              at:
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              Fortuna Legal Services,
              <br />
              50 Raffles Place L19 & L30,
              <br />
              Singapore, 048623,
              <br />
              +233123456789,
              <br />
              fortuna-legal@gmail.com
            </motion.p>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Disclaimer;
