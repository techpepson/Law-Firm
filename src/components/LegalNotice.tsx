import React from "react";
import { motion } from "framer-motion";
import { Footer, Header } from "./component-exports";
import { legalNoticeImage } from "../assets/images"; // Assume you have a legal notice image
import { Container } from "@radix-ui/themes";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const LegalNotice: React.FC = () => {
  return (
    <>
      <Header />
      <div className="p-5 text-white bg-black bg-opacity-80 relative overflow-hidden">
        <div className="absolute w-full h-full -z-[999]">
          <img
            src={legalNoticeImage}
            alt="an image representing legal notice"
            className="w-full h-full object-cover"
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
              Legal Notice
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
              Site is provided in good faith; however, we make no representation
              or warranty of any kind, express or implied, regarding the
              accuracy, adequacy, validity, reliability, availability, or
              completeness of any information on the Site.
            </motion.p>
            <motion.h2
              className="text-2xl font-bold mt-5 mb-3 oleo-script-regular"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              No Liability
            </motion.h2>
            <motion.p
              className="mb-4"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Under no circumstance shall Fortuna Legal Services be liable for
              any loss or damage of any kind incurred as a result of the use of
              the site or reliance on any information provided on the site. Your
              use of the site and your reliance on any information on the site
              is solely at your own risk.
            </motion.p>
            <motion.h2
              className="text-2xl font-bold mt-5 mb-3 oleo-script-regular"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Intellectual Property
            </motion.h2>
            <motion.p
              className="mb-4"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              All content, trademarks, and other intellectual property on this
              website are the property of Fortuna Legal Services or its
              licensors and are protected by applicable copyright, trademark,
              and other intellectual property laws.
            </motion.p>
            <motion.h2
              className="text-2xl font-bold mt-5 mb-3 oleo-script-regular"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              External Links
            </motion.h2>
            <motion.p
              className="mb-4"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.7 }}
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
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Changes to This Notice
            </motion.h2>
            <motion.p
              className="mb-4"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              We may update our Legal Notice from time to time. We will notify
              you of any changes by posting the new Legal Notice on this page.
              You are advised to review this Legal Notice periodically for any
              changes. Changes to this Legal Notice are effective when they are
              posted on this page.
            </motion.p>
            <motion.h2
              className="text-2xl font-bold mt-5 mb-3 oleo-script-regular"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              Contact Us
            </motion.h2>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              If you have any questions about this Legal Notice, please contact
              us at:
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 1.2 }}
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

export default LegalNotice;
