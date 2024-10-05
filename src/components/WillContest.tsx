import React from "react";
import { Helmet } from "react-helmet";
import { icons } from "../assets/icons";
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  Container,
  Heading,
  Select,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { draftedWill, lawHammer, willDrafter } from "../assets/images";
import { staffData } from "../data/homeData";
import { motion } from "framer-motion";
import { WillTestimonials } from "./util/WillTestimonials";
import { Footer, Header } from "./component-exports";

const WillContest: React.FC = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  const locationSplit = currentLocation.split("/").pop();
  return (
    <>
      <Helmet>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps:wght@400;900&family=Spicy+Rice&display=swap');
        </style>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps:wght@400;900&family=Spicy+Rice&display=swap');
        </style>
        <title>Home</title>
        <meta
          name="description"
          content="The official will draft and review page of Fortuna Legal Services."
        />
        <title>Will Draft</title>
        <meta
          name="keywords"
          content="Fortuna, draft, law, will drafting, attorney, lawyer, legal, lawyers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Will Drafting" />
        <meta
          property="og:description"
          content="The official will drafting page of Fortuna Legal Services."
        />
        <meta
          property="og:image"
          content="https://fortuna-legal.com/practice-areas/will-draft"
        />
        <meta
          property="og:url"
          content="https://fortuna-legal.com/practice-areas/will-draft"
        />
      </Helmet>
      {/*container for the will drafting page*/}
      <div>
        <Header />
        {/*container for the upper section of will drafting page*/}
        <section className="bg-gray-100 py-8">
          <div className="max-w-3xl mx-auto text-center p-6">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-3xl font-bold text-gray-800 oleo-script-regular"
            >
              Fortuna Will Drafting & Review Lawyers in Singapore.
            </motion.span>
          </div>
        </section>

        {/*path section*/}
        <section className="bg-white py-6">
          <div className="flex items-center justify-center space-x-2">
            <Link to="/">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-lg font-semibold text-gray-800"
              >
                Fortuna Legal
              </motion.span>
            </Link>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="focus:outline-none text-gray-600 hover:text-gray-800"
            >
              {icons.longRightArrow}
            </motion.button>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-lg font-semibold text-gray-800"
            >
              Probate
            </motion.span>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="focus:outline-none text-gray-600 hover:text-gray-800"
            >
              {icons.longRightArrow}
            </motion.button>
            {locationSplit === "will-draft" && (
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-lg font-semibold text-gray-800"
              >
                Will Draft
              </motion.span>
            )}
          </div>
        </section>

        {/*intro section*/}
        <section className="bg-white py-8">
          {/* Upper section container */}
          <Container>
            <div className="space-y-4 px-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-gray-800 text-base leading-relaxed"
              >
                At Fortuna Legal Attorneys, we take pride in providing
                comprehensive will drafting and review services. Whether you
                need to create a will from scratch or update an existing one,
                our experienced legal team is here to ensure that your wishes
                are clearly documented and legally enforceable. We guide you
                through every step of the process, offering expert advice to
                help you make informed decisions about your estate. Trust us to
                safeguard your legacy and provide peace of mind for you and your
                loved ones.
              </motion.p>
              {/* Location container */}
              <div className="flex items-center space-x-2">
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="focus:outline-none text-gray-600 hover:text-gray-800"
                >
                  {icons.locationIcon}
                </motion.button>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-gray-800 text-base leading-relaxed italic font-bold"
                >
                  Fortuna Legal represents clients throughout Singapore,
                  including Orchard, Marina Bay, Raffles Place, Bukit Timah,
                  Sentosa, and Jurong.
                </motion.p>
              </div>
            </div>
          </Container>
        </section>

        {/*detail section*/}
        <Container>
          <section className="bg-gray-100 py-10">
            {/* Container for the detail description section */}
            <div className="max-w-4xl mx-auto px-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-2xl font-bold text-gray-800 mb-4 text-center oleo-script-regular"
              >
                PREMIUM WILL DRAFTING & REVIEW ATTORNEYS IN RAFFLES PLACE AND
                WALNUT
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                className="text-gray-700 text-base leading-relaxed text-center"
              >
                Fortuna Legal is a leading law firm specializing in will
                drafting and review, serving clients across Singapore. With
                extensive experience in estate planning and a thorough
                understanding of the legal requirements for wills, our dedicated
                team of attorneys ensures that your final wishes are clearly
                documented and legally sound. We provide personalized guidance
                through every step of the will drafting process, ensuring that
                your estate is protected and distributed according to your
                intentions. At Fortuna Legal, we are committed to offering peace
                of mind by crafting wills that minimize potential disputes and
                legal complications. Our team&apos;s expertise in estate
                planning allows us to provide tailored solutions, ensuring that
                your will reflects your unique circumstances and wishes. Trust
                Fortuna Legal to deliver the highest level of professionalism,
                ensuring that your legacy is preserved with care and precision.
              </motion.p>
            </div>
          </section>
        </Container>
        {/*considerations for will drafting*/}
        <section className="bg-gray-100 py-10">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-2xl font-bold text-gray-800 mb-4 text-center oleo-script-regular"
            >
              KEY CONSIDERATIONS WHEN DRAFTING A WILL
            </motion.h2>

            <div className="flex flex-col items-center">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                src={draftedWill}
                alt="an image of a drafted will"
                className="rounded-md"
                whileHover={{ scale: 0.98 }}
              />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
                className=""
              >
                <p>
                  When drafting or reviewing a will, it is essential to ensure
                  that all legal requirements are met to avoid potential
                  disputes or complications. Some important factors to consider
                  include:
                </p>
                <ul className="ml-5 list-disc">
                  {[
                    {
                      heading: "Proper Execution",
                      description:
                        "A will must be signed by the testator in the presence of witnesses, and those witnesses must also sign the will. This helps confirm that the document was created voluntarily and with full understanding.",
                    },
                    {
                      heading: "Testamentary Capacity",
                      description:
                        "The person creating the will (the testator) must be of sound mind and fully understand the nature of their assets, their relationships with beneficiaries, and the legal effects of their decisions.",
                    },
                    {
                      heading: "Clarity and Specificity",
                      description:
                        "A well-drafted will should clearly outline how the estate is to be distributed to avoid ambiguity. Including specific details about assets and beneficiaries can help prevent future disputes.",
                    },
                    {
                      heading: "Revocation and Updates",
                      description:
                        "Life circumstances change, and it’s important to review your will regularly to reflect new situations such as marriage, divorce, the birth of children, or changes in financial circumstances. Ensuring your will is up-to-date can prevent outdated terms from being enforced.",
                    },
                    {
                      heading: "Compliance with Legal Requirements",
                      description:
                        "Each jurisdiction has its own legal standards for a valid will. Ensuring that your will complies with all local laws is critical to its enforceability.",
                    },
                  ].map((item, index) => (
                    <li key={index} className="mb-2">
                      <strong>{item.heading}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
                {/* Will description bottom content */}
                <p className="mt-4">
                  Creating and reviewing a will requires careful attention to
                  detail, comprehensive knowledge of estate law, and expert
                  legal guidance. It is essential to consult with an experienced
                  estate planning attorney who understands the intricacies of
                  Singapore's legal framework and can help you ensure that your
                  will is clear, enforceable, and up-to-date. At Fortuna Legal,
                  our team can help you draft a robust will that reflects your
                  wishes, offers protection for your beneficiaries, and
                  minimizes the likelihood of future disputes. We&apos;ll work
                  closely with you to ensure that your estate planning documents
                  are legally sound and tailored to your unique circumstances.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/*will contesting representation*/}

        <div className="relative">
          <div className="absolute w-full h-full -z-[999]">
            <img
              src={lawHammer}
              alt="an image of the legal hammer of lawyers"
              className="w-full h-full"
            />
          </div>
          <Container>
            <section>
              <div className="m-5 flex flex-col gap-5">
                <Heading className="flex h-full items-center text-white text-6xl max-md:text-5xl ">
                  <span className="oleo-script-regular text-white">
                    Get Effective Representation for Drafting or Reviewing a
                    Will in Raffles Place.
                  </span>
                </Heading>
                <p className="text-white">
                  Contact our experienced Raffles Place will drafting attorneys
                  today to ensure effective representation in drafting or
                  reviewing a will. Schedule an initial consultation today!
                </p>
                <div>
                  <Button className="cursor-pointer">
                    <span>Proceed To Will Drafting Consultation Form</span>
                    <button>{icons.longRightArrow}</button>
                  </Button>
                </div>
              </div>
            </section>
          </Container>
        </div>

        {/*section for who should draft a will*/}
        <section className="bg-gray-50 py-10">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="font-bold text-xl text-gray-800 mb-4 oleo-script-regular"
            >
              Who Should Consider Drafting or Reviewing Their Will with Fortuna
              Legal?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
              className="text-gray-700 mb-4"
            >
              Proper estate planning is crucial for ensuring that your assets
              are distributed according to your wishes. The following
              individuals should consider drafting or reviewing their will with
              Fortuna Legal to safeguard their interests:
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              className="list-disc pl-5 mb-4"
            >
              {[
                {
                  heading: "Individuals Creating a Will for the First Time:",
                  description:
                    "If you have not yet drafted a will, it is essential to put one in place to ensure your assets are distributed according to your preferences. This is especially important for individuals who have accumulated significant assets or have family and loved ones they want to provide for.",
                },
                {
                  heading: "People with Significant Life Changes:",
                  description:
                    "If you have recently experienced a major life event, such as marriage, divorce, the birth of a child, or a significant change in your financial circumstances, reviewing and updating your will is important to ensure it reflects your current situation and wishes.",
                },
                {
                  heading: "Beneficiaries or Heirs:",
                  description:
                    "If you are a named beneficiary or heir, drafting or reviewing a will ensures that your estate will be distributed smoothly and as per your intentions, reducing the likelihood of disputes or delays.",
                },
                {
                  heading: "Business Owners and Entrepreneurs:",
                  description:
                    "For individuals who own businesses, a well-drafted will is critical for ensuring that the transition of ownership or control of the business is carried out smoothly and according to your wishes.",
                },
              ].map((item, index) => (
                <li key={index} className="mb-3">
                  <strong className="font-bold">{item.heading}</strong>
                  <p className="text-gray-600">{item.description}</p>
                </li>
              ))}
            </motion.ul>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
              className="text-gray-700"
            >
              It is important to consult with an experienced will drafting and
              review attorney to determine your eligibility and understand the
              specific requirements and processes involved in drafting a will in
              Singapore, Raffles Place.
            </motion.p>
          </div>
        </section>

        {/*section for ensuring legal validity*/}
        <section className="bg-white py-10">
          <Container>
            <div className="px-6">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="font-bold text-2xl text-gray-800 mb-4 oleo-script-regular"
              >
                Ensuring Legal Validity in Will Drafting
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                className="text-gray-700 mb-4"
              >
                Properly drafting a will is crucial to ensuring that it holds up
                under legal scrutiny and avoids disputes among heirs or
                beneficiaries. By consulting with experienced estate planning
                attorneys at Fortuna Legal, you can ensure that your will
                complies with all applicable laws and is structured to reflect
                your wishes clearly.
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                className="list-disc ml-5 mb-4"
              >
                <li>
                  Ensure your will is legally sound and meets all statutory
                  requirements.
                </li>
                <li>
                  Address potential ambiguities to avoid future
                  misunderstandings or conflicts.
                </li>
                <li>
                  Regularly review and update your will to reflect changes in
                  your life or financial situation.
                </li>
              </motion.ul>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
                className="text-gray-700"
              >
                {/* Add any additional text here if needed */}
              </motion.p>
            </div>
          </Container>
        </section>

        {/*section for importance of choosing the right executor*/}
        <section className="bg-white py-10">
          <div className="px-6 flex flex-col lg:flex-row items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex-1 mb-6 lg:mb-0"
            >
              <Heading className="text-gray-800 mb-4">
                <span className="oleo-script-regular">
                  Importance of Choosing the Right Executor
                </span>
              </Heading>
              <ul className="ml-5 list-disc text-gray-700">
                <li className="mb-2">
                  Selecting the right executor is crucial for ensuring that your
                  will is properly executed according to your wishes.
                </li>
                <li className="mb-2">
                  The executor should be trustworthy, organized, and capable of
                  handling the legal responsibilities involved in administering
                  an estate.
                </li>
                <li>
                  Fortuna Legal can guide you through the process of choosing an
                  executor who will honor your intentions and manage your estate
                  efficiently.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex-1"
            >
              <img
                src={willDrafter}
                alt="An image of two people exchanging a handshake."
                className="w-full h-auto rounded-md shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        <section className="bg-gray-50 py-10">
          <div className="px-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Heading className="text-gray-800 mb-4">
                <span className="oleo-script-regular">
                  WHY CHOOSE OUR RAFFLES PLACE WILL DRAFTING ATTORNEYS
                </span>
              </Heading>
              <p className="text-gray-700 mb-4">
                When it comes to will drafting and estate planning in Singapore,
                choosing Fortuna Legal's Attorneys provides numerous benefits.
                Our team of experienced attorneys specializes in will drafting
                cases, ensuring that you receive top-notch legal representation.
                By choosing us, you can expect:
              </p>

              <ul className="ml-5 list-decimal text-gray-700 mb-4">
                <li className="mb-2">
                  <strong>Expert Guidance</strong>: Our experienced attorneys
                  specialize in will drafting, ensuring your will is legally
                  sound and tailored to your needs.
                </li>
                <li className="mb-2">
                  <strong>Personalized Solutions</strong>: We take the time to
                  understand your unique circumstances, providing customized
                  estate planning strategies.
                </li>
                <li className="mb-2">
                  <strong>Clarity and Peace of Mind</strong>: We help you avoid
                  ambiguities and future disputes by ensuring your wishes are
                  clearly documented.
                </li>
                <li className="mb-2">
                  <strong>Regular Updates</strong>: Our team will assist you in
                  reviewing and updating your will as your life circumstances or
                  financial situation change.
                </li>
                <li className="mb-2">
                  <strong>Comprehensive Support</strong>: We provide guidance
                  throughout the entire estate planning process, from drafting
                  to execution, ensuring all legal requirements are met.
                </li>
                <li>
                  <strong>Protection of Assets</strong>: Our expertise in estate
                  planning helps safeguard your assets and ensure they are
                  distributed according to your wishes.
                </li>
              </ul>

              <p className="text-gray-700">
                When you choose Fortuna Legal's Attorneys for your will drafting
                and review matters, you can have confidence in our expertise,
                strategic approach, and commitment to your best interests.
              </p>
            </motion.div>
          </div>
        </section>

        {/*team section */}
        <section>
          <div className="py-10">
            <Heading className="text-START text-4xl mb-8">
              <span className="oleo-script-regular">
                WE ARE READY TO HELP YOU
              </span>
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {staffData.map((staff) => (
                <Link key={staff.name} to={staff.link}>
                  <motion.div
                    className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.img
                      src={staff.image}
                      alt={`An image of ${staff.name}`}
                      className="w-[32rem] h-[32rem] object-right-top rounded-lg shadow-lg"
                      whileHover={{ scale: 1.05 }} // Scale up on hover
                    />
                    <div className="p-4">
                      <p className="text-lg font-semibold">{staff.name}</p>
                      <p className="text-gray-500">{staff.title}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/*testimonials section*/}
        <section>
          <WillTestimonials />
        </section>
        {/*form section*/}
        <section>
          <div className="py-10">
            <div className="text-center mb-8">
              <Heading className="text-4xl mb-4">
                <span className="elsie-swash-caps-regular">Reach Us</span>
              </Heading>
              <Heading className="text-2xl">
                <span className="elsie-swash-caps-regular">
                  Schedule a Consultation With Fortuna Legal Services
                </span>
              </Heading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Unordered list data */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p>
                  Fortuna Legal specializes in providing comprehensive will
                  drafting and estate planning services. Our experienced
                  attorneys ensure that your will is legally sound and reflects
                  your intentions clearly, preventing future disputes. With a
                  focus on personalized service, we will carefully assess your
                  situation and guide you through every step of the process.
                  Contact us today for expert assistance!
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-800 mb-4">
                  <li>We have three attorneys to assist you</li>
                  <li>
                    We will return your initial call or email inquiry within one
                    hour
                  </li>
                </ul>
                {/* Disclaimer section */}
                <div className="text-center">
                  <Link
                    to="/disclaimer"
                    className="text-blue-500 hover:underline"
                  >
                    <p>Disclaimer</p>
                  </Link>
                </div>
              </motion.div>

              {/* Form field to book consultation */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <form action="">
                  {/* Name text field */}
                  <div className="mb-4">
                    <Text as="label" className="block mb-1">
                      Name*
                    </Text>
                    <TextField.Root
                      type="text"
                      placeholder="Enter your name"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  {/* Phone text field */}
                  <div className="mb-4">
                    <Text as="label" className="block mb-1">
                      Phone*
                    </Text>
                    <TextField.Root
                      placeholder="Enter phone number"
                      type="text"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  {/* Email text field */}
                  <div className="mb-4">
                    <Text as="label" className="block mb-1">
                      Email**
                    </Text>
                    <TextField.Root
                      type="email"
                      placeholder="Enter Email"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  {/* Select section */}
                  <div className="mb-4">
                    <Text as="label" className="block mb-1">
                      Practice Area*
                    </Text>
                    <Select.Root value="estate-admin">
                      <Select.Trigger className="p-2 w-full" />
                      <Select.Content>
                        <Select.Item value="estate-admin">
                          Estate Administration
                        </Select.Item>
                        <Select.Item value="trust-admin">
                          Trust Administration
                        </Select.Item>
                        <Select.Item value="will-drafting">
                          Will Drafting & Review
                        </Select.Item>
                        <Select.Item value="inheritance-disputes">
                          Inheritance Disputes
                        </Select.Item>
                        <Select.Item value="succession-planning">
                          Succession Planning
                        </Select.Item>
                      </Select.Content>
                    </Select.Root>
                    {/* Text area section */}
                    <div className="mb-4">
                      <Text as="label" className="block mb-1">
                        Case Description
                      </Text>
                      <TextArea
                        placeholder="Enter case description"
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <Button className="w-full">
                      Get Your Free Consultation
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default WillContest;
