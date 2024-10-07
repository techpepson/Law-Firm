import React from "react";
import { Helmet } from "react-helmet";
import { icons } from "../assets/icons";
import { Link, useLocation } from "react-router-dom";
import { Container, Heading } from "@radix-ui/themes";
import { estateAdmin, willDrafter } from "../assets/images";
import { staffData } from "../data/homeData";
import { motion } from "framer-motion";

import { Footer, Header } from "./component-exports";
import { InheritanceTestimonials } from "./util/InheritanceTestimonials";
import { practiceAreasStyles } from "../styles/practicesStyles";
import Consultation from "./util/Consultation";

const EstateAdmin: React.FC = () => {
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
          content="The official inheritance disputes page of Fortuna Legal Services."
        />
        <title>Inheritance Disputes</title>
        <meta
          name="keywords"
          content="Fortuna, disputes, inheritance, draft, law, will drafting, attorney, lawyer, legal, lawyers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Inheritance Disputes" />
        <meta
          property="og:description"
          content="The official inheritance disputes page of Fortuna Legal Services."
        />
        <meta
          property="og:image"
          content="https://fortuna-legal.com/practice-areas/inheritance-disputes"
        />
        <meta
          property="og:url"
          content="https://fortuna-legal.com/practice-areas/inheritance-disputes"
        />
      </Helmet>
      {/*container for the will drafting page*/}
      <div className="bg-gradient-to-br from-slate-100 to-slate-200 bg-opacity-15">
        <Header />
        {/*container for the upper section of will drafting page*/}
        <section>
          <div className={`${practiceAreasStyles.areaUpperSectionText}`}>
            <Heading className="text-4xl">
              <span className="oleo-script-regular">
                Fortuna Estate Administration Lawyers in Singapore.
              </span>
            </Heading>
          </div>
        </section>
        {/*path section*/}
        <section>
          <div className={`${practiceAreasStyles.locationTextsContainer}`}>
            <Link to="/">
              <span className="hover:underline">Fortuna Legal</span>
            </Link>
            <button className="max-md:hidden">{icons.longRightArrow}</button>
            <button className="max-md:flex hidden">
              {icons.longArrowDown}
            </button>
            <span>Administration</span>
            <button className="max-md:hidden">{icons.longRightArrow}</button>
            <button className="max-md:flex hidden">
              {icons.longArrowDown}
            </button>
            <Link to="/practice-areas/inheritance-disputes">
              <span className="underline">
                {locationSplit === "estate-admin" && "Estate Administration"}
              </span>
            </Link>
          </div>
        </section>
        {/*intro section*/}
        <section>
          {/* upper section container */}
          <Container>
            <div
              className={`${practiceAreasStyles.upperDescriptionTextsContainer}`}
            >
              <p>
                At Fortuna Legal Attorneys, we provide comprehensive estate
                administration services, ensuring the smooth and efficient
                management of your loved one’s estate. From probate to the
                distribution of assets, our experienced legal team works
                diligently to handle all legal and administrative aspects,
                minimizing stress and delays. Whether you need assistance with
                obtaining a Grant of Probate, navigating estate taxes, or
                resolving disputes among beneficiaries, we are here to guide you
                through each step with expert counsel and personalized
                attention. Trust us to protect your interests and ensure that
                the estate is administered according to the law and your loved
                one’s wishes.
              </p>
              {/* location container */}
              <div
                className={`${practiceAreasStyles.locationIconTextContainer}`}
              >
                <button>{icons.locationIcon}</button>
                <p>
                  Fortuna Legal represents clients throughout Singapore,
                  including Orchard, Marina Bay, Raffles Place, Bukit Timah,
                  Sentosa, and Jurong.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/*detail section*/}
        <section>
          {/* container for the detail description section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: "20px",
              margin: "20px auto",
              maxWidth: "800px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "15px",
                textAlign: "center",
              }}
            >
              <span className="oleo-script-regular">
                EXPERIENCED ESTATE ADMINISTRATION ATTORNEYS IN RAFFLES PLACE AND
                WALNUT
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                fontSize: "16px",
                lineHeight: "1.5",
                color: "#555",
                textAlign: "justify",
              }}
            >
              Fortuna Legal is a trusted law firm specializing in estate
              administration services, assisting clients across Singapore. With
              vast experience in managing probate processes and estate
              distribution, our skilled team ensures the legal and financial
              complexities of estate administration are handled with care and
              precision. We offer tailored advice to help executors,
              administrators, and beneficiaries navigate the legal requirements,
              from obtaining probate to distributing assets in accordance with
              the will or intestacy laws. At Fortuna Legal, we are committed to
              ensuring estates are administered efficiently, reducing stress and
              delays for our clients. Our dedicated attorneys work to safeguard
              your interests and ensure that estate matters are settled fairly
              and in accordance with your loved one’s wishes. Trust Fortuna
              Legal to manage every aspect of estate administration with
              professionalism and sensitivity.
            </motion.p>
          </motion.div>
        </section>

        {/*considerations for will drafting*/}
        <section className="relative">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full mx-auto p-5 border border-gray-300 rounded-lg bg-white shadow-md"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl font-bold text-center text-gray-800 mb-4"
              >
                <span className="oleo-script-regular">
                  KEY CONSIDERATIONS IN ESTATE ADMINISTRATION
                </span>
              </motion.h2>
              <motion.img
                src={estateAdmin}
                alt="an image of legal documents and estate planning"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full h-auto rounded-md mb-4"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-700"
              >
                <p className="mb-4">
                  Administering an estate can be a complex process, requiring
                  careful attention to legal details and compliance with the
                  decedent’s wishes. Key considerations in estate administration
                  include:
                </p>
                <ul className="list-disc ml-5 mb-6">
                  {[
                    {
                      heading: "Obtaining Probate",
                      description:
                        "A crucial step in estate administration is obtaining a Grant of Probate, which legally confirms the executor's authority to manage the deceased’s assets. Without this, distributing the estate may be delayed or legally contested.",
                    },
                    {
                      heading: "Managing Estate Assets",
                      description:
                        "Executors are responsible for safeguarding the deceased’s assets, including bank accounts, property, and investments. Proper management is essential to ensure assets are preserved until they can be distributed to beneficiaries.",
                    },
                    {
                      heading: "Paying Estate Debts",
                      description:
                        "All outstanding debts and obligations, including taxes, must be paid before distributing the estate to beneficiaries. Failure to address these liabilities can lead to legal disputes or financial complications for the estate.",
                    },
                    {
                      heading: "Handling Beneficiary Disputes",
                      description:
                        "In some cases, disagreements may arise among beneficiaries regarding the distribution of the estate. Executors need to manage these conflicts carefully, ensuring that the estate is divided in accordance with the will and legal requirements.",
                    },
                    {
                      heading: "Tax Compliance",
                      description:
                        "Executors must ensure that all applicable estate taxes are filed and paid on time. Mismanagement of estate tax obligations can lead to penalties and complications for the beneficiaries and estate as a whole.",
                    },
                  ].map((item, index) => (
                    <li key={index} className="mb-2">
                      <strong className="font-semibold text-gray-800">
                        {item.heading}:
                      </strong>{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>
                <p className="mb-4">
                  Estate administration requires thorough legal knowledge,
                  attention to detail, and effective management of both
                  financial and personal matters. At Fortuna Legal, we offer
                  expert estate administration services to ensure that the
                  process is handled efficiently, minimizing delays and
                  complications. Whether you are an executor needing legal
                  guidance or a beneficiary concerned about the management of an
                  estate, our dedicated team is here to assist. Trust Fortuna
                  Legal to navigate the complexities of estate administration
                  with professionalism and care.
                </p>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/*will contesting representation*/}
        <section className="bg-gray-50 py-8">
          <div className="max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg bg-white shadow-md text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-800 mb-4 oleo-script-regular"
            >
              Get Professional Legal Assistance for Estate Administration in
              Raffles Place.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-700 mb-4"
            >
              Contact our experienced estate administration attorneys in Raffles
              Place to ensure that your loved one's estate is handled
              efficiently and in accordance with the law. Schedule an initial
              consultation today to discuss how we can assist you.
            </motion.p>
            <a href="#consultation">
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-200"
              >
                <span>Proceed To Our Consultation Form</span>
                <span className="ml-2">{icons.longRightArrow}</span>
              </motion.button>
            </a>
          </div>
        </section>

        {/*section for who should draft a will*/}
        <Container>
          <section className="bg-gray-50 py-8">
            <div className="mx-auto mt-10 p-6 border border-gray-300 rounded-lg bg-slate-200 shadow-md">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-bold text-xl text-center oleo-script-regular mb-4"
              >
                Who Should Consider Engaging Fortuna Legal for Estate
                Administration?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center text-gray-700 mb-4"
              >
                Estate administration involves a complex legal process to ensure
                assets are distributed according to the decedent's wishes. The
                following individuals should consider engaging Fortuna Legal for
                assistance in managing estate administration effectively:
              </motion.p>
              <ul className="list-disc pl-5 text-left">
                {[
                  {
                    heading: "Executors Needing Guidance:",
                    description:
                      "If you are named as an executor, you are responsible for handling the estate. Having legal assistance ensures you meet all legal requirements and avoid potential conflicts or missteps during the probate process.",
                  },
                  {
                    heading:
                      "Beneficiaries Concerned About Estate Distribution:",
                    description:
                      "Beneficiaries who feel their interests are not adequately represented or have concerns about the administration of the estate should seek legal advice to ensure their rights are protected.",
                  },
                  {
                    heading: "Individuals with Complex Estates:",
                    description:
                      "If the estate includes multiple properties, businesses, or significant assets, working with a legal team helps ensure that the administration process proceeds smoothly and in accordance with the law.",
                  },
                  {
                    heading: "Family Members Managing Cross-Border Estates:",
                    description:
                      "Handling estates with assets in multiple jurisdictions requires specialized knowledge to comply with international laws and tax regulations. Fortuna Legal can guide you through this complex process.",
                  },
                ].map((item, index) => (
                  <li key={index} className="mb-4">
                    <strong className="font-bold">{item.heading}</strong>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center text-gray-700 mt-4"
              >
                Consulting with an experienced estate administration attorney is
                crucial to ensure that the probate process is managed
                efficiently and in accordance with Singapore's legal framework,
                particularly in Raffles Place.
              </motion.p>
            </div>
          </section>

          {/* section for ensuring legal validity */}
          <section className="bg-gray-50 py-8">
            <div className="mx-auto p-6 border border-gray-300 rounded-br-full bg-white shadow-md">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-bold text-xl text-center mb-4 oleo-script-regular"
              >
                Ensuring Legal Validity in Estate Administration
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center text-gray-700 mb-4"
              >
                Proper estate administration is essential to ensure that your
                loved one's assets are distributed according to their wishes and
                in compliance with all relevant laws. Engaging an experienced
                estate administration attorney helps to mitigate legal
                challenges and ensures the process is handled smoothly.
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="list-disc ml-5 mb-4"
              >
                {[
                  "Ensure the estate is managed in compliance with all statutory requirements.",
                  "Address potential ambiguities in the will to avoid future conflicts.",
                  "Regularly review and update estate documents to reflect changes in life or financial circumstances.",
                ].map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </motion.ul>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center text-gray-700"
              >
                Engaging in proper estate administration ensures that your loved
                one's legacy is preserved, and their wishes are respected,
                providing peace of mind for all involved.
              </motion.p>
            </div>
          </section>
        </Container>

        {/*section for importance of choosing the right executor*/}
        <section className="bg-gray-50 py-8">
          <div className="max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg bg-white shadow-md">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-bold text-2xl text-center mb-4 oleo-script-regular"
            >
              Importance of Choosing the Right Executor
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="ml-5 list-disc mb-4"
            >
              {[
                "Choosing the appropriate executor is essential for managing your estate in a way that aligns with your wishes and prevents potential disputes among beneficiaries. An executor's ability to navigate the complexities of estate administration can significantly impact the smooth execution of your will, helping to mitigate conflicts and ensuring that your intentions are honored.",
                "The executor must be reliable, well-organized, and equipped to handle the legal obligations associated with managing an estate. Selecting an executor with these qualities is vital to ensuring that your wishes are carried out effectively, minimizing the risk of disputes among heirs and beneficiaries.",
                "Fortuna Legal can assist you in selecting an executor who will respect your wishes and manage your estate effectively, helping to prevent potential conflicts and disputes among heirs and beneficiaries.",
              ].map((item, index) => (
                <li key={index} className="mb-2 text-gray-700">
                  {item}
                </li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center"
            >
              <img
                src={willDrafter}
                alt="An image of two people exchanging handshake."
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        <section className="bg-gray-50 py-8">
          <div className="max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg bg-white shadow-md">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-bold text-2xl mb-4 oleo-script-regular"
            >
              WHY CHOOSE OUR RAFFLES PLACE ESTATE ADMINISTRATION ATTORNEYS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 text-gray-700"
            >
              When it comes to estate administration and planning in Singapore,
              Fortuna Legal's Attorneys offer numerous advantages. Our team
              specializes in estate administration, providing expert guidance to
              ensure your legal needs are met. By choosing us, you can expect:
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="ml-5 list-decimal mb-4"
            >
              <li className="mb-2">
                <strong>Expert Guidance</strong>: Our experienced attorneys
                specialize in estate administration, ensuring that the probate
                process is handled smoothly and in compliance with legal
                requirements.
              </li>
              <li className="mb-2">
                <strong>Personalized Solutions</strong>: We take the time to
                understand your unique situation, offering tailored strategies
                for managing estate assets and distributions.
              </li>
              <li className="mb-2">
                <strong>Clarity and Peace of Mind</strong>: We work to avoid
                potential legal disputes by ensuring that estate plans are
                clearly outlined and legally sound.
              </li>
              <li className="mb-2">
                <strong>Regular Updates</strong>: We assist you in keeping
                estate plans up to date, reflecting any changes in your personal
                or financial circumstances.
              </li>
              <li className="mb-2">
                <strong>Comprehensive Support</strong>: From the drafting of
                estate documents to the execution and probate process, we offer
                guidance through every step to ensure all legal requirements are
                satisfied.
              </li>
              <li className="mb-2">
                <strong>Protection of Assets</strong>: Our expertise ensures
                that your assets are protected and distributed according to your
                wishes, while minimizing tax liabilities and legal challenges.
              </li>
            </motion.ul>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-700"
            >
              When you choose Fortuna Legal's Attorneys for estate
              administration, you can trust in our legal expertise, personalized
              approach, and commitment to protecting your interests and legacy.
            </motion.p>
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
          <InheritanceTestimonials />
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
                  Fortuna Legal specializes in providing comprehensive services
                  for resolving inheritance disputes and estate planning. Our
                  experienced attorneys ensure that your rights are protected
                  and your intentions are clearly articulated, preventing
                  potential conflicts. With a focus on personalized service, we
                  will thoroughly assess your situation and guide you through
                  every step of the legal process. Contact us today for expert
                  assistance!
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
                id="consultation"
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <Consultation />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default EstateAdmin;
