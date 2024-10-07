import React from "react";
import { Helmet } from "react-helmet";
import { icons } from "../assets/icons";
import { Link, useLocation } from "react-router-dom";
import { Container, Heading } from "@radix-ui/themes";
import { dispute, willDrafter } from "../assets/images";
import { staffData } from "../data/homeData";
import { motion } from "framer-motion";

import { Footer, Header } from "./component-exports";
import { InheritanceTestimonials } from "./util/InheritanceTestimonials";
import { practiceAreasStyles } from "../styles/practicesStyles";
import Consultation from "./util/Consultation";

const Inheritance: React.FC = () => {
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
      <div className="bg-gradient-to-br from-slate-100 to-slate-200 bg-opacity-15 overflow-hidden">
        <Header />
        {/*container for the upper section of will drafting page*/}
        <section>
          <div className={`${practiceAreasStyles.areaUpperSectionText}`}>
            <Heading className="text-4xl">
              <span className="oleo-script-regular">
                Fortuna Inheritance Dispute Lawyers in Singapore.
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
            <span>Probate</span>
            <button className="max-md:hidden">{icons.longRightArrow}</button>
            <button className="max-md:flex hidden">
              {icons.longArrowDown}
            </button>
            <Link to="/practice-areas/inheritance-disputes">
              <span className="underline">
                {locationSplit === "inheritance-disputes" &&
                  "Inheritance Disputes"}
              </span>
            </Link>
          </div>
        </section>
        {/*intro section*/}
        <section>
          {/*upper section container*/}
          <Container>
            <div
              className={`${practiceAreasStyles.upperDescriptionTextsContainer}`}
            >
              <p>
                At Fortuna Legal Attorneys, we specialize in resolving
                inheritance disputes with a focus on protecting your rights and
                ensuring a fair outcome. Whether you are contesting a will or
                facing a challenge to an estate distribution, our experienced
                legal team is here to advocate on your behalf. We guide you
                through every step of the dispute resolution process, offering
                expert advice to help you make informed decisions. Trust us to
                provide the legal support you need during challenging times,
                safeguarding your interests and ensuring a just resolution for
                you and your loved ones.
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
          {/*container for the de6tail description section*/}
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
                EXPERT INHERITANCE DISPUTE ATTORNEYS IN RAFFLES PLACE AND WALNUT
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
              Fortuna Legal is a leading law firm specializing in inheritance
              dispute resolution, serving clients across Singapore. With
              extensive experience in estate and succession planning, as well as
              a thorough understanding of the legal complexities involved in
              inheritance conflicts, our dedicated team of attorneys ensures
              that your rights are protected, and disputes are resolved
              efficiently. We provide personalized guidance throughout the
              entire dispute resolution process, advocating for fair and
              equitable outcomes. At Fortuna Legal, we are committed to
              minimizing legal complications and ensuring that inheritance
              matters are handled with professionalism and care. Our team's
              expertise in dispute resolution allows us to provide tailored
              solutions that reflect your unique circumstances and objectives.
              Trust Fortuna Legal to navigate complex inheritance disputes with
              precision and dedication, preserving your legacy and peace of
              mind.
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
                  KEY CONSIDERATIONS IN RESOLVING INHERITANCE DISPUTES
                </span>
              </motion.h2>
              <motion.img
                src={dispute}
                alt="an image of people quarrelling"
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
                  When navigating an inheritance dispute, it is crucial to
                  ensure that all legal aspects are thoroughly addressed to
                  minimize conflicts or complications. Key factors to consider
                  include:
                </p>
                <ul className="list-disc ml-5 mb-6">
                  {[
                    {
                      heading: "Validity of the Will",
                      description:
                        "In inheritance disputes, one of the key issues is whether the will was properly executed. If it was not signed by the testator in the presence of witnesses, or if the witnesses’ signatures are in question, the will’s validity could be challenged.",
                    },
                    {
                      heading: "Testamentary Capacity",
                      description:
                        "A common point of contention in inheritance disputes is whether the testator was of sound mind when the will was created. Disputes may arise if beneficiaries believe the testator did not fully understand the nature of their assets, their relationships with heirs, or the legal implications of their decisions.",
                    },
                    {
                      heading: "Ambiguities in the Will",
                      description:
                        "Disputes often occur when a will is vague or lacks clear instructions on how the estate should be distributed. Unclear language or incomplete details regarding assets and beneficiaries can lead to conflicting interpretations and challenges by heirs.",
                    },
                    {
                      heading: "Undue Influence",
                      description:
                        "Inheritance disputes may arise if there are suspicions that the testator was pressured or manipulated by someone to alter the will in their favor. Claims of undue influence can lead to legal challenges aimed at invalidating the will or specific provisions.",
                    },
                    {
                      heading: "Disinheritance of Family Members",
                      description:
                        "When close family members, such as children or spouses, are left out of a will or receive significantly less than expected, disputes may arise. Contesting a will based on perceived unfairness or omission can lead to legal proceedings, especially if there is a suspicion of improper conduct.",
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
                  Handling inheritance disputes requires meticulous attention to
                  detail, a thorough understanding of estate law, and skilled
                  legal representation. It is crucial to work with an attorney
                  experienced in managing disputes over wills and estates,
                  especially within Singapore's legal framework. At Fortuna
                  Legal, our team can provide expert advice and representation
                  to protect your rights as a beneficiary or executor and help
                  resolve conflicts surrounding a contested will. We’ll work
                  diligently to ensure that your case is handled efficiently,
                  minimizing disputes and safeguarding your interests. Whether
                  you are contesting or defending a will, we are here to offer
                  sound legal strategies tailored to your unique circumstances.
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
              Get Effective Representation for Inheritance Disputes in Raffles
              Place.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-700 mb-4"
            >
              Contact our experienced Raffles Place attorneys today to secure
              effective representation for your inheritance dispute. Schedule an
              initial consultation now!
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-200"
            >
              <span>Proceed To Our Consultation Form</span>
              <span className="ml-2">{icons.longRightArrow}</span>
            </motion.button>
          </div>
        </section>

        {/*section for who should draft a will*/}
        <Container>
          <section className="bg-gray-50 py-8">
            <div className=" mx-auto mt-10 p-6 border border-gray-300 rounded-lg bg-slate-200 shadow-md">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-bold text-xl text-center oleo-script-regular mb-4"
              >
                Who Should Consider Engaging Fortuna Legal for Assistance with
                Inheritance Disputes?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center text-gray-700 mb-4"
              >
                Effective estate planning is essential to guarantee that your
                assets are allocated according to your intentions. The following
                individuals should consider engaging Fortuna Legal for
                assistance in managing inheritance disputes to protect their
                interests:
              </motion.p>
              <ul className="list-disc pl-5 text-left">
                {[
                  {
                    heading: "Individuals Facing Inheritance Disputes:",
                    description:
                      "If you are involved in an inheritance dispute, it is crucial to have a clearly documented will to support your claims and ensure your wishes are respected. This is particularly vital for individuals who have substantial assets or family members who may contest the distribution.",
                  },
                  {
                    heading: "People Experiencing Significant Life Changes:",
                    description:
                      "If you have recently undergone a major life event, such as marriage, divorce, or the birth of a child, it’s important to address any potential disputes by reviewing and updating your will to reflect your current situation and intentions.",
                  },
                  {
                    heading: "Beneficiaries or Heirs Involved in Disputes:",
                    description:
                      "If you are a named beneficiary or heir and find yourself in a dispute regarding the estate, ensuring that the will is properly drafted and reviewed can help clarify your rights and reduce the likelihood of prolonged legal battles.",
                  },
                  {
                    heading:
                      "Business Owners and Entrepreneurs with Inheritance Issues:",
                    description:
                      "For business owners, having a well-documented will is essential to navigate potential disputes over ownership or control of the business, ensuring that your wishes are upheld and the transition is smooth.",
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
                Consulting with an experienced attorney specializing in will
                drafting and review is essential to assess your eligibility and
                grasp the specific requirements and processes associated with
                handling inheritance disputes in Singapore, particularly in
                Raffles Place.
              </motion.p>
            </div>
          </section>
        </Container>

        {/*section for ensuring legal validity*/}
        <section className="bg-gray-50 py-8">
          <div className=" mx-auto p-6 border border-gray-300 rounded-br-full bg-white shadow-md">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-bold text-xl text-center mb-4 oleo-script-regular"
            >
              Ensuring Legal Validity in Inheritance Disputes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center text-gray-700 mb-4"
            >
              Properly addressing inheritance disputes is vital to ensuring that
              your estate is distributed according to your wishes and to
              minimize the potential for legal challenges. Engaging with
              experienced estate planning attorneys at Fortuna Legal can help
              you construct a will that is compliant with all relevant laws and
              is clearly articulated. This proactive approach significantly
              reduces the likelihood of conflicts among heirs or beneficiaries
              and ensures that your intentions are upheld in any legal scrutiny.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="list-disc ml-5 mb-4"
            >
              {[
                "Ensure your will is legally sound and meets all statutory requirements.",
                "Address potential ambiguities to avoid future misunderstandings or conflicts.",
                "Regularly review and update your will to reflect changes in your life or financial situation.",
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
              Proper estate planning is essential for safeguarding your legacy
              and ensuring peace of mind for you and your loved ones.
            </motion.p>
          </div>
        </section>

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
              WHY CHOOSE OUR RAFFLES PLACE WILL INHERITANCE DISPUTE ATTORNEYS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 text-gray-700"
            >
              When it comes to inheritance disputes and estate planning in
              Singapore, choosing Fortuna Legal's Attorneys provides numerous
              benefits. Our team of experienced attorneys specializes in
              inheritance dispute cases, ensuring that you receive top-notch
              legal representation. By choosing us, you can expect:
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="ml-5 list-decimal mb-4"
            >
              <li className="mb-2">
                <strong>Expert Guidance</strong>: Our experienced attorneys
                specialize in inheritance disputes, ensuring your inheritance
                dispute case is legally sound and tailored to your needs.
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
                throughout the entire estate planning process, from drafting to
                execution, ensuring all legal requirements are met.
              </li>
              <li className="mb-2">
                <strong>Protection of Assets</strong>: Our expertise in estate
                planning helps safeguard your assets and ensure they are
                distributed according to your wishes.
              </li>
            </motion.ul>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-700"
            >
              When you choose Fortuna Legal's Attorneys for your inheritance
              disputes and review matters, you can have confidence in our
              expertise, strategic approach, and commitment to your best
              interests.
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
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Consultation />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Inheritance;
